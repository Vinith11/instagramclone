import { Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import google from "../../assets/google.png";
import { auth, firestore } from "../../firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useAuthStore from "../../store/authStore";
import { doc, setDoc } from "firebase/firestore";

function GoogleAuth({prefix}) {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);

  const showToast = useToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {

      const newUser = await signInWithGoogle();
      if(!newUser && error){
        showToast("Error", error.message, "error")
        return;
      }

      if(newUser){
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          fullname: newUser.user.displayName,
          username: newUser.user.email.split("@")[0],
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
      
    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }
    

  return (
    <Flex alignItems={"center"} cursor={"pointer"} justifyContent={"center"}
    onClick={handleGoogleAuth}
    >
      <Image src={google} w={5} alt="google logo" />
      <Text mx={2} color={"blue.500"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
}

export default GoogleAuth;
