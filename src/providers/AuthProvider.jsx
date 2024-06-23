import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from '../components/Hooks/useAxiosSecure';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


// export const AuthContext = createContext({ user: '', loading: false, createUser: (email, password) => { }, signIn: (email, password) => { }, logOut: () => { } });
export const AuthContext = createContext({ user: '', loading: false, createUser: (email, password) => { }, signIn: (email, password) => { }, logOut: () => { } });

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

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

    // Sign Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Observer Function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosSecure.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // todo: remove token
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [axiosSecure])

    const authInfo = { user, loading, googleLogin, createUser, signIn, logOut, setUser };

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
