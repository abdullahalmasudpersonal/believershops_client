import React, { useEffect, useState } from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Mahmud from './Mahmud';

const Sanfwan = () => {
    const [product, setProduct] = UseProducts();

    return (
        <div>
            <div>
                <h4> safwan</h4>
                <div>
                   {
                        product.map(product => <Mahmud key={product._id} product={product}></Mahmud>)
                    } 
                </div>
            </div>
        </div>
    );
};

export default Sanfwan;
