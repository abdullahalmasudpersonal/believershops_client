import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MHeaderCatagore.css';
import { faAlignJustify, faBowlFood, faClose, faComputer, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';

const MHeaderCatagore = () => {
    return (
        <>
            {/*  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <FontAwesomeIcon style={{ height: '22px', width: '22px', color: '#FF5733', padding: '10px' }} icon={faAlignJustify} />
            </button> */}

            <div style={{ width: '250px' }} class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5> */}
                    <button type="button" class=" btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                   {/*  <FontAwesomeIcon icon={faClose} /> */}
                    </button>
                </div>

               {/*  <div className='mHeaderCatagore'>
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
                </div> */}

            </div>


            {/* <div className='mHeaderCatagore'>
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
            </div> */}
        </>
    );
};

export default MHeaderCatagore;