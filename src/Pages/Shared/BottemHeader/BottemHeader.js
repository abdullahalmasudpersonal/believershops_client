import React from 'react';
import './BottemHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faHome, faShoppingCart, faUser, } from '@fortawesome/free-solid-svg-icons';

const BottemHeader = () => {
    return (<div className='bottemHeader sticky-bottom'>
            <div className='bottemHeader-dev'>
                <div>
                    <div><FontAwesomeIcon icon={faHome} /></div>
                    <p className='m-0 p-0'><small>Home</small></p>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faGifts} /></div>
                    <p className='m-0 p-0'><small>Offers</small></p>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faHome} /></div>
                    <p className='m-0 p-0'><small>Home</small></p>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faShoppingCart} /></div>
                    <p className='m-0 p-0'><small>Cart</small></p>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faUser} /></div>
                    <p className='m-0 p-0'><small>Account</small></p>
                </div>
               
            </div>
        </div> 
    );
};

export default BottemHeader;