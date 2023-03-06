import React from 'react';
import AdminSideber from '../AdminSideber/AdminSideber';
import './Admin.css';

const Admin = () => {
    return (
        <div className="main">
            <AdminSideber />
            <div className="container">
                <h1 className="title">My React App</h1>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn">Explore now</button>
            </div>
        </div>
    );
};

export default Admin;