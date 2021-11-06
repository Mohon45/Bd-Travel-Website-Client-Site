import React from 'react';
import { Container } from 'react-bootstrap';
import './OtherHomeSection.css';

const OtherHomeSection = () => {
    return (
        <Container className="mb-5">
            <div>
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

            {/* Facilities Section */}
            <div className="facilities mt-5">
                <div>
                    <i class="fas fa-bookmark fa-3x mb-3"></i>
                    <h3>Personalized Matching</h3>
                    <p>Check out our custom matching selection for the very best in unique or custom, handmade pieces from our shops.</p>
                </div>
                <div>
                    <i class="fas fa-cubes fa-3x mb-3"></i>
                    <h3>Wide Variety Of Destinations</h3>
                    <p>The world is filled with such a wide variety of wonderful destinations and beautiful places to visit, it can be quite difficult to compile a list of the best ones.</p>
                </div>
                <div>
                    <i class="fas fa-archive fa-3x mb-3"></i>
                    <h3>Highly Qualified Service</h3>
                    <p>We describe our business as a customer service business which just happens to deliver cleaning and waste management.</p>
                </div>
                <div>
                    <i class="far fa-chart-bar fa-3x mb-3"></i>
                    <h3>Handpicked Hotels</h3>
                    <p>Hand Picked Hotels are pleased to feature 10 hotels with pools and spa facilities offering treatments from a range of top product houses including Elemis</p>
                </div>
                <div>
                    <i class="fas fa-umbrella fa-3x mb-3"></i>
                    <h3>Best Price Guarantee</h3>
                    <p>Our Best Price Guarantee means that you can be sure of booking at the best rate.If you find a lower price elsewhere within 24 hours of booking, we will match the lower rate.</p>
                </div>
                <div>
                    <i class="fas fa-users fa-3x mb-3"></i>
                    <h3>24/7 Support</h3>
                    <p>Unlike increasing throughput on a production line (making 10% more product is usually fairly simple), the move to 24/7 support is not so linear.</p>
                </div>
            </div>
        </Container>
    );
};

export default OtherHomeSection;