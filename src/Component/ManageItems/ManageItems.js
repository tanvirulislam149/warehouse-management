import React, { useEffect, useState } from 'react';

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
            <table className='w-50 mx-auto'>
                <tbody>
                    {
                        products.map(product =>
                            <tr className='border-1' key={product._id}>
                                <th className='text-center'><img style={{ width: "50px" }} src={product.picture} alt="" /></th>
                                <th className='text-center'>{product.name}</th>
                                <th className='text-center'>Price: ${product.price}</th>
                                <th className='text-center'><button className='text-white bg-danger border-0 fw-bold px-2'>Delete</button></th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;