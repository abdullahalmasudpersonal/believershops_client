import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './MHeaderCatagore.css';
import { faAlignJustify, faBowlFood, faChevronCircleDown, faChevronDown, faClose, faComputer, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MHeaderCatagore = () => {
    const [mHChevrondown, setMHChevrondown] = useState(false);

    return (
        <>

            <div style={{ width: '250px', border: '2px solid green' }} class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                <div class="offcanvas-header" >
                    <button className='mheadercatagore-close-btn  text-reset' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FontAwesomeIcon className='fw-bold' icon={faClose} />
                    </button>
                </div>
                <div className={mHChevrondown ? "mheadercatagore-dev mHChevrondown" : "mheadercatagore-dev"}>
                    <ul className='mheadercatagore-dev-ul'>
                        <li className='mheadercatagore-dev-ul-li'>

                            <div className='d-flex'>
                                    <Link to='/categore/islamic'>
                                <div className="mheadercatagore-dev-ul-li-dev" >
                                        <span>Islamic</span>
                                </div>
                                    </Link>
                                <FontAwesomeIcon onClick={() => setMHChevrondown(!mHChevrondown
                                    )} className='mheadercatagore-chevrondown' icon={faChevronDown} />
                            </div>

                            <div className='mheadercatagore-first-child'>
                                <a className='mheadercatagore-first-child-a'>hasan</a>
                                <a className='mheadercatagore-first-child-a'>hasan</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    );
};

export default MHeaderCatagore;