import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideber from '../AdminSideber/AdminSideber';
import '../AdminSideber/AdminSideber.css'

const Admin = () => {
    return (
        <div className="admin-sideber-main">
            <AdminSideber />
            <Outlet />
      {/*       <div className="admin-sideber-container">
                <h1 className="admin-sideber-title">My React App</h1>
                <p className="admin-sideber-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="admin-sideber-btn">Explore now</button>
            </div> */}
        </div>
    );
};

export default Admin;