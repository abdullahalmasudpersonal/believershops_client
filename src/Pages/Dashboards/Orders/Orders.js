import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/');
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
            });
        /* if (user) {
            fetch(`http://localhost:5000/myOrder?email=${user.email}`,  {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            } )
                .then(res => {
                     console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        } */
    }, [user]);

    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>My Orders ({orders.length})</h4>
            </div>
            <hr />
            <div className='px-3'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity  </th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.productsName}</td>
                                    <td>{order.productsQuantity} Ps</td>
                                    <td>{order.productPrice} $</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;