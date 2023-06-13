import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../../../Hooks/UseProductDetails/UseProductDetails';

const UpdateProductInfo = () => {
    const {productId} =  useParams();
    const [productDetails] = UseProductDetails(productId);


    return (
        <div className='dashboard-dev2' style={{background:'white'}}>
          <h5>{productDetails.name}</h5>
        </div>
    );
};

export default UpdateProductInfo;