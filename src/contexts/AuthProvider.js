import React, { createContext, useState } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext('default');

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();

    const [cart, setCart] = useState([]);
    const addToCart = food => {
        const newCart = [...cart, food];
        setCart(newCart);
        console.log(food);
    }
    allContext.cart = cart;
    allContext.addToCart = addToCart;
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;