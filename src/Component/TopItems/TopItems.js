import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TopItem from './TopItem/TopItem';

const TopItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <h2>Top Items</h2>
            <Row xs={1} md={3} className="g-4">

                {
                    products.map(product => <TopItem key={product._id} product={product}></TopItem>)
                }
            </Row>
        </div>
    );
};

export default TopItems;