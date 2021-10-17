import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { title, description, img, icon } = service;
    return (
        <Col className="service">
            <div>
                <img className="mw-100" src={img} alt="" />
            </div>
            <div className="p-4 d-flex">
                <div className="icon bg-danger">
                    <i className={`${icon} text-white`} aria-hidden="true"></i>
                </div>
                <div className="service-details">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <Link to="">See more  <i className="fa fa-arrow-right text-success ms-1" aria-hidden="true"></i></Link>
                </div>
            </div>
        </Col >
    );
};

export default Service;