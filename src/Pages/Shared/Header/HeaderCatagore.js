import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HeaderCatagore = () => {
    return (
        <>
            <div className='container p-0'>
                <ul className='header-all-catagore px-3'>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Fashion</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Kitchen</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Computer</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight} />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Bages</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Watches</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>SmartPhone</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Health & Beauty</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Sport Clothing</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Maternity</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Jewelry</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                    <li>
                        <FontAwesomeIcon className='catagore-icon' icon={faHeart} />
                        <span>Accessories</span>
                        <FontAwesomeIcon className='tatagore-icon-chevronright' icon={faChevronRight}  />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderCatagore;