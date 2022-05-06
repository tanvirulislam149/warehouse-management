import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    let params = useParams();
    const [item, setItem] = useState();
    const [quantityState, setQuantityState] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setQuantityState(data.quantity);
            });
    }, [])

    const handleQuantity = () => {
        if (quantityState > 0) {
            const quantity = quantityState;
            const newQuantity = parseInt(quantity) - 1;
            setQuantityState(newQuantity);
        }
    }
    return (
        <Card className='w-50 mx-auto border-0'>
            <Card.Img className='w-50 mx-auto' variant="top" src={item?.picture} />
            <Card.Body>
                <Card.Title>{item?.name}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <h6>Id: {item?._id}</h6>
                <h6>Supplier: {item?.supplierName}</h6>
                <h6>Price: ${item?.price}</h6>
                <h6>Quantity: {quantityState}</h6>
                <h6 className={quantityState <= 0 ? 'text-danger fw-bold d-block' : "d-none"}>Sold Out</h6>
                <Button onClick={handleQuantity} variant="primary">Delivered</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;