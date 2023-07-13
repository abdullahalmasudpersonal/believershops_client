import React from 'react';
import './HomeHeaders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faChevronRight, faComputer, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomeHeaders = () => {
    return (
        <div className='homeHeaders'>
            <ul className='p-0'>
                <li>
                    <Link to='/categore/beautyes' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faUserDoctor} className='homeHeadersMainCategoreImg' />
                            <span>Health & Beauty</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                    <div className='homeHeadersCategoryDev'>
                        <ul>
                            <li>
                                <Link className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Madud</span><FontAwesomeIcon icon={faChevronRight} className='homeHeadersCategoreFaChevronRight' /></div>
                                    </div>
                                </Link>
                                <div className='homeHeadersSubCategoryDev'>
                                    <ul>
                                        <li>
                                            <Link className='text-decoration-none'>
                                                <div className='homeHeadersSubCategoryDevItem'>masduds</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/categore/bags' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faShoppingBag} className='homeHeadersMainCategoreImg' />
                            <span>Bags & Watchs</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>

                </li>
                <li>
                    <Link to='/categore/computers' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faComputer} className='homeHeadersMainCategoreImg' />
                            <span>Computers Accessories</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/dresses' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faPersonDress} className='homeHeadersMainCategoreImg' />
                            <span>Dresses & Jewellery</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/electronics' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faMicrochip} className='homeHeadersMainCategoreImg' />
                            <span>Electronic & TV</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/foods' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faBowlFood} className='homeHeadersMainCategoreImg' />
                            <span>Home Appliences</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/foods' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faBowlFood} className='homeHeadersMainCategoreImg' />
                            <span>Kids Accessories</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/foods' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faBowlFood} className='homeHeadersMainCategoreImg' />
                            <span>Groceries & Foods</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/categore/islamic' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev'>
                            <FontAwesomeIcon icon={faMosque} className='homeHeadersMainCategoreImg' />
                            <span>Islamic Accessories</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                    <div className='homeHeadersCategoryDev'>
                        <ul>
                            <li>
                                <Link to='/categore/islamic/jainamazs' className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Jainamaz</span></div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/categore/islamic/tasbeehs' className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Tajbeeh</span></div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/categore/islamic/tupis' className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Tupi</span></div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/categore/islamic/attars' className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Attar</span><FontAwesomeIcon icon={faChevronRight} className='homeHeadersCategoreFaChevronRight' /></div>
                                    </div>
                                </Link>
                                <div className='homeHeadersSubCategoryDev'>
                                    <ul>
                                        <li>
                                            <Link to='/categore/islamic/attars/popular_attar' className='text-decoration-none'>
                                                <div className='homeHeadersSubCategoryDevItem'>Populer Attar</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/categore/islamic/attars/combo_offer' className='text-decoration-none'>
                                                <div className='homeHeadersSubCategoryDevItem'>Combo Offer</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/categore/islamic/attars/alifAttars' className='text-decoration-none'>
                                                <div className='homeHeadersSubCategoryDevItem'>Alif Attar</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to='/categore/islamic/miswaks' className='text-decoration-none'>
                                    <div className='homeHeadersCategoryDevItem'>
                                        <div className='d-flex align-items-center'><span>Miswak</span></div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/categore/sports' className='text-decoration-none'>
                        <div className='homeHeadersMainCategoreDev mainCategoryBorderNot'>
                            <FontAwesomeIcon icon={faTrophy} className='homeHeadersMainCategoreImg' />
                            <span>Sports & Outdoors</span>
                            <FontAwesomeIcon icon={faChevronRight} className='homeHeadersMainCategoreFaChevronRight' />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HomeHeaders;