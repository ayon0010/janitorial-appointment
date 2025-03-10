'use client'
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { app } from "@/js/firebase.init";
import { getAuth } from "firebase/auth";

// Create context for authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null); // Error state to manage issues

    const axiosPublic = useAxiosPublic();

    // Functions for authentication
    const signUp = async (email, password) => {
        const { createUserWithEmailAndPassword } = await import("firebase/auth");
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = async (email, password) => {
        const { signInWithEmailAndPassword } = await import("firebase/auth");
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = async (name) => {
        const { updateProfile } = await import("firebase/auth");
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    const changePassword = async (email) => {
        if (!email) {
            setError("Email is required for password reset");
            return;
        }
        try {
            const { sendPasswordResetEmail } = await import("firebase/auth");
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent successfully.");
        } catch (error) {
            setError(`Password Reset Error: ${error.message}`);
        }
    };

    const verifyPassword = async (actionCode, newPassword) => {
        try {
            const { confirmPasswordReset } = await import("firebase/auth");
            await confirmPasswordReset(auth, actionCode, newPassword);
            console.log('Password reset successful');
        } catch (error) {
            setError(`Error resetting password: ${error.message}`);
        }
    };

    const logOut = async () => {
        router.push('/');
        Cookies.remove('userToken');
        sessionStorage.removeItem('paymentLink');
        const { signOut } = await import("firebase/auth");
        return await signOut(auth);
    };

    useEffect(() => {
        let unsubscribe;
        const initAuthListener = async () => {
            const { onAuthStateChanged } = await import("firebase/auth");
            unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
                setLoader(true);
                if (currentUser) {
                    try {
                        const response = await axiosPublic.post("/userEmail", {
                            email: currentUser.email,
                            userName: currentUser.displayName,
                        });
                        const { token } = response?.data;
                        if (token) {
                            sessionStorage.setItem("userToken", token);
                            setUser(currentUser);
                        }
                    } catch (error) {
                        setError(`Error fetching user data: ${error.message}`);
                    }
                } else {
                    setUser(null);
                    sessionStorage.removeItem("userToken");
                }
                setLoader(false);
            });
        };

        initAuthListener();

        return () => unsubscribe && unsubscribe();
    }, [axiosPublic]);

    // Expose authentication methods via context
    const authInfo = {
        signUp,
        signIn,
        logOut,
        updateUserProfile,
        loader,
        user,
        changePassword,
        verifyPassword,
        error,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;