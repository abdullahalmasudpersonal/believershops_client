import React from 'react';
import './BottemHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faHome, faShoppingCart, faUser, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BottemHeader = () => {
    return (<div className='bottemHeader sticky-bottom'>
        <div className='bottemHeader-dev'>
            <Link to='/' style={{ textDecoration: 'none', color: 'rgb(212, 230, 255)' }}>
                <div>
                    <div><FontAwesomeIcon icon={faHome} /></div>
                    <p className='m-0 p-0'><small>Home</small></p>
                </div>
            </Link>
            <Link to='/offers' style={{ textDecoration: 'none', color: 'rgb(212, 230, 255)' }}>
                <div>
                    <div><FontAwesomeIcon icon={faGifts} /></div>
                    <p className='m-0 p-0'><small>Offers</small></p>
                </div>
            </Link>
            <div>
                <div><FontAwesomeIcon icon={faHome} /></div>
                <p className='m-0 p-0'><small>Home</small></p>
            </div>
            <div>
                <Link to='/cart' style={{ textDecoration: 'none', color: 'rgb(212, 230, 255)' }}>
                    <div><FontAwesomeIcon icon={faShoppingCart} /></div>
                    <p className='m-0 p-0'><small>Cart</small></p>
                </Link>
            </div>
            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'rgb(212, 230, 255)' }}>
                <div>
                    <div><FontAwesomeIcon icon={faUser} /></div>
                    <p className='m-0 p-0'><small>Account</small></p>
                </div>
            </Link>

        </div>
    </div>
    );
};

export default BottemHeader;