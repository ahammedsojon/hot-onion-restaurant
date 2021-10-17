import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartDetails from '../CartDetails/CartDetails';
import CartFrom from '../CartForm/CartFrom';
import './Cart.css';

const Cart = () => {

    return (
        <div className="cart">
            <Container>
                <Row className="justify-contennt-center align-items-center">
                    <CartFrom></CartFrom>
                    <CartDetails></CartDetails>
                </Row>
            </Container>

        </div>
    );
};

export default Cart;