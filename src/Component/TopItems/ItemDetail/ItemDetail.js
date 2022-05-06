import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    let params = useParams();
    const [item, setItem] = useState([]);
    const [quantityNumber, setquantityNumber] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setquantityNumber(data.quantity);
            });
    }, [])

    const handleQuantity = () => {
        if (quantityNumber > 0) {
            fetch(`http://localhost:5000/updateQuantity/${params.id}`, {
                method: "PUT", 
                headers: {
                    "content-type" : "application/json",
                },
                body: JSON.stringify({quantityNumber}),
            })
            .then((res) => res.json())
            .then((json) => {
                const quantity = quantityNumber;
                const newQuantity = parseInt(quantity) - 1;
                setquantityNumber(newQuantity);
                console.log(json);
            })
            
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
                <h6>Quantity: {quantityNumber}</h6>
                <h6 className={quantityNumber <= 0 ? 'text-danger fw-bold d-block' : "d-none"}>Sold Out</h6>
                <Button onClick={handleQuantity} variant="primary">Delivered</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;