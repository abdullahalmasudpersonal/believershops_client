import React from 'react';
import { Outlet } from 'react-router-dom';
import NestedCategore from '../NestedCategore/NestedCategore/NestedCategore';
import './Categore.css';

const Categore = () => {

    return (
        <>
            <div className='container-xxl p-0 py-5 px-3 d-flex' >
                <NestedCategore />
                <Outlet />
            </div>
        </>
    );
};

export default Categore;