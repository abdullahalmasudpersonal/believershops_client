import React from 'react';
import './BottemHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faGifts, faHome, faShoppingCart, faUser, faUserAlt, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import profileImg from '../../../Assets/img/profile/profile.png';
import UseCart from '../../../Hooks/UseCarts/UseCart';

const BottemHeader = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = UseCart();

    return (
        <>
            <div className='bottemHeader fixed-bottom'>
                <div className='bottemHeader-dev'>
                    <Link to='/' className='header-buttom-btn'>
                        <div>
                            <div><FontAwesomeIcon icon={faHome} /></div>
                            <p className='m-0 p-0'><small>Home</small></p>
                        </div>
                    </Link>
                    <Link to='/offers' className='header-buttom-btn'>
                        <div>
                            <div><FontAwesomeIcon icon={faGifts} /></div>
                            <p className='m-0 p-0'><small>Offers</small></p>
                        </div>
                    </Link>
                    <Link to='/blogs' className='header-buttom-btn'>
                        <div>
                            <div><FontAwesomeIcon icon={faBlog} /></div>
                            <p className='m-0 p-0'><small>Blogs</small></p>
                        </div>
                    </Link>
                    <Link to='/cart' className='header-buttom-btn'>
                        <div className='position-relative'>
                            {/* <span className="position-absolute translate-middle badge rounded-pill  py-1 top-0 start-100 pe-3 header-buttom-cart-quantity">
                        {cart.length}
                    </span> */}
                            <div><FontAwesomeIcon icon={faShoppingCart} /></div>

                            <p className='m-0 p-0'><small>Cart</small>

                            </p>
                        </div>
                    </Link>
                    {
                        user ?

                            <Link to='/dashboard' className='header-buttom-btn'>
                                <div>
                                    <div><img width='18px' src={profileImg} alt='' /></div>
                                    <p className='m-0 p-0 mt-0 pt-0'><small className='mt-0 pt-0'>Profile</small></p>
                                </div>
                            </Link>
                            :
                            <Link to='/login' className='header-buttom-btn'>
                                <div>
                                    <div><FontAwesomeIcon icon={faUserAlt} /></div>
                                    <p className='m-0 p-0 '><small>Account</small></p>
                                </div>
                            </Link>
                    }

                </div>
            </div>
        </>
    );
};

export default BottemHeader;