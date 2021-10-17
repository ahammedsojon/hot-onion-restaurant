import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rider from '../../images/Image/Group 1151.png';
import Logo from '../../images/Image/Group 1152.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={5}>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d116807.31119379669!2d90.34247674770208!3d23.810473246174677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!3m2!1d23.810332!2d90.4125181!5e0!3m2!1sen!2sbd!4v1634364130413!5m2!1sen!2sbd" className="mw-100 w-100" height="550" loading="lazy" title="1"></iframe>
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="ms-auto ">
                        <div className="bg-secondary bg-opacity-50 p-3 rounded">
                            <div className="text-center">
                                <img width="100px" src={Rider} alt="" className="mw-100" />
                            </div>
                            <div className="bg-white my-3 ps-3 py-3">
                                <div className="d-flex">
                                    <div className=" text-danger me-3">
                                        <i className="fas fa-map-marker"></i>
                                    </div>
                                    <div>
                                        <h5>Your location</h5>
                                        <p>107 Rd No 8</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className=" text-danger me-3">
                                        <i className="fas fa-location-arrow"></i>
                                    </div>
                                    <div>
                                        <h5>Shop address</h5>
                                        <p>Gulshan Plaza Restaure GPR</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>
                                    09:30
                                </h3>
                                <p>Estimated delivery time</p>
                            </div>

                            <div className="d-flex align-items-center justify-content-between bg-white p-3 mb-3">
                                <div>
                                    <img width="50px" className="mw-100" src={Logo} alt="" />
                                </div>
                                <div>
                                    <h5>Hamim</h5>
                                    <p>Your Rider</p>
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-danger w-100">Contact</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;