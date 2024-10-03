import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './DeleteProduct.css';
import UseProducts from '../../../Hooks/UseProducts/UseProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const DeleteProduct = () => {
    const [products, setProducts] = UseProducts();
    const [deleteProduct, setDeeleteProduct] = useState('');

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mahsez-server.vercel.app/api/v1/products/${_id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(attar => attar._id !== _id);
                    setProducts(remaining);
                })
        }
    };

    /* start search product */
    const search = (event) => {
        setDeeleteProduct(event.target.value);
    };
    let productSearch = products.filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(deleteProduct.toString().toLowerCase()));
    });
    /* end search product */


    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle='Delete Product |' />
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold side-header'>Delete Product ({products.length})</h4>
                <input className='allorder-search-ber' placeholder='Search Order' value={deleteProduct}
                    onChange={search.bind(this)} />
            </div>
            <hr />
            <div className='px-3 pb-3 col'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col" className='text-end'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productSearch.map((attar, index) =>
                                <tr key={attar._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{attar.name}</td>
                                    <td><img width='50px' src={attar.img} alt='' /></td>
                                    <td className='text-end'><button onClick={() => handleDelete(attar._id)} className='deletePorductBtn'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeleteProduct;