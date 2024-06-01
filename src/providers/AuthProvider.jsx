import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register with Email & Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Email & Password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with Facebook
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    // Sign in with Github
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // Sign Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Observer Function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signIn, googleLogin, facebookLogin, githubLogin, logOut, userLoading: loading, setUserLoading: setLoading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
