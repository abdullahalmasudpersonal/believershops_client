import React, { useState } from 'react';
import './SideberMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const SideberMobile = () => {
 const [open, setOpen] = useState(false);

    return (
        <div className='sideber-mobile'>
            <ul>

                <li className={open ? 'sideber-mobile-child open':'sideber-mobile-child'}>
                    <div className='sideber-mobile-child-dev'>
                        <span>Beauty</span>
                        <FontAwesomeIcon className='sideber-mobile-child-dev-btn' icon={faChevronDown}  onClick={() => setOpen(!open)} />
                    </div>
                    <div className='sideber-mobile-child-content'>
                        <h6>asudlkajsdfl</h6>
                    </div>

                    <ul>
                        <li>
                            <div>
                                <span>Computer</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </li>
                    </ul>

                </li>

                <li>
                    <div>
                        <span>Beauty</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <ul>
                        <li>
                            <div>
                                <span>Computer</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </li>
                    </ul>
                </li>

                <li>
                    <div>
                        <span>Beauty</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <ul>
                        <li>
                            <div>
                                <span>Computer</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideberMobile;