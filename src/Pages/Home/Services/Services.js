import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://pacific-citadel-68715.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    
    return (
        <div>
            <h1 className="service-sec-title mb-5">Popular Tour Places</h1>
            <div className="services container" >
                {
                    services.map(service => <div className="single-card">
                            <Card>
                                <Card.Img style={{height:"300px"}} variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.desc.slice(0,200)}
                                    </Card.Text>
                                    <Link to={`booking/${service._id}`}>
                                        <Button variant="primary">Booking Now</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div> )
                }
            </div>
        </div>
    );
};

export default Services;