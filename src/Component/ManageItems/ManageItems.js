import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleItem from '../SingleItem/SingleItem';

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container my-5'>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>All Items</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <Row xs={1} md={3} className="g-4">

                {
                    products.map(product => <SingleItem key={product._id} product={product}></SingleItem>)
                }
            </Row>
        </div>
    );
};

export default ManageItems;