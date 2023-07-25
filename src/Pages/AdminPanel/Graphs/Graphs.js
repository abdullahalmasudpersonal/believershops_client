import React from 'react';
import './Graphs.css';

const Graphs = () => {
    return (
        <div className='dashboard-dev2'>
            <div className='pt-4 px-4 d-flex justify-content-between'>
                <h4 className='fw-bold'>Graphs</h4>
            </div>
            <hr className='mb-0' />
            <div className='p-3'>
                <div className='graphsDev'>
                    <h5 className='mb-0'>Total Orders</h5>
                    <small>Lust 30 Days</small>
                </div>

            </div>
        </div>
    );
};

export default Graphs;