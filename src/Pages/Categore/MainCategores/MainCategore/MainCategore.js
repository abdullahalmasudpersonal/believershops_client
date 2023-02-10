import { faAlignCenter, faAlignJustify, faAlignLeft, faBagShopping, faBowlFood, faChevronDown, faChevronRight, faComputer, faHeart, faMicrochip, faMosque, faPersonDress, faShoppingBag, faSpa, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NestedCategore from '../NestedCategore/NestedCategore';
import './MainCategore.css';

const MainCategore = () => {
    return (
        <>
            <div className='container-xxl p-0 py-5 d-flex' >
               
                    <NestedCategore />

                <div className='ms-3'>
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default MainCategore;