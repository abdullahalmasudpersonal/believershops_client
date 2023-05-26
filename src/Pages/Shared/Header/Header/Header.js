import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../../../../Assets/img/logo/mahsez (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faHeadset, faShoppingCart, faCaretDown, faUserAlt, faEllipsisV, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import profileImg from '../../../../Assets/img/profile/profile.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { getStoredCart } from '../../../../utilities/fakedb';
import UseCart from '../../../Cart/UseCart';


const Header = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = UseCart();

    /* header scrolling */
    const [shadow, setShadow] = useState(false)
    const changeShadow = () => {
        if (window.scrollY >= 80) {
            setShadow(true)
        }
        else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', changeShadow);


    return (
        <>
            {/* ---------Part 1 ----------- */}

            <div className={shadow ? 'sticky-top  header-shadow ' : 'header-bg-color'}>
                <div className='container-xxl d-flex justify-content-between align-items-center responsive-header' style={{ padding: '5px ' }}>
                    <div>
                        <Link to='/'>
                            <img width='130px' src={logo} alt='' />
                        </Link>
                    </div>

                    <div>
                        <ul className='header-p1-ul m-0 p-0' style={{ listStyleType: 'none' }}>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li>HOME</li>
                            </Link>
                            <Link to='/offers' style={{ textDecoration: 'none' }}>
                                <li>OFFERS</li>
                            </Link>
                            <li>FEATURES</li>
                            <Link to='/blogs' style={{ textDecoration: 'none' }}>
                                <li>BLOGS</li>
                            </Link>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <li>SIGN IN</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center align-items-center' style={{}}>
                        <div>
                            <FontAwesomeIcon style={{ height: '48px', width: '30px', marginRight: '10px', color: '#FF5733' }} icon={faHeadset} />
                        </div>
                        <div>
                            <p className='m-0'>Call us now : (+88) 01737-906772</p>
                            <p className='m-0'>Email : m.mahsez@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='header-small-screen'>
                    <div className={shadow ? 'sticky-top  header-shadow ' : ''}>
                        <div className='d-flex justify-content-between align-items-center' style={{ padding: '9px' }}>

                            

                            <div>
                                <Link to='/'>
                                    <img width='105px' src={logo} alt='' />
                                </Link>
                            </div>

                            <div className='mobile-screen-top-part pt-1'>
                                <FontAwesomeIcon className='top-right-btn ' icon={faSearch} />

                                <Link to='/cart'>
                                    <button className='position-relative p-0 pe-3' style={{ border: 'none', background: 'none' }}>

                                        <FontAwesomeIcon className='top-right-btn' icon={faShoppingCart} />

                                        <span className="position-absolute translate-middle badge rounded-pill" style={{ color: '', backgroundColor: 'orangered' }}>
                                            {cart.length}
                                        </span>

                                    </button>

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- Header part 2 start ---------------- */}
            <div className='header-part2'>
                <div className='container-xxl header-part2-dev'>

                    <div className='header2-catagories'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='' icon={faAlignJustify} />
                            <h6 className=' ps-2'>ALL CATAGORIES</h6>
                        </div>
                        <div>
                            <FontAwesomeIcon className='caretdowncircle' icon={faCaretDown} />
                        </div>
                    </div>

                    <div className='search d-flex'>
                        <input className='search-ber ' placeholder='Looking your products' type='search' />
                        <FontAwesomeIcon className='header2-part-2-search-icon' icon={faSearch} />
                    </div>

                    <div className='header2-lust-part pe-2'>
                        <FontAwesomeIcon className='heart-cart' icon={faHeart} />

                        <Link to='/cart'>
                            <FontAwesomeIcon className='shopping-cart ms-3' icon={faShoppingCart} />
                            <span className="position-absolute translate-middle badge rounded-pill cart-quantity-badge py-1 px-2 mt-1 ">
                                {cart.length}
                            </span>

                            {/* <span style={{ marginRight: '10px' }} className="position-absolute translate-middle badge rounded-pill bg-dark">
                                {cart.length} 
                            </span> */}
                        </Link>
                        {/* <button type="button" className="btn btn-primary position-relative">
                            Inbox
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button> */}

                        {
                            user ?
                                <Link to='/dashboard'>
                                    <img width='32px' src={profileImg} alt='' className='ms-3' />
                                </Link>
                                :
                                <Link to='/login'>
                                    <FontAwesomeIcon className='shopping-cart ms-3' icon={faUserAlt} />
                                </Link>
                        }
                    </div>
                </div>
            </div>
            {/* ---------------- Header part 2 end ---------------- */}

            {/* ---------------- Header part 2 responsive start ---------------- */}

            {/*   <div className='header2-part-2'>
                <div>
                    <FontAwesomeIcon className='shopping-cart' icon={faHome} />
                </div>
                <div className='header2-part-2-search'>
                    <input className='p-0 header2-part2-search-ber' />
                    <FontAwesomeIcon className='header2-part-2-search-icon' icon={faSearch} />
                </div>
                <div>
                    <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} />
                </div>
            </div> */}
            {/* ---------------- Header part 2 responsive end ---------------- */}
            {/* <div className='websiteservicenotyet'>
                <p>The website is a work in progress. It is not in service yet.</p>
            </div> */}
        </>
    );
};

export default Header;