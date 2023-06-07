import React from 'react';
import './OrderDetails.css';
import { useParams } from 'react-router-dom';
import UseOrderDetails from '../../../../Hooks/UseOrders/UseOrderDetails';

const OrderDetails = () => {
    const { myOrderId } = useParams();
    const [orderDetails, setOrderDetails] = UseOrderDetails(myOrderId);

    return (
        <div className='dashboard-dev2'>
            <h4>Order details {orderDetails._id}</h4>

            
        </div>
    );
};

export default OrderDetails;