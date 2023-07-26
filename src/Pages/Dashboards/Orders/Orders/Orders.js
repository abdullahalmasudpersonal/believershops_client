import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../../Shared/PageTitle/PageTitle';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://mahsez-server.onrender.com/myOrder?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
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
    }, [user]);

    const navigateToOrderDetail = _id => {
        navigate(`/dashboard/myOrder/${_id}`)
    }

    return (
        <div className='dashboard-dev2'>
            <PageTitle pageTitle='My Order |' />
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
                        orders.slice(0).reverse().map((order, index) =>
                            <div className='my-single-order mb-3'>
                                <div className='px-3 pt-3 pb-2 d-flex justify-content-between'>
                                    <div>
                                        <h6 className='m-0 fw-bold'>Order# {order.orderNo}</h6>
                                        <p className='m-0'>Date: {order.orderDate}</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <h6 className='m-0'>
                                            <FontAwesomeIcon icon={faClock} style={{ color: 'orange' }} /> &nbsp;
                                            <span className='' style={{ color: 'purple' }}>{order.status}</span>
                                        </h6>
                                    </div>
                                </div>
                                <hr className='m-0' />
                                <div className='mySingleOrderInfoDev'>
                                    <div>
                                        {order.productsImage.slice(0 - 1).map((proImg, index) => <><img src={proImg} alt='' width='50px' /></>)}
                                        &nbsp;&nbsp;
                                        {
                                            order.productsName.slice(0 - 1).map((proName, index) => <td>{proName}<br />{order.productsName.length > 1 ? <span color='purple'>{order.productsName.length}&nbsp;Items</span> : <></>}</td>)
                                        }
                                    </div>
                                    <div className='mySingleOrderInfoDevSecond'>
                                        <td className='text-end align-middle fw-bold h5 mb-0' style={{ border: '0' }}>{order.grandTotal}<span style={{ fontSize: '22px', }}>৳</span></td>
                                        <td className='text-end p-0 align-middle' style={{ border: '0', width: '70px' }}>
                                            <button type="button" className="btn btn-info" onClick={() => navigateToOrderDetail(order._id)} >View</button>
                                        </td>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div >
    );
};

export default Orders;