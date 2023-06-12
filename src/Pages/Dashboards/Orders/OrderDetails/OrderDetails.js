import React from 'react';
import './OrderDetails.css';
import { useParams } from 'react-router-dom';
import UseOrderDetails from '../../../../Hooks/UseOrders/UseOrderDetails';

const OrderDetails = () => {
    const { myOrderId } = useParams();
    const [orderDetails, setOrderDetails] = UseOrderDetails(myOrderId);

    return (
        <div className='dashboard-dev2 orderDetail'>

            <div className='orderDetail-dev1'>
                <h5 className='text-center mb-1'>Order Information</h5>
                <div className='order-status'>
                    <p className='order-status-p'>{orderDetails.status}</p>
                </div>
                <p className='text-center m-0'>Order# &nbsp;0000{orderDetails.orderNo}</p>

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
                                    <td className='ps-0 pb-0 text-end'>@mdo</td>
                                </tr>
                                <tr>
                                    <td className='ps-0 pb-0'>Home Delivery:</td>
                                    <td className='ps-0 pb-0 text-end'>@fat</td>
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
                                    <td className='ps-0 pb-0 text-end' style={{ color: 'red' }}>360<span style={{ fontSize: '15px', fontFamily: 'monospace' }}>৳</span></td>
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
                                    <th scope="col">Product Name</th>
                                    <th scope="col" className='text-end'>Quantity</th>
                                    <th scope="col" className='text-end'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* {
                                        orderDetails.productName.map(orderDetail =>
                                            <td>{orderDetail.productName}</td>
                                        )
                                    } */}
                                    <td>{orderDetails.productsName}</td>
                                    <td>Otto</td>
                                    <td className='text-end'>@mdo</td>
                                    <td className='text-end'>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
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
                        orderDetails.cancelOrderStatus ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.cancelOrderStatus}</h6>
                                <p className='m-0'>{orderDetails.cancelOrderDate}&nbsp;{orderDetails.cancelOrderTime}</p>
                            </div>
                            :
                            ""
                    }
                    {
                        orderDetails.status ?
                            <div className='order-status-graph'>
                                <h6>{orderDetails.status}</h6>
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