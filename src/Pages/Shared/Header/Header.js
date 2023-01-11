import React, { useState } from 'react';
import './Header.css';
import logo from '../../../img/mahsez.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [shadow, setShadow] = useState(false)
    const changeShadow = () =>{
        if(window.scrollY >= 50){
            setShadow(true)
        }
        else{
            setShadow(false)
        }
    }
    window.addEventListener('scroll', changeShadow)


    return (
        <>
            {/* ---------Part 1 ----------- */}
          
            <div className={shadow ? 'sticky-top  header-shadow': 'sticky-top'} style={{ padding: '20px 0px' }}>
                <div className='container  d-flex justify-content-between align-items-center'>
                    <div>
                        <img width='150px' src={logo} alt='' />
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
                            <p className='m-0'>Call us now : (+84) 4567 421 978</p>
                            <p className='m-0'>Email : contact@revo.com</p>
                        </div>
                    </div>
                </div>
            </div>








            {/* ---------Part 2 ----------- */}
        </>
    );
};

export default Header;