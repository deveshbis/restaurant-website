import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [reload, setReload] = useState(false);

    const axiosPublic = useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
        

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false); 
            if (user) {
                const userInfo = {email: user.email}
                axiosPublic.post("/jwt", userInfo )
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token)
                    }
                })
            }
            else{
                setLoading(false); 
                localStorage.removeItem("access-token");
            }
        });
        return () => unSubscribe();
    }, [axiosPublic])


    const allValue = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        logoutUser,
        updateUserProfile
        
    };
    return (
        <AuthContext.Provider value={allValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;