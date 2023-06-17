import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import './DeleteProduct.css';
import UseProducts from '../../../Hooks/UseProducts/UseProducts';

const DeleteProduct = () => {
    const [products, setProducts] = UseProducts();

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mahsez-server.onrender.com/attars/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(attar => attar._id !== _id)
                    setProducts(remaining);
                })
        }
    }


    return (
        <div className='dashboard-dev2' style={{ background: 'white' }}>
            <div className='m-4 col'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/*    <Loading /> */}
                        {
                            products.map((attar, index) =>
                                <tr key={attar._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{attar.name}</td>
                                    <td><img width='50px' src={attar.img} alt='' /></td>
                                    <td><button onClick={() => handleDelete(attar._id)} className=' order-calcel-btn'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteProduct;