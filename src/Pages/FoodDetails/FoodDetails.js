import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Food from '../../data/data';
import useAuth from '../../hooks/useAuth';
import './FoodDetails.css';

const FoodDetails = () => {
    const { addToCart } = useAuth();
    const { foodId } = useParams();
    const [foods] = useState(Food);
    const [food, setFood] = useState({})
    useEffect(() => {
        foods.find(food => {
            if (food.id === +foodId) {
                setFood(food);
            }
        })
    }, [])
    const { id, img, category, price } = food;
    const [quantity, setQuantity] = useState(1);
    const priceDecrease = () => {
        let newQuantity = quantity - 1;
        if (newQuantity <= 0) {
            newQuantity = 1;
        }
        setQuantity(newQuantity)
    }
    const priceIncrease = () => {
        let newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    return (
        <div className="food-details">

            <Container>
                <Row xs={1} md={2} className="justify-content-center align-items-center">
                    <Col>
                        <h2 className="text-capitalize">{category}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur facilis voluptas praesentium reiciendis enim laborum, repellat quam vel perferendis quae iure eum. Porro ipsa omnis quo veritatis neque natus?</p>
                        <div>
                            <h4 className="d-inline-block me-3">${(price * quantity).toFixed(2)}</h4>
                            <div className="btn btn-lg rounded-pill border">
                                <button onClick={priceDecrease} className="bg-transparent border-0 ">-</button> <span className="mx-2">{quantity}</span> <button onClick={priceIncrease} className="text-danger bg-transparent border-0">+</button>
                            </div>
                        </div>
                        <Link onClick={() => addToCart(food)} to="/cart">
                            <button className="btn btn-danger rounded-pill mt-3">
                                <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                Add
                            </button>
                        </Link>
                    </Col>
                    <Col className="text-center"><img height="400px" className="mw-100 mx-auto" src={img} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;