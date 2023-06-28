import React from 'react';
import './Dashboard.css';
import profileImg from '../../../Assets/img/profile/profile.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import UseAdmin from '../../../Hooks/UseAdmin/UseAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
    <>
      <div className='breadcrumb-bg'>
        <div className='container-xxl'>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 ">
              <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
              <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='home-bg'>
        <div className='container-xxl px-0 py-4'>
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
              <button>Your Messages</button>
              <button>Accounts Settings</button>
              <button onClick={logout}>Logout</button>
            </div>
             <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;