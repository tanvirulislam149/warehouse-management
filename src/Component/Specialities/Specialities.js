import React from 'react';
import "./Specialities.css";
import storage from "../../images/storage.jpg";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Specialities = () => {
    return (
        <div className='container'>
            <h1 className='text-color item-header text-center fw-bold'>Our Specialities</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            {/* Trucking Section */}
            <div className='d-flex justify-content-center align-items-center'>
                <div className='mx-md-5 me-3 text-color'>
                    <h2 className='nav-brand fw-bold'>Trucking</h2>
                    <p className='special-text fs-4' >Whether it is overnight or during the day, across town or across the North Dakota region, we have the experience you seek</p>
                </div>
                <img className='truck' src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/truck_container.png" alt="" />
            </div>
            {/* Distribution Section */}
            <div className='d-flex justify-content-center align-items-center'>
                <img className='ship' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwZ2HOdiUTvrFwsSHWW8tsYrf1Ao80fwsLmagL1jZuSUpvwJ-33yDMjW_tKafGinDhQs&usqp=CAU" alt="" />
                <div className='mx-md-5 ms-3 text-color'>
                    <h2 className='nav-brand fw-bold'>Distribution</h2>
                    <p className='special-text fs-4' > DEPOT management system and reporting capabilities allow us to fulfill all your orders</p>
                </div>
            </div>
            {/* Storage Section */}
            <div className='mb-5 d-flex justify-content-center align-items-center'>
                <div className='mx-md-5 me-3 text-color'>
                    <h2 className='nav-brand fw-bold'>Storage</h2>
                    <p className='special-text fs-4' >We provide storage from general goods to automotive parts for long or short-term storage</p>
                </div>
                <img className='storage' src={storage} alt="" />
            </div>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <div style={{ height: 10 }}>
                        {isVisible ? <CountUp end={12323} /> : null}
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
};

export default Specialities;