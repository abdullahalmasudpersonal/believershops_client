import React from 'react';
import './Dashboard.css';
import profileImg from '../../../Assets/img/profile/profile.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/');
  }

  return (
    <div className='container-xxl my-5 p-0'>

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
          <Link to='/dashboard/orders'>
          <button>My Orders</button>
          </Link>
          <Link to='/admin'>
          <button>Admin Panel</button>
          </Link>
          <button>View Cart</button>
          
          <button>My Reviews</button>
          <button>Transactions</button>
          <button  onClick={logout}>Logout</button>
        </div>
        <Outlet />
        {/* <div className='dashboard-dev2'>

        </div> */}
      </div>

      {/*   <div className=' pt-5'>
        <div className='d-flex justify-content-center'>
          <FontAwesomeIcon icon={faUserAlt} className='main-pro-pic' />
        </div>
        <div className='d-flex justify-content-center pt-3'>
          <h5>Hi</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <h5>Abdullah al masud</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <h5>{user.phoneNumber}</h5> 
        </div>
      </div>
      <div className='py-5 dashboard'>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faUserAlt} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>My Profile</h6>
          </div>
        </div>

        <Link to='/admin' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='dashboard-item '>
            <div className='dashboard-item-dev'>
              <FontAwesomeIcon icon={faUserAstronaut} className='dashboard-item-font' />
            </div>
            <div>
              <h6 className='text-center pt-1'>Admin Panel</h6>
            </div>
          </div>
        </Link>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faAddressBook} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Address</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faShoppingCart} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>View Cart</h6>
          </div>
        </div>

        <Link to='/orders' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='dashboard-item '>
            <div className='dashboard-item-dev'>
              <FontAwesomeIcon icon={faListCheck} className='dashboard-item-font' />
            </div>
            <div>
              <h6 className='text-center pt-1'>Order Histoty</h6>
            </div>
          </div>
        </Link>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faHistory} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Your Transactions</h6>
          </div>
        </div>

        <div className='dashboard-item '>
          <div className='dashboard-item-dev'>
            <FontAwesomeIcon icon={faSave} className='dashboard-item-font' />
          </div>
          <div>
            <h6 className='text-center pt-1'>Saved Items</h6>
          </div>
        </div>

        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <div onClick={logout} className='dashboard-item '>
            <div className='dashboard-item-dev'>
              <FontAwesomeIcon icon={faSignOut} className='dashboard-item-font' />
            </div>
            <div>
              <h6 className='text-center pt-1'>Logout</h6>
            </div>
          </div>
        </Link>

      </div> */}

    </div>
  );
};

export default Dashboard;