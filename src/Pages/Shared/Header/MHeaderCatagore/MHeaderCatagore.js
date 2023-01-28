import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MHeaderCatagore.css';
import { faBowlFood, faClose, faComputer, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';

const MHeaderCatagore = () => {
    return (
        <>
            <div className='mHeaderCatagore'>
                <button className='mHeaderCatagoreBtn'>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <ul className='mHeaderCatagoreUl'>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faSpa} className='pe-2 product-img ' />
                            <a>Beauty</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faShoppingBag} className='pe-2 product-img ' />
                            <a>Bangs</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faComputer} className='pe-2 product-img' />
                            <a>Computer</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faPersonDress} className='pe-2 product-img ' />
                            <a>Dresses</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faMicrochip} className='pe-2 product-img' />
                            <a>Electronic</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faBowlFood} className='pe-2 product-img' />
                            <a>Foods</a>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faMosque} className='pe-2 product-img' />
                            <a>Islamic</a>
                        </div>
                        <div>
                            <ul>
                                <li className='mHeaderCatagoreUlLi'>
                                    <a>Cap</a>
                                </li>
                                <li className='mHeaderCatagoreUlLi'>
                                    <a>TAble</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='mHeaderCatagoreUlLi'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faTrophy} className='pe-2 product-img' />
                            <a>Sports</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MHeaderCatagore;