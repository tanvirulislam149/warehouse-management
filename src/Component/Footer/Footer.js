import React from 'react';
import forklift from "../../images/forklift.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <p className='my-0 py-0 text-decoration-none text-white nav-brand fw-bold'><img style={{ height: "70px" }} src={forklift} alt="" /> DEPOT</p>
        </div>
    );
};

export default Footer;