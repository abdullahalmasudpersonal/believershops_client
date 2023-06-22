import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NestedCategore from '../NestedCategore/NestedCategore/NestedCategore';
import './Categore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Categore = () => {

    return (
        <>
          {/*   <div className='breadcrumb-bg'>
                <div className='container-xxl'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 ">
                            <li class="breadcrumb-item"><Link to="/"><FontAwesomeIcon icon={faHome} className='breadcrumb-home-btn' /></Link></li>
                            <li class="breadcrumb-item"><Link to='/cart' className='breadcrumbItem'>Shopping Cart</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>
            </div> */}
            <div className='container-xxl p-0 py-5 d-flex' >
                <NestedCategore />
                <Outlet />
            </div>
        </>
    );
};

export default Categore;