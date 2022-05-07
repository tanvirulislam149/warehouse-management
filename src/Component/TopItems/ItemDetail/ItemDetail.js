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
                    "content-type": "application/json",
                },
                body: JSON.stringify({ quantityNumber }),
            })
                .then((res) => res.json())
                .then((json) => {
                    const quantity = quantityNumber;
                    const newQuantity = parseInt(quantity) - 1;
                    setquantityNumber(newQuantity);
                })

        }
    }

    const restockSubmit = (event) => {
        event.preventDefault();
        let restockNumber = parseInt(event.target.restock.value);
        fetch(`http://localhost:5000/restockQuantity/${params.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ restockNumber }),
        })
            .then((res) => res.json())
            .then((json) => {
                setquantityNumber(restockNumber);
            })
        event.target.restock.value = "";
    }

    return (
        <Card className='w-50 mx-auto border-0'>
            <Card.Img className='w-50 mx-auto' variant="top" src={item?.picture} />
            <Card.Body>
                <Card.Title>{item?.name.toUpperCase()}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <h6>Id: {item?._id}</h6>
                <h6>Supplier: {item?.supplierName}</h6>
                <h6>Price: ${item?.price}</h6>
                <h6>Quantity: {quantityNumber}</h6>
                <h6 className={quantityNumber <= 0 ? 'text-danger fw-bold d-block' : "d-none"}>Sold Out</h6>
                <Button onClick={handleQuantity} variant="primary">Delivered</Button>
                <form className='mt-4' onSubmit={restockSubmit}>
                    <input type="number" name="restock" id="" /><br />
                    <input className='border-0 bg-success text-white fw-bold mt-3' type="submit" value="Restock" />
                </form>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;