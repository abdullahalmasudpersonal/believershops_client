import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './MHeader.css';
import {faClose } from '@fortawesome/free-solid-svg-icons';
import Sideber from '../Sideber/Sideber';

const MHeader = () => {

    return (
        <>

            <div style={{ width: '270px'}} class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                <div class="offcanvas-header"  >
                    <button className='mheadercatagore-close-btn  text-reset' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FontAwesomeIcon className='fw-bold' icon={faClose} />
                    </button>
                </div>

                <div class="offcanvas-body" style={{padding:'0'}}>
                <Sideber/>
                </div>
            </div>

            {/*   <div style={{ width: '250px', background:'rgb(250, 245, 243)' }} class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                <div class="offcanvas-header" >
                    <button className='mheadercatagore-close-btn  text-reset' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FontAwesomeIcon className='fw-bold' icon={faClose} />
                    </button>
                </div>
                <Sideber/>
            </div> */}



        </>
    );
};

export default MHeader;