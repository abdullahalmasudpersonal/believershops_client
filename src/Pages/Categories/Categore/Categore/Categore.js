import React from 'react';
import { Outlet } from 'react-router-dom';
import NestedCategore from '../NestedCategore/NestedCategore/NestedCategore';

const Categore = () => {

    return (
        <>
            <div className='container-xxl p-0 py-5 d-flex' >

                <NestedCategore />

                <div className='ms-3'>
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default Categore;