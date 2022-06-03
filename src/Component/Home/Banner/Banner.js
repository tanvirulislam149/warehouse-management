import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <div className='w-75 mx-auto'>
                <p style={{ fontSize: "60px" }}>Distribution, Storage, Warehousing & Fulfillment</p>
                <p style={{ fontSize: "25px" }}>Your solution for first class warehousing services for Fruits, Vegetables and Oil.</p>
            </div>
        </div>
    );
};

export default Banner;