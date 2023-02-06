import { faBagShopping, faBowlFood, faChevronDown, faChevronRight, faComputer, faHeart, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainCategore.css';

const MainCategore = () => {
    return (
        <>
            <div className='container-xxl mainCategore p-0 py-5 d-flex' >

                <div className='mainCategore-dev1'>
                <div className='maincategore-title'>
                            <p className='m-0'>ALL CATEGORIES</p>
                        </div>
                    <ul>
                        <li>
                            <Link to='/categore/islamic' style={{ textDecoration: 'none' }}>
                                <div className='mainCategore-dev1-li-dev1'>
                                    <FontAwesomeIcon icon={faSpa} style={{ padding: '0 5px 0 0' }} />
                                    Beauty
                                </div>
                            </Link>
                            <FontAwesomeIcon icon={faChevronRight} className='mainCategore-dev1-li-chevrondown' />
                        </li>

                        <li>
                            <Link to='/categore/islamic' style={{ textDecoration: 'none' }}>
                                <div className='mainCategore-dev1-li-dev1'>
                                    <FontAwesomeIcon icon={faBagShopping} style={{ padding: '0 5px 0 0' }} />
                                    Bags
                                </div>
                            </Link>
                            <FontAwesomeIcon icon={faChevronRight} className='mainCategore-dev1-li-chevrondown' />
                        </li>

                        <li className='mainCategore-dev1-li-lust'>
                            <Link to='/categore/islamic' style={{ textDecoration: 'none' }}>
                                <div className='mainCategore-dev1-li-dev1'>
                                    <FontAwesomeIcon icon={faMosque} style={{ padding: '0 5px 0 0' }} />
                                    Islamic
                                </div>
                            </Link>
                            <FontAwesomeIcon icon={faChevronRight} className='mainCategore-dev1-li-chevrondown' />
                        </li>
                    </ul>
                </div>

                {/* <div className='maincategore-dev' style={{ marginRight: '10px' }}>

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
                                <Link to='/categore/food'>
                                    <a>Foods</a>
                                </Link>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li'>
                            <div className='maincategore-dev-ul-li-dev'>
                                <FontAwesomeIcon icon={faMosque} className='pe-2 maincategore-img ' />
                                <Link to='/categore/islamic' style={{ textDecoration: 'none' }}>
                                    <a>Islamic</a>
                                </Link>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                            <div>
                                <li>
                                    <a>Attar</a>
                                </li>
                                <li>
                                    <a>Attar</a>
                                </li>
                                <li>
                                    <a>Attar</a>
                                </li>
                            </div>
                        </li>
                        <li className='maincategore-dev-ul-li maincategore-dev-ul-lust'>
                            <div className='maincategore-dev-ul-li-dev '>
                                <FontAwesomeIcon icon={faTrophy} className='pe-2 maincategore-img ' />
                                <a>Sports</a>
                                <FontAwesomeIcon icon={faChevronDown} className='maincatagore-faChevrondown' />
                            </div>
                        </li>
                    </ul>
                </div> */}
                <Outlet />

            </div>
        </>
    );
};

export default MainCategore;