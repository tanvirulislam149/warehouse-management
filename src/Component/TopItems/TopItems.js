import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TopItem from './TopItem/TopItem';
import "./TopItems.css";

const TopItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/items")
        .then(res => res.json())
        .then(data => setItems(data));
    },[])

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/items")
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [])
    return (
        <div className='container my-5'>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>Top Items</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <Row xs={1} md={3} className="g-4">

                {
                    items.map(item => <TopItem key={item._id} item={item}></TopItem>)
                }
            </Row>
            
        </div>
    );
};

export default TopItems;