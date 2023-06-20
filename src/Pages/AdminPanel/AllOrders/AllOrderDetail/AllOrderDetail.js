import React, { useEffect, useState } from 'react';
import './AllOrderDetail.css';
import { useParams } from 'react-router-dom';
import UseAllOrderDetail from '../../../../Hooks/UseAllOrders/UseAllOrderDetail';

const AllOrderDetail = () => {
    const { allOrderId } = useParams();
    const [allOrder, setAllOrder] = UseAllOrderDetail(allOrderId);
    const cart = allOrder.cart;
    console.log('cart', cart)

    const id = allOrder._id;
    const orderNo = allOrder.orderNo;
    // console.log('id', id)

    const confirmOrderStatus = () => {
        fetch(`https://mahsez-server.onrender.com/user/confirmOrderStatus/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const cancelOrderStatus = () => {
        fetch(`https://mahsez-server.onrender.com/user/cancelOrderStatus/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const deliveredOrderStatus = event => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`https://mahsez-server.onrender.com/user/deliveredOrderStatus/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    };

    /*     const deliveredOrderStatus = () => {
            fetch(`https://mahsez-server.onrender.com/user/deliveredOrderStatus/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        };
     */



    return (
        <div className='allOrderDetail dashboard-dev2'>
            <div className='allOrderDetail-part1'>
                <h4 className='text-center mt-3 m-0'>Order Information</h4>
                <div className='order-status'>
                    <p className='order-status-p mt-2'>Pending order</p>
                </div>
                <div>
                    <p className='text-center m-0'>Order# &nbsp;0000{allOrder.orderNo}</p>
                    <p className='text-center'>{allOrder.email}</p>
                </div>
                <div className='shipping-summary'>
                    <div className='order-shipping-dev'>
                        <h6 className='mb-1'>Shipping Address</h6>
                        <p className='mb-0'>Name: {allOrder.coustomerName}</p>
                        <p className='mb-0'>District: {allOrder.districtName}</p>
                        <p className='mb-0'>Address: {allOrder.address}</p>
                        <p className='mb-0'>Comments: {allOrder.comment}</p>
                        <p className='mb-0'>Phone: {allOrder.phoneNumber}</p>
                    </div>
                    <div className='order-summary-dev'>
                        <h6>Order Summary</h6>
                        <p className='mb-0'>Sub Total: {allOrder.productsTotalPrice}</p>
                        <p className='mb-0'>Delivery charge: {allOrder.shippingCharge}</p>
                        <p className='mb-0'>Total: {allOrder.grandTotal}<span className='fw-bold h4'>৳</span></p>
                        <p className='mb-0'>Paid: {allOrder.grandTotal}<span className='fw-bold h4'>৳</span></p>
                        <p className='mb-0'>Deu: {allOrder.grandTotal}<span className='fw-bold h4'>৳</span></p>
                    </div>
                </div>

                <div className='mt-4'>
                    <h6 className='fw-bold'>Order Products</h6>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity  </th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/*   <tr key={allOrder._id}>
                                    <th scope="row">{allOrder.orderNo}</th>
                                    <td>{allOrder.productsName}</td>
                                    <td>{allOrder.productsQuantity} Ps</td>
                                    <td>{allOrder.productPrice} $</td>
                                </tr> */}


                                {/* {
                                    allOrder.map((order, index) =>
                                        <tr key={order._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.productsName}</td>
                                            <td>{order.productsQuantity} Ps</td>
                                            <td>{order.productPrice} $</td>
                                        </tr>
                                    )
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className='allOrderDetail-part2 p-4'>
                <div className='text-center'>

                    {
                        allOrder.confirmOrderStatus ?
                            ''
                            :
                            <button type="button" class="btn btn-info" onClick={confirmOrderStatus}>Comfirm Order</button>
                    }
                    <br /><br />
                    {
                        allOrder.confirmOrderStatus ?
                            ''
                            :
                            <button type="button" class="btn btn-warning" onClick={cancelOrderStatus}>Cancel Order</button>
                    }
                    <br /><br />
                    {
                        allOrder.confirmOrderStatus ?
                            ''
                            :
                            <button type="button" class="btn btn-success" onClick={deliveredOrderStatus}>Delivered Order</button>
                    }
                </div>

                <h5 className='text-center mt-4'>Order History</h5>

                <div className='mt-4'>
                    {
                        allOrder.deliveredOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.deliveredOrderStatus}</h6>
                                <p className='m-0'>{allOrder.deliveredOrderDate}&nbsp;{allOrder.deliveredOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        allOrder.confirmOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.confirmOrderStatus}</h6>
                                <p className='m-0'>{allOrder.confirmOrderDate}&nbsp;{allOrder.confirmorderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        allOrder.cancelOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.cancelOrderStatus}</h6>
                                <p className='m-0'>{allOrder.cancelOrderDate}&nbsp;{allOrder.cancelOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        allOrder.status ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.status}</h6>
                                <p className='m-0'>{allOrder.orderDate}&nbsp;{allOrder.orderTime}</p>
                            </div>
                            :
                            ""
                    }
                </div>

            </div>

        </div>
    );
};

export default AllOrderDetail;