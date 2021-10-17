import React from 'react';
import { Col, Table } from 'react-bootstrap';

const CartDetails = () => {
    return (
        <Col xs={12} lg={5} className="ms-auto">
            <div className="card-details">
                <div className="mb-5 border-bottom border-1 border-dark">
                    <p>From <span className="fw-bold">Gulshan Pizza Restaure GPR</span></p>
                    <p>Arrive in 20-30 minutes</p>
                    <p>107 Rd No 8</p>
                </div>
                <div>

                </div>
                <div>
                    <Table striped size="sm">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td>Delivery fee</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <button className="btn btn-danger w-100 d-block">Place order</button>
                </div>
            </div>
        </Col>
    );
};

export default CartDetails;