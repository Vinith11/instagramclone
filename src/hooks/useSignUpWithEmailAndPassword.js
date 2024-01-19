import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  // useCreateUserWithEmailAndPassword hook to get the createUserWithEmailAndPassword function, the loading state, and any error
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  // Use the Zustand auth store to get the login action
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }

    // Get a reference to the users collection in Firestore
    const usersRef = collection(firestore, "users");

    // Create a query to find users with the same username as the input username
    const q = query(usersRef, where("username", "==", inputs.username));
    // Execute the query and get the results
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      // If the user was successfully created
      if (newUser) {
        // Create a user document with the user's information
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        // Save the user document in the "users" collection in Firestore
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        // Save the user's information in local storage
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        // Log the user in using the Zustand auth store's login action
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
