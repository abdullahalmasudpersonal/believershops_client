import React, { useState } from 'react';
import './Header.css';
import logo from '../../../Assets/img/logo/mahsez.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faHeadset, faShoppingCart, faCaretDown, faUserAlt, faEllipsisV, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle, faHeart } from '@fortawesome/free-regular-svg-icons';
import HeaderCatagore from './HeaderCatagore/HeaderCatagore';
import Banner from '../../Home/Banner/Banner';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import MHeaderCatagore from './MHeaderCatagore/MHeaderCatagore';

const Header = () => {
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

            <div className={shadow ? 'sticky-top  header-shadow ' : ''}>
                <div className='container-xxl  d-flex justify-content-between align-items-center responsive-header' style={{ padding: '10px ' }}>
                    <div>
                        <Link to='/'>
                            <img width='150px' src={logo} alt='' />
                        </Link>
                    </div>

                    <div>
                        <ul className='header-p1-ul m-0 p-0' style={{ listStyleType: 'none' }}>
                            <li>HOME</li>
                            <li>LAYOUT</li>
                            <li>FEATURES</li>
                            <li>BLOGS</li>
                            <li>BLOG PAGE</li>
                        </ul>
                    </div>

                    <div className='d-flex justify-content-center align-items-center' style={{}}>
                        <div>
                            <FontAwesomeIcon style={{ height: '48px', width: '30px', marginRight: '10px', color: '#FF5733' }} icon={faHeadset} />
                        </div>
                        <div>
                            <p className='m-0'>Call us now : (+88) 4567 421 978</p>
                            <p className='m-0'>Email : m.mahsez@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='header-small-screen'>
                    <div className={shadow ? 'sticky-top  header-shadow ' : ''}>
                        <div className='d-flex justify-content-between align-items-center' style={{ padding: '11px' }}>

                            <div>
                                <button style={{ border: 'none', background: 'none' }} class="" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <FontAwesomeIcon style={{ height: '22px', width: '22px', color: '#FF5733', padding: '10px' }} icon={faAlignJustify} />
                                </button>
                                <MHeaderCatagore />
                                {/* <FontAwesomeIcon style={{ height: '22px', width: '22px', color: '#FF5733', padding: '10px' }} icon={faAlignJustify} /> */}
                            </div>

                            <div>
                                <Link to='/'>
                                    <img width='150px' src={logo} alt='' />
                                </Link>
                            </div>

                            <div>
                                <FontAwesomeIcon className='shopping-cart' icon={faUserAlt} />
                                <FontAwesomeIcon className='shopping-cart' icon={faEllipsisV} />
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
                        <FontAwesomeIcon className='shopping-cart me-2' icon={faHeart} />

                        <FontAwesomeIcon className='shopping-cart me-2' icon={faShoppingCart} />

                        <FontAwesomeIcon className='shopping-cart' icon={faUserAlt} />
                    </div>
                </div>
            </div>
            {/* ---------------- Header part 2 end ---------------- */}

            {/* ---------------- Header part 2 responsive start ---------------- */}

            <div className='header2-part-2'>
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
            </div>
            {/* ---------------- Header part 2 responsive end ---------------- */}

        </>
    );
};

export default Header;