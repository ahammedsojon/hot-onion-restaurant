import React from 'react';
import { Col, FloatingLabel, Form } from 'react-bootstrap';
import './CartForm.css';
const CartFrom = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('sign in')
    }
    return (
        <Col xs={12} lg={5} className="me-2">
            <div className="cart-form">
                <h2 className="pb-2 border-bottom border-1 border-dark">Edit delivery details</h2>
                <div className="mt-3">
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control type="text" placeholder="Deliver to door" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control type="text" placeholder="Road" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control type="text" placeholder="Flat, suite or floor" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control type="text" placeholder="Business Name" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Add delivery instructor">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="mt-3">
                            <button className="btn btn-danger d-block w-100">Save & Continue</button>
                        </div>
                    </Form>
                </div>
            </div>
        </Col>
    );
};

export default CartFrom;