import React from 'react';
import './OrderDetails.css';
import { useParams } from 'react-router-dom';
import UseOrderDetails from '../../../../Hooks/UseOrders/UseOrderDetails';

const OrderDetails = () => {
    const { myOrderId } = useParams();
    const [orderDetails, setOrderDetails] = UseOrderDetails(myOrderId);
    const { productsName, status, productsQuantity, productsTotalPrice, productsImage, cart } = orderDetails;


    return (
        <div className='dashboard-dev2 orderDetail'>

            <div className='orderDetail-dev1'>
                <h5 className='text-center mb-1'>Order Information</h5>
                <div className='order-status'>
                    <p className='order-status-p'>{status}</p>
                </div>
                <p className='text-center m-0'>Order# &nbsp;0000{orderDetails.orderNo}</p>
                <div className='mb-3 text-center'>
                    <p className='mb-0'><small>Payment Number:</small> <span style={{ color: 'purple' }}>{orderDetails.paymentNumber}</span></p>
                    <p className='mb-0'><small>Payment TransactionID: </small> <span style={{ color: 'purple' }}>{orderDetails.paymentTransaction}</span></p>
                </div>

                <div className='orderDetail-shipping-orderSummary mt-4'>

                    <div className='orderDetail-shipping-address'>
                        <h6>Shipping Address</h6>
                        <p className='m-0 mt-3'>{orderDetails.coustomerName}</p>
                        <p className='m-0'>{orderDetails.address}</p>
                        <p className='m-0'>District: {orderDetails.districtName}</p>
                        <p className='m-0'>Note: "{orderDetails.comment}"</p>
                        <p className='m-0'>Mobile: <span className='fw-bold'>{orderDetails.phoneNumber}</span></p>
                    </div>

                    <div className='orderDetail-order-summary'>
                        <h6>Order Summary</h6>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className='ps-0 pb-0'>Sub-Total:</td>
                                    <td className='ps-0 pb-0 text-end'>{orderDetails.subTotal}<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
                                </tr>
                                <tr>
                                    <td className='ps-0 pb-0'>Home Delivery:</td>
                                    <td className='ps-0 pb-0 text-end'>{orderDetails.deliveryCharge}<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
                                </tr>
                                <tr>
                                    <td className='ps-0 pb-0'>Total:</td>
                                    <td className='ps-0 pb-0 text-end'>{orderDetails.grandTotal}<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
                                </tr>
                                <tr>
                                    <td className='ps-0 pb-0'>Paid:</td>
                                    <td className='ps-0 pb-1 text-end' style={{ color: 'green' }}>{orderDetails.grandTotal}<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
                                </tr>
                                <tr style={{ borderTop: '1px solid gray' }}>
                                    <td className='ps-0 pb-0'>Deu:</td>
                                    <td className='ps-0 pb-0 text-end' style={{ color: 'red' }}>{orderDetails.grandTotal}<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h5 className='mt-3'>Porducts</h5>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Products Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    {/*  <th scope="row">{orderDetails.productsImage.map()}</th> */}
                                    {/* <td>{orderDetails.productsName.map(proname=><p>{proname}</p>)}</td> */}
                                    {/*      <td>{orderDetails.productsQuantity.map(proQuantity=><p>{proQuantity}</p>)}</td>  */}
                                    {/*  <td>{productsTotalPrice.map((index)=><p>{index}</p>)}</td> */}
                                    {/* {
                                            productsName.map((proName,index) =><p>{proName}</p>)
                                        }  */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        {/*   {cart.map((product,index) =><p>{index}</p>)} */}
                    </div>
                </div>

            </div>

            <div className='orderDetail-dev2'>
                <h5>Order History</h5>
                <div className='mt-4 ps-2'>
                    {
                        orderDetails.deliveredOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.deliveredOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.deliveredOrderDate}&nbsp;{orderDetails.deliveredOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        orderDetails.confirmOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.confirmOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.confirmOrderDate}&nbsp;{orderDetails.confirmorderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        orderDetails.fakeOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.fakeOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.fakeOrderDate}&nbsp;{orderDetails.fakeOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        orderDetails.cancelOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.cancelOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.cancelOrderDate}&nbsp;{orderDetails.cancelOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        orderDetails.pendingOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.pendingOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.orderDate}&nbsp;{orderDetails.orderTime}</p>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>

        </div>
    );
};

export default OrderDetails;