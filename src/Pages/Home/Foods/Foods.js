import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFoods from '../../../hooks/useFoods';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [isDefault, setIsDefault] = useState(true);
    const [foods] = useFoods();
    const [displayFoods, setDisplayFoods] = useState([]);
    useEffect(() => {
        const foodItems = foods.filter(food => food.category === 'lunch');
        setDisplayFoods(foodItems);
    }, [foods])
    const filterFoods = (item) => {
        setIsDefault(false);
        const foodItems = foods.filter(food => food.category === item);
        setDisplayFoods(foodItems);
    }

    return (
        <div className="foods">
            <div className="text-center mb-5">
                <button className="mx-5 food-item" onClick={() => filterFoods('breakfast')}>Breakfast</button>
                {
                    isDefault ? <button className="mx-5 food-item active" onClick={() => filterFoods('lunch')}>Lunch</button> :
                        <button className="mx-5 food-item" onClick={() => filterFoods('lunch')}>Lunch</button>
                }
                <button className="mx-5 food-item" onClick={() => filterFoods('dinner')}>Dinner</button>
            </div>

            {
                displayFoods.length === 0 ?
                    <div className="text-center"><Spinner animation="border" /></div> :
                    <Container>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                displayFoods.map(food => <Food
                                    key={food.id}
                                    food={food}
                                ></Food>)
                            }
                        </Row>
                    </Container>
            }
            <div className="text-center mt-5">
                <NavLink to="/cart">
                    <button className="btn btn-secondary  rounded-pill">Checkout your food</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Foods;