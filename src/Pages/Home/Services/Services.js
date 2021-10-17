import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service1 from '../../../images/Image/service1.png'
import Service2 from '../../../images/Image/service2.png'
import Service3 from '../../../images/Image/service3.png'
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fast Delivery',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum veniam provident eligendi, asperiores aliquid in ipsam debitis eveniet culpa hic.',
            icon: 'fa fa-bus',
            img: Service1,
        },
        {
            id: 2,
            title: 'A Good Auto Responder',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum veniam provident eligendi, asperiores aliquid in ipsam debitis eveniet culpa hic.',
            icon: 'fa fa-bell',
            img: Service2,
        },
        {
            id: 3,
            title: 'Home Delivery',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum veniam provident eligendi, asperiores aliquid in ipsam debitis eveniet culpa hic.',
            icon: 'fas fa-shuttle-van ',
            img: Service3,
        }
    ]
    return (
        <div className="services">
            <Container>
                <div className="w-50">
                    <h2>Why you choose us</h2>
                    <p className="mt-3 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum veniam provident eligendi, asperiores aliquid in ipsam debitis eveniet culpa hic.</p>
                </div>

                <Row xs={1} md={2} lg={3}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Services;