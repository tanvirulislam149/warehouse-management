import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const deleteItem = (id) => {
        alert("Are You Sure Want To Delete This Item?");
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const newProducts = products.filter(product => product._id !== id);
                setProducts(newProducts);
            });
    }

    let navigate = useNavigate();
    const goToAddItem = () => {
        navigate("/addItem");
    }


    return (
        <div className='container my-5'>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>All Items</h1>
            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <table className='w-50 mx-auto'>
                <tbody>
                    {
                        products.map(product =>
                            <tr className='border-1' key={product._id}>
                                <th className='text-center'><img style={{ width: "50px" }} src={product.picture} alt="" /></th>
                                <th className='text-center px-1 px-md-3 py-3'>{product.name}</th>
                                <th className='text-center px-1 px-md-3'>Price: ${product.price}</th>
                                <th className='text-center fs-1 px-1 px-md-3'><button onClick={() => deleteItem(product._id)} className='border-0 bg-white text-danger'><FontAwesomeIcon icon={faTrashAlt} /></button></th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Button onClick={goToAddItem} className='fw-bold ms-auto d-block mt-5' variant='primary'>Add New Item <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div>
    );
};

export default ManageItems;