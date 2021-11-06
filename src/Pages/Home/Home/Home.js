import React from 'react';
import Banner from '../Banner/Banner';
import OtherHomeSection from '../OtherHomeSection/OtherHomeSection';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OtherHomeSection></OtherHomeSection>
        </div>
    );
};

export default Home;