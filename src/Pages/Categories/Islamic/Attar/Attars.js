import React, { useEffect, useState } from 'react';
import useAttars from '../../../../Hooks/UseAttars';
import Attar from './Attar';
import './Attars.css';

const Attars = () => {
    const [products, setProducts] = useAttars([]);

    return (
        <div>
            {
                products.map(attar => <Attar key={attar._id} attar={attar}></Attar>)
            }
        </div>
    );
};

export default Attars;