import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
              /*   console.log('res', res); */
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

    const navigateToOrderDetail = _id => {
        navigate(`/dashboard/myOrder/${_id}`);
    }

    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>My Orders ({orders.length})</h4>
            </div>
            <hr />
            <div className='p-3'>

                {
                    orders.length < 1 ?  
                    <div> 
                        <h5 className='text-center'>Your order is empty</h5>
                    </div> 
                    :

                            orders.map((order, index) =>
                                <div className='my-single-order mb-3'>
                                    <div className='px-3 pt-3 d-flex justify-content-between'>
                                        <div>
                                            <h6 className='m-0 fw-bold'>Order# {order.orderNo}</h6>
                                            <p className='m-0'>Date: {order.orderDate}</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h6 className='m-0'>
                                                <FontAwesomeIcon icon={faClock} style={{ color: 'orange' }} /> &nbsp;
                                                <span className='' style={{ color: 'purple' }}>Pneding</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='px-3 pb-3'>
                                        <table className='table m-0'>
                                            <tbody>
                                                <tr>
                                                    <td className='p-0 ' style={{ border: '0' }}>{order.productsName}</td>
                                                    <td className=' text-end fw-bold h5' style={{ border: '0' }}>{order.grandTotal}<span style={{ fontSize: '22px', }}>৳</span></td>
                                                    <td className='text-end p-0' style={{ border: '0' }}>
                                                        <button type="button" className="btn btn-info" onClick={() => navigateToOrderDetail(order._id)} >View</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        

                }


                {/* <table className="table">
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
                </table> */}
            </div>
            
        </div >
    );
};

export default Orders;