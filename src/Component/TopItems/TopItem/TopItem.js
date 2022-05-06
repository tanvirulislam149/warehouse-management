import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./TopItem.css";

const TopItem = (props) => {
    const {item} = props;
    let navigate = useNavigate();
    const goToDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <Col>
            <Card className='equal-card border-0'>
                <div>
                    <Card.Img className='card-image' variant="top" src={item?.picture} />
                </div>
                <div>
                    <Card.Body>
                        <Card.Title className='title fw-bold'>{item?.name}</Card.Title>
                        <Card.Text className='text-justify'>{item?.shortDescription}</Card.Text>
                        <h6>Price: ${item?.price}</h6>
                        <h6>Quantity: {item?.quantity}</h6>
                        <h6>Supplier: {item?.supplierName}</h6>
                        <button onClick={() => goToDetail(item?._id)} className='update-btn'>Details</button>
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default TopItem;