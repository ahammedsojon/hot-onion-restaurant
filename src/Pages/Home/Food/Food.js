import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Food.css';

const Food = ({ food }) => {
    const { img, name, description, price, id, category } = food;
    const history = useHistory();
    const handleFoodDetails = id => {
        history.push(`/${category}/${id}`)
    }
    return (
        <Col className="food text-center">
            <div className="mb-3">
                <img className="w-50" src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
            <button onClick={() => handleFoodDetails(id)} className="btn btn-danger mt-3 rounded-pill"><i className="fas fa-utensils me-2"></i> Get me</button>
        </Col>
    );
};

export default Food;