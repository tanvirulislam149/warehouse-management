import React from 'react';
import Services from '../Services/Services';
import Specialities from '../Specialities/Specialities';
import TopItems from '../TopItems/TopItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopItems></TopItems>
            <Specialities></Specialities>
            <Services></Services>
        </div>
    );
};

export default Home;