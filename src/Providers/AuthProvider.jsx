"use client";
import { createContext, useEffect, useMemo, useState } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { app } from "@/js/firebase.init";

// Create authentication context
export const AuthContext = createContext();

// Singleton pattern to prevent multiple Firebase instances
let authInstance;
const getFirebaseAuth = () => {
    if (!authInstance) {
        authInstance = getAuth(app);
    }
    return authInstance;
};

const AuthProvider = ({ children }) => {
    const auth = getFirebaseAuth();
    const router = useRouter();
    const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    // Lazy load Firebase functions to reduce unused JavaScript
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
        return updateProfile(auth.currentUser, { displayName: name });
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
            console.log("Password reset successful");
        } catch (error) {
            setError(`Error resetting password: ${error.message}`);
        }
    };

    const logOut = async () => {
        const { signOut } = await import("firebase/auth");
        await signOut(auth);
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("paymentLink");
        router.push("/");
        setUser(null);
    };

    // Handle authentication state changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
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

        return () => unsubscribe();
    }, [axiosPublic]); // Removed `auth` from dependencies since it doesn't change

    // Memoize context values to prevent unnecessary re-renders
    const authInfo = useMemo(() => ({
        signUp,
        signIn,
        logOut,
        updateUserProfile,
        loader,
        user,
        changePassword,
        verifyPassword,
        error,
    }), [user, loader, error]);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
