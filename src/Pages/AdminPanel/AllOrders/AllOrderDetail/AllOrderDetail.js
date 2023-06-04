import React, { useEffect, useState } from 'react';
import './AllOrderDetail.css';
import { useParams } from 'react-router-dom';
import UseAllOrderDetail from '../../../../Hooks/UseAllOrders/UseAllOrderDetail';

const AllOrderDetail = () => {
  const {allOrderId} = useParams();
  const [allOrder, setAllOrder] = UseAllOrderDetail(allOrderId);

    return (
        <div className='allOrderDetail'>
            <h4 className='text-center '>Order Info {allOrder._id}</h4>
            
        </div>
    );
};

export default AllOrderDetail;