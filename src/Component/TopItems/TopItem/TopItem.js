import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./TopItem.css";

const TopItem = ({ product }) => {
    return (
        <Col>
            <Card className='equal-card border-0'>
                <div>
                    <Card.Img className='card-image' variant="top" src={product.picture} />
                </div>
                <div>
                    <Card.Body>
                        <Card.Title className='title fw-bold'>{product.name}</Card.Title>
                        <Card.Text className='text-justify'>{product.shortDescription}</Card.Text>
                        <h6>Price: ${product.price}</h6>
                        <h6>Quantity: ${product.quantity}</h6>
                        <h6>Supplier: ${product.supplier}</h6>
                        <button className='update-btn'>Update</button>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default TopItem;