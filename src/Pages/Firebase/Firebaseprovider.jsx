import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./Firebase.config";
import toast from "react-hot-toast";



export const AuthContext = createContext(null);

const Firebaseprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider()


  const createUser = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: displayName,
          photoURL: photoURL,
        })
          .then(() => {
            return userCredential.user;
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  };

  const loginGithub =()=>{signInWithPopup(auth,githubProvider).then(()=>toast.success("Successfully logged with github")).catch((error)=>toast.error(error.message))}

  const loginGoogle =()=>{signInWithPopup(auth,googleProvider).then(()=>toast.success("Successfully logged with google")).catch((error)=>toast.error(error.message))}

  const SigninUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("observing current user", currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, imageUrl) => {
    return updateProfile(user, { displayName: name, photoURL: imageUrl });
  };

  const authInfo = { user, createUser, SigninUser, logout,updateUserProfile ,loginGithub,loginGoogle};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Firebaseprovider;
