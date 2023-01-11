import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const HeaderCatagore = () => {
    return (
        <>
            <div className='container p-0'>
                <ul className='header-all-catagore px-3'>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Fashion
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Kitchen
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Computer
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Bages
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Watches
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        SmartPhone
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Health & Beauty
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Sport Clothing
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Maternity
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Jewelry
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        Accessories
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderCatagore;