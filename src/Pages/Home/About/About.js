import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="mb-5">
                <h1 className="service-sec-title my-5">Who We Are?</h1>
                <div className="row about">
                    <div className="col-md-6">
                        <img className="w-100 rounded" src="https://i.ibb.co/nmHgh2w/about.jpg" alt="" />
                    </div>
                    <div className="col-md-6 ps-3">
                        <h3>We Are Travel Experts</h3>
                        <p>BD Travel was not a guide for the average tourist. It was not where you would find the best place to buy tacky souvenirs, sell you generic guided tours, or highlight the same old tourist attractions.</p>
                        <p>From 2015 - 2019, BD Travel featured the vibrant neighborhoods around the world where contemporary arts and culture thrive and tolerance is celebrated. It was the quintessential exploration guide made by and for the urban creatives.</p>
                        <button className="desc-btn px-4 py-2">Learn More</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;