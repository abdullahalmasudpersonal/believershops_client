import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideber from '../AdminSideber/AdminSideber';
import '../AdminSideber/AdminSideber.css'

const Admin = () => {
    return (
        <>
            {/* <div className='container-xxl my-5 p-0'>
                <div className='dashboard'>
                    <div className='dashboard-dev1'>
                        <AdminSideber />
                    </div>
                    <Outlet />
                </div>
            </div> */}

             <div className="admin-sideber-main container-xxl p-0 my-5">
                <AdminSideber />
                <Outlet />
            </div>
        </>
    );
};

export default Admin;