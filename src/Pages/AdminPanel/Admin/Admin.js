import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSideber from '../AdminSideber/AdminSideber';
import '../AdminSideber/AdminSideber.css'

const Admin = () => {
    return (
        <>
            <div className='admin-bg-color'>
                <div className='container-xxl py-4 p-0 '>
                    <h1 className='p-0 text-center ' style={{ fontFamily: "𝕿𝖞𝖕𝖊 𝖘𝖔𝖒𝖊𝖙𝖍𝖎𝖓𝖌 𝖙𝖔 𝖘𝖙𝖆𝖗𝖙", color: 'rgb(233, 93, 0)' }}>Admin Panel</h1>
                </div>

                <div className="admin-sideber-main container-xxl p-0 pb-5">
                    <div className='dashboard-dev1 admin-dev1-bg-color'>

                        <Link to='/admin' >
                            <button>Home</button>
                        </Link>
                        <Link to='/admin/allOrder'>
                            <button>All Order</button>
                        </Link>
                        <Link to='/admin/allAdmin'>
                            <button>All Admin</button>
                        </Link>

                        <button>View Cart</button>
                        <button>My Reviews</button>
                        <button>Transactions</button>

                    </div>

                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Admin;