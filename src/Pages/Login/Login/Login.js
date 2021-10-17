import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../images/logo2.png';
import './Login.css';
const Login = () => {
    const { googleSignIn, handleEmailChange, handlePasswordChange, processLogIn, email, password, error, setError, setIsLoading, resetPassword, githubSignIn, facebookSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleLogIn = e => {
        e.preventDefault();
        processLogIn(email, password)
            .then((result) => {
                const user = result.user;
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error)
            }).finally(() => {
                error === 'Firebase: Error (auth/user-not-found).' &&
                    history.push('/register');
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setError('');
            }).finally(() => {
                setIsLoading(false);
            })
        history.push(redirect_uri)
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                setError('');
            }).finally(() => {
                setIsLoading(false);
            })
        history.push(redirect_uri)
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then((result) => {
                const user = result.user;
                setError('');
            }).finally(() => {
                setIsLoading(false);
            })
        history.push(redirect_uri)
    }

    const styleImg = {
        cursor: 'pointer'
    }
    return (
        <div className="login">
            <div className="text-center">
                <img width="250px" src={Logo} alt="" />
            </div>
            <div className="w-25 mx-auto mt-5">
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    {
                        error === 'Firebase: Error (auth/wrong-password).' && <a onClick={resetPassword} className="d-inline-block mb-2 text-decoration-none" href="https://mail.google.com/mail/u/0/#inbox">Forgot Password?</a>
                    }
                    <div>
                        <button type="submit" className="btn btn-danger d-block w-100">Sign in</button>
                    </div>
                </Form>
                <div className="my-4 d-flex justify-content-around align-items-center">
                    <img onClick={handleGoogleSignIn} style={styleImg} width="40px" className="mw-100" src="https://cdn-icons.flaticon.com/png/512/720/premium/720255.png?token=exp=1634368619~hmac=8703ac8e93725c799023fb21770fab26" alt="" />
                    <img onClick={handleGithubSignIn} style={styleImg} width="40px" className="mw-100" src="https://cdn-icons-png.flaticon.com/512/889/889111.png" alt="" />
                    <img onClick={handleFacebookSignIn} style={styleImg} width="40px" className="mw-100" src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" />
                </div>
                <p className="text-center">Not have an accout? <Link className="text-decoration-none" to="/register">Sign up</Link> </p>
            </div>
        </div>
    );
};

export default Login;