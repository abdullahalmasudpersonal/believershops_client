import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Allorder.css'

const Allorder = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allOrder`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);


    return (
        <div className='allorders'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>All Orders {allOrders.length}</h4>
            </div>
            <hr />
            <div className='px-3'>
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Coustomer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">Porduct Name</th>
                            <th scope="col">Model</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">SubTotal</th>
                            <th scope="col">Order Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((allOrder, index) =>
                            <tr key={allOrder._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{allOrder.CoustomerName}</td>
                                <td>{allOrder.email}</td>
                                <td><img src={allOrder.productsImage} width='60px' alt='' /></td>
                                <td>{allOrder.productsName}</td>
                                <td>{allOrder.productsQuantity}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorder;