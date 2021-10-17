import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, sendEmailVerification, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const githubSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const facebookSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('')
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        const unsubrscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubrscribed;
    }, [user.displayName])

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleImageChange = e => {
        setImage(e.target.value);
    }

    const processSignUp = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const processLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, image) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, { displayName: name, photoURL: image })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            }).finally(() => setIsLoading(false))
    }

    const verifyEmail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    const resetPassword = () => {
        console.log(email)
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        setIsLoading,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        processLogIn,
        processSignUp,
        email,
        password,
        handleNameChange,
        name,
        updateUser,
        handleImageChange,
        image,
        resetPassword,
        error,
        setError,
        verifyEmail,
        setUser
    };

}
export default useFirebase;