'use client'
import { createContext, useEffect, useState } from "react";
import {
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { app } from "@/js/firebase.init";

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
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name) => {
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
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent successfully.");
        } catch (error) {
            setError(`Password Reset Error: ${error.message}`);
        }
    };

    const verifyPassword = async (actionCode, newPassword) => {
        try {
            await confirmPasswordReset(auth, actionCode, newPassword);
            console.log('Password reset successful');
        } catch (error) {
            setError(`Error resetting password: ${error.message}`);
        }
    };

    const logOut = () => {
        router.push('/');
        Cookies.remove('userToken');
        localStorage.removeItem('paymentLink');
        return signOut(auth);
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setLoader(true); // Show loader while fetching user data
                try {
                    // Avoid re-fetching if the token is already in cookies
                    const token = Cookies.get('userToken');
                    if (!token) {
                        const response = await axiosPublic.post('/userEmail', { email: currentUser.email, userName: currentUser.displayName });
                        const { token } = response?.data;
                        if (token) {
                            Cookies.set('userToken', token, { expires: 1 / 24 });
                            setUser(currentUser);
                        }
                    } else {
                        setUser(currentUser); // User is authenticated
                    }
                } catch (error) {
                    setError(`Error fetching user data: ${error.message}`);
                }
                setLoader(false);
            } else {
                // If no user, clear token and user data
                setUser(null);
                if (!user) {
                    localStorage.removeItem('paymentLink');
                }
                setLoader(false);
            }
        });

        return () => subscribe(); // Cleanup subscription on unmount
    }, [auth, axiosPublic]);

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
