import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HeaderCatagore = () => {
    return (
        <>
            <div className=''>
                <ul className='header-all-catagore px-3'>
                    {/*  <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Accessories</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li> */}
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Beauty</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    {/* <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Books</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li> */}
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Bags</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Computers</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Dresses</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Electronic</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Foods</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Health & Beauty</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li  className='islamic'>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Islamic</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />

                        <div className='sub-catagore px-3'>
                            <ul className='p-0'>
                                <li>
                                    <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                                    <span>Cap</span>
                                    <FontAwesomeIcon className='sub-catagore-tatagore-icon-chevronright' icon={faChevronRight} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                                    <span>Jainamaz</span>
                                    <FontAwesomeIcon className='sub-catagore-tatagore-icon-chevronright' icon={faChevronRight} />
                                </li>
                            </ul>
                        </div>

                    </li>
                    {/*  <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Jewelry</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li> */}
                    {/* <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Medicine</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li> */}
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Security</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Software</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Sports</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderCatagore;