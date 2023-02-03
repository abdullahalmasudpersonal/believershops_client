import { faBowlFood, faChevronDown, faComputer, faHeart, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainCategore.css';

const MainCategore = () => {
    return (
        <>
            <div className='container-xxl p-0 d-flex' style={{ marginTop: '60px', marginBottom:'40px' }}>

                <div className='maincategore-dev'>

                    <ul className='maincategore-dev-ul'>
                        <div className='maincategore-title'>
                            <p className='m-0'>ALL CATEGORIES</p>
                        </div>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faSpa} className='pe-2 maincategore-img ' />
                                <a>Beauty</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faShoppingBag} className='pe-2 maincategore-img ' />
                                <a>Bags</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faComputer} className='pe-2 maincategore-img ' />
                                <a>Computer</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faPersonDress} className='pe-2 maincategore-img ' />
                                <a>Dresses</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faMicrochip} className='pe-2 maincategore-img ' />
                                <a>Electronic</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faBowlFood} className='pe-2 maincategore-img ' />
                                <a>Foods</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faMosque} className='pe-2 maincategore-img ' />
                                <a>Islamic</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        {/* <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faTrophy} className='pe-2 maincategore-img ' />
                                <a>Sports</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li> */}
                        <li className='maincategore-dev-ul-li maincategore-dev-ul-lust'>
                            <div className='maincategore-dev-ul-li-dev '>
                                <FontAwesomeIcon icon={faTrophy} className='pe-2 maincategore-img ' />
                                <a>Sports</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                    </ul>
                </div>
                <Outlet />
          
            </div>
        </>
    );
};

export default MainCategore;