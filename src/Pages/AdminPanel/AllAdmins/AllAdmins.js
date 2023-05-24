import React from 'react';
import './AllAdmin.css';

const AllAdmins = () => {
    

    return (
        <div className='allAdmins'>
            <div className='pt-4 ps-4'>
                <h4 className='fw-bold side-header'>All Admin ()</h4>
            </div>
            <hr />
            <div className='px-3 table-responsive-lg'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Email</th>
                            <th scope="col">Create Date</th>
                            <th scope="col" className='text-end'>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAdmins;