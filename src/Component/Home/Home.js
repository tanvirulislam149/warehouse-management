import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';
import Testimonial from '../Testimonial/Testimonial';
import TopItems from '../TopItems/TopItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopItems></TopItems>
            <Specialities></Specialities>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;