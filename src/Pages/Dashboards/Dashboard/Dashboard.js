import React from 'react';
import './Dashboard.css';
import profileImg from '../../../Assets/img/profile/profile.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import UseAdmin from '../../../Hooks/UseAdmin/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/');
    localStorage.removeItem('accessToken');
  }

  return (
    <div className='container-xxl mt-4 mb-5 p-0'>
      <h4 className='mb-3'>Dashboard</h4>
      <div className='dashboard'>
        <div className='dashboard-dev1'>
          <img width='60px' src={profileImg} alt='' />
          <h5 className='text-center mt-2'>{user.displayName}</h5>
          <Link to='/dashboard' >
            <button>My Profile</button>
          </Link>
          <Link to='/dashboard/address'>
            <button>Address</button>
          </Link>
          <Link to='/dashboard/myOrders'>
            <button>My Orders</button>
          </Link>
          {
            admin && <Link to='/admin'>
              <button>Admin Panel</button>
            </Link>
          }
          <button>View Cart</button>
          <button>My Reviews</button>
          <button>Transactions</button>
          <button onClick={logout}>Logout</button>
        </div>
        <Outlet />
        {/* <div className='dashboard-dev2'>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;