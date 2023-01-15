import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import { faChessKnight, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBowlFood, faCarOn, faChevronRight, faComputer, faE, faFootballBall, faGears, faLock, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGrunt } from '@fortawesome/free-brands-svg-icons';

const HeaderCatagore = () => {
    return (
        <>
            <div className='contaniner header-catagore'>
                <ul>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faSpa} className='pe-2 product-img ' />
                            <a> Beauty</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faShoppingBag} className='pe-2 product-img ' />
                            <a> Bangs</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faComputer} className='pe-2 product-img' />
                            <a> Computer</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faPersonDress} className='pe-2 product-img ' />
                            <a> Dresses</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faMicrochip} className='pe-2 product-img' />
                            <a> Electronic</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faBowlFood} className='pe-2 product-img' />
                            <a>Foods</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faUserDoctor} className='pe-2 product-img' />
                            <a>Health & Beauty</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faMosque} className='pe-2 product-img' />
                            <a>Islamic</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faLock} className='pe-2 product-img' />
                            <a>Security</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faGears} className='pe-2 product-img' />
                            <a>Software</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                    <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faTrophy} className='pe-2 product-img' />
                            <a>Sports</a>
                            <FontAwesomeIcon icon={faChevronRight} className='catagore-faChevronRight' />
                        </div>
                    </li>
                   {/*  <li className=''>
                        <div className='d-flex align-items-center catagore-list-apdding'>
                            <FontAwesomeIcon icon={faHeart} className='p-1' />
                            <a> MASUD</a>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <ul className='masud'>
                                <li>
                                    MASUD
                                </li>
                            </ul>
                        </div>
                    </li> */}
                
                </ul>
            </div>
        </>
    );
};

export default HeaderCatagore;