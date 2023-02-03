import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';
import Mahmud from './Mahmud';

const Munira = () => {
    const [product, setProduct] = UseProducts();

    return (
        <div>
            <div>
                <h4> Munira</h4>
                <div>
                    {
                        product.map(product => <Mahmud key={product._id} product={product}></Mahmud>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Munira;