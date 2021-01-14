import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Marquee from './Marquee';
import MidBanner from './MidBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquee></Marquee>
            <MidBanner></MidBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;