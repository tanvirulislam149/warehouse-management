import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState(false);


    useEffect(() => {
        fetch("https://rocky-oasis-63837.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setData(true);
            });
    }, [])

    const deleteItem = (id) => {
        if (window.confirm("Are U Sure?") === true) {
            fetch(`https://rocky-oasis-63837.herokuapp.com/product/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const newProducts = products.filter(product => product._id !== id);
                    setProducts(newProducts);
                });
        }
    }

    let navigate = useNavigate();
    const goToAddItem = () => {
        navigate("/addItem");
    }


    return (
        <div>
            <img className='w-100' style={{ height: "40vh" }} src="https://www.omsguru.com/wp-content/uploads/2019/11/02-1.jpg" alt="" />
            <div className='container my-5'>
                {
                    data ?
                        <>
                            <h1 className='text-center fw-bold text-color mt-5 item-header'>All Items</h1>
                            <hr className='mb-5 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
                            <table className='w-50 mx-auto'>
                                <tbody>
                                    {
                                        products.map(product =>
                                            <tr className='border-1' key={product._id}>
                                                <th className='text-center'><img style={{ width: "50px" }} src={product.picture} alt="" /></th>
                                                <th className='text-center px-1 px-md-3 py-3'>{product.name.toUpperCase()}</th>
                                                <th className='text-center px-1 px-md-3'>Price: ${product.price}</th>
                                                <th className='text-center fs-1 px-1 px-md-3'><button onClick={() => deleteItem(product._id)} className='border-0 bg-white text-danger'><FontAwesomeIcon icon={faTrashAlt} /></button></th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <Button onClick={goToAddItem} className='fw-bold ms-auto d-block mt-5' variant='primary'>Add New Item <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </> : <Loading></Loading>
                }
            </div>
        </div>
    );
};

export default ManageItems;