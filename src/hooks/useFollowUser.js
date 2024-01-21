import React, { useEffect } from "react";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { firestore } from "../firebase/firebase";


const useFollowUser = (userId) => {
  // since we doing async stuff, we need to use useState
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isFollowing, setIsFollowing] = React.useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = userProfileStore();
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
        const currentUserRef = doc(firestore, "users", authUser.uid);
        const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

        await updateDoc(currentUserRef, {
            following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
        })

        await updateDoc(userToFollowOrUnfollowRef, {
            followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
        })

        if(isFollowing){
            //unfollow
            setAuthUser({
                ...authUser,
                following: authUser.following.filter((uid) => uid !== userId)
            })
            setUserProfile({
                ...userProfile,
                followers: userProfile.followers.filter((uid) => uid !== authUser.uid)
            })

            localStorage.setItem("user-info", JSON.stringify({
                ...authUser,
                following: authUser.following.filter((uid) => uid !== userId)
            }));

            setIsFollowing(false);
        }
        else{
            //follow
            setAuthUser({
                ...authUser,
                following: [...authUser.following, userId]
            })
            setUserProfile({
                ...userProfile,
                followers: [...userProfile.followers, authUser.uid]
            })
            localStorage.setItem("user-info", JSON.stringify({
                ...authUser,
                following: [...authUser.following, userId]
            }));
            setIsFollowing(true);
        }

    } catch (error) {
        showToast("Error",error.message, "error");
    } finally {
        setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;