import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Allorder.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { toast } from 'react-toastify';
import UseAllOrders from '../../../../Hooks/UseAllOrders/UseAllOrders';
import UseGetAllOrder from '../../../../Hooks/UseAdminOrders/UseGetAllOrder';

const Allorder = () => {
    const [user] = useAuthState(auth);
    const [allOrder, setAllOrder] = UseGetAllOrder([]);
    const navigate = useNavigate();
    const [orderSearch, setOrderSearch] = useState("");

    const countPendingOrder = allOrder.filter(status => status.status === 'Pending Order').length;
    const countConfirmOrder = allOrder.filter(status => status.status === 'Confirm Order').length;
    const countCancelOrder = allOrder.filter(status => status.status === 'Cancel Order').length;
    const countFakeOrder = allOrder.filter(status => status.status === 'Fake Order').length;
    const countDeliveredOrder = allOrder.filter(status => status.status === 'Delivered Order').length;

    /* Dlete order  */
    const deleteOrder = _id => {
        const proceed = window.confirm(`Are you sure Delete order`);
        if (proceed) {
            const url = `https://mahsez-server.vercel.app/api/v1/allOrders/${_id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Successfully delete an order');
                    const remaining = allOrder.filter(attar => attar._id !== _id);
                    setAllOrder(remaining);
                });
        }
    };

    const navigateToOrderDetail = _id => {
        navigate(`/admin/allOrder/${_id}`);
    };

    /* start search order */
    const search = (event) => {
        setOrderSearch(event.target.value);
    };
    let dataSearch = allOrder.filter(order => {
        return Object.keys(order).some(key =>
            order[key].toString().toLowerCase().includes(orderSearch.toString().toLowerCase()));
    });
    /* end search order */

    return (
        <div className='allorders' style={{ background: 'white' }}>
            <PageTitle pageTitle='AllOrder |' />
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold side-header'>All Orders ({allOrder.length})</h4>
                <h5 className='fw-bold side-header'>Pending Orders <span style={{ color: 'rgb(255, 132, 0)' }}>({countPendingOrder})</span></h5>
                <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden"></span>
                </div>
                <input className='allorder-search-ber' placeholder='Search Order' value={orderSearch}
                    onChange={search.bind(this)} />
            </div>
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <div className='d-flex'>
                    <h5 className='fw-bold side-header'>Confirm Orders<span style={{ color: 'green' }}> ({countConfirmOrder})</span>
                    </h5>
                    {countConfirmOrder <1 ? '':
                       <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden"></span>
                        </div> 
                    }
                </div>

                <h5 className='fw-bold side-header'>Delivered Orders ({countDeliveredOrder})</h5>
                <h5 className='fw-bold side-header'>Cancel Orders ({countCancelOrder})</h5>
                <h5 className='fw-bold side-header'>Fake Orders ({countFakeOrder})</h5>
            </div>
            <hr />
            <div className='px-3 table-responsive' >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order_No</th>
                            <th scope="col">Coustomer</th>
                            {/*   <th scope="col">Email</th> */}
                            <th scope="col">Time</th>
                            <th scope="col">Porduct Name</th>
                            <th scope="col">Total</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Status</th>
                            <th scope="col">Manage</th>
                            <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataSearch.slice(0).reverse().map((allOrder) =>
                                <tr key={allOrder._id}>
                                    <th scope="row">{allOrder.orderNo}</th>
                                    <td>{allOrder.coustomerName}</td>
                                    {/*   <td>{allOrder.email}</td> */}
                                    <td>{allOrder.orderTime}&nbsp;{allOrder.orderDate}</td>
                                    <td>{allOrder.productsName}</td>
                                    <td>{allOrder.grandTotal}</td>
                                    <td className='text-end'>Cash</td>
                                    <td className='text-end'>
                                        {allOrder.status}
                                    </td>

                                    <td className='text-end'>
                                        {(!allOrder.confirmOrderStatus && !allOrder.cancelOrderStatus && !allOrder.fakeOrderStatus) && <button type="button" class="btn btn-danger" onClick={() => deleteOrder(allOrder._id)}  /* disabled={allOrder.confirmOrderStatus === 'Confirm Order'} */>
                                            Delete
                                        </button>}
                                    </td>

                                    <td className='text-end'>
                                        <button type="button" class="btn btn-info" onClick={() => navigateToOrderDetail(allOrder._id)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorder;
