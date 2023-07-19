import React, { useEffect, useState } from 'react';
import './AllOrderDetail.css';
import { useParams } from 'react-router-dom';
import UseAllOrderDetail from '../../../../Hooks/UseAllOrders/UseAllOrderDetail';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AllOrderDetail = () => {
    const { allOrderId } = useParams();
    const [allOrder, setAllOrder] = UseAllOrderDetail(allOrderId);
    const { register, handleSubmit, reset, } = useForm();
    const { confirmOrderStatus, cancelOrderStatus, deliveredOrderStatus, fakeOrderStatus } = allOrder;

    const id = allOrder._id;
    /* get time for update order status */
    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    };
    setInterval(updateTime, 1000);
    /* get date with month for update order status */
    var today = new Date();
    var optionss = { year: 'numeric', month: 'long', day: 'numeric' };
    var cDates = today.toLocaleString('en-US', optionss);
    const cDate = cDates;
    const handleConfirmOrderStatus = (event) => {
        event.preventDefault();
        const updateConfirmOrder = {
            confirmOrderDate: cTime,
            confirmorderTime: cDate
        }
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/confirmOrderStatus/${id}`,updateConfirmOrder, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    // console.log(data);
                })
        }
    };

    const handleCancelOrderStatus = (event) => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/cancelOrderStatus/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    //console.log(data);
                })
        }
    };

    const handleDeliveredOrderStatus = event => {
        event.preventDefault();
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/deliveredOrderStatus/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    //console.log(data);
                })
        }
    };

    const handleFakeOrderStatus = event => {
        event.preventDefault();
        const updateFakeOrder = {
            fakeorderTime: cTime,
            fakeOrderDate: cDate
        }
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/fakeOrderStatus/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(updateFakeOrder)
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    //console.log(data);
                })
        }
    };

    /*     const deliveredOrderStatus = () => {
            fetch(`http://localhost:5000/user/deliveredOrderStatus/${id}`, {
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

    const handleUpdateOrderStatus = async data => {
        const proceed = window.confirm(`Are you sure ?`);
        if (proceed) {
            const updateOrderStatus = {
                status: data.status
            }
            fetch(`http://localhost:5000/updateOrderStatus/${id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(updateOrderStatus)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success(`Successfully Updated Status`);
                        reset();
                        window.location.reload(false);
                    }
                    else {
                        toast.error(`Faield to update Status`);
                        window.location.reload(false);
                    }
                })
        }
    };



    return (
        <div className='allOrderDetail dashboard-dev2'>
            <div className='allOrderDetail-part1'>
                <h4 className='text-center mt-3 m-0'>Order Information {cTime}-{cDate}</h4>
                <p className='text-center mb-0'><small>Payment Type:</small> <small style={{ background: 'purple', color: 'white', padding: '0px 5px 3px 5px', borderRadius: '3px' }}>{allOrder.paymentStatus}</small></p>
                <div className='order-status'>
                    <p className='order-status-p mt-2'>{allOrder.status}</p>
                </div>
                <div>
                    <p className='text-center m-0'>Order# &nbsp;0000{allOrder.orderNo}</p>
                    <p className='text-center mb-0' style={{ color: 'green' }}>User: {allOrder.email}</p>
                    <p className='text-center' style={{ color: 'purple' }}>Order Email: {allOrder.orderEmail}</p>
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
                <div className='mb-3'>
                    <p className='mb-0'><small>Payment Number:</small> <span style={{ color: 'purple' }}>{allOrder.paymentNumber}</span></p>
                    <p className='mb-0'><small>Payment TransactionID: </small> <span style={{ color: 'purple' }}>{allOrder.paymentTransaction}</span></p>
                </div>

                {
                    <div className='pb-3'>
                        <form onSubmit={handleSubmit(handleUpdateOrderStatus)} className='d-flex'>
                            <select  {...register("status", { required: true })} className='form-select'>
                                <option value="Confirm Order">Confirm Order</option>
                                <option value="Cancel Order">Cancel Order</option>
                                <option value="Delivered Order">Delivered Order</option>
                                <option value="Pneding Order">Pending Order</option>
                                <option value="Fake Order">Fake Order</option>
                            </select> &nbsp;&nbsp;
                            <button className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                }

                <div className='text-center'>
                    <div className='mb-3'>
                        {(!confirmOrderStatus && !cancelOrderStatus  && !fakeOrderStatus) && <> <button type="button" class="btn btn-info" onClick={handleConfirmOrderStatus}>Comfirm Order</button></>}
                    </div>
                    <div className='mb-3'>
                        {(!cancelOrderStatus && !deliveredOrderStatus && !fakeOrderStatus) && <> <button type="button" class="btn btn-warning" onClick={handleCancelOrderStatus}>Cancel Order</button></>}
                    </div>
                    <div>
                        {(confirmOrderStatus && !deliveredOrderStatus && !cancelOrderStatus) && <> <button type="button" class="btn btn-success" onClick={handleDeliveredOrderStatus}>Delivered Order</button></>}
                    </div>
                    <div className='mb-3'>
                        {(!fakeOrderStatus && !cancelOrderStatus && !deliveredOrderStatus) && <> <button type="button" class="btn btn-danger" onClick={handleFakeOrderStatus}>Fake Order</button></>}
                    </div>
                </div>

                <h5 className='text-center mt-0'>Order History</h5>
                <div className='mt-4'>
                    {
                        cancelOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.cancelOrderStatus}</h6>
                                <p className='m-0'>{allOrder.cancelOrderDate}&nbsp;{allOrder.cancelOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        fakeOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.fakeOrderStatus}</h6>
                                <p className='m-0'>{allOrder.fakeOrderDate}&nbsp;{allOrder.fakeOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        deliveredOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.deliveredOrderStatus}</h6>
                                <p className='m-0'>{allOrder.deliveredOrderDate}&nbsp;{allOrder.deliveredOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        confirmOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.confirmOrderStatus}</h6>
                                <p className='m-0'>{allOrder.confirmOrderDate}&nbsp;{allOrder.confirmorderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        allOrder.pendingOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{allOrder.pendingOrderStatus}</h6>
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