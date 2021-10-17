import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../images/logo2.png';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const history = useHistory();
    const { processSignUp, handleEmailChange, handlePasswordChange, email, password, handleNameChange, name, updateUser, image, handleImageChange, verifyEmail, setUser, error, setError, user } = useAuth()
    const handleRegister = e => {
        e.preventDefault();
        setError('');
        processSignUp(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(name, image)
                verifyEmail();
                history.push('/');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className="login">
            <div className="text-center">
                {
                    error === 'Firebase: Error (auth/user-not-found).' &&
                    <h2 className="text-danger mb-3">Please create an account first!</h2>
                }
                <img width="250px" src={Logo} alt="" />
            </div>
            <div className="w-25 mx-auto mt-5">
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control onBlur={handleImageChange} type="name" placeholder="Image URL Includes HTTPS" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <div>
                        <button className="btn btn-danger d-block w-100">Create account</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;