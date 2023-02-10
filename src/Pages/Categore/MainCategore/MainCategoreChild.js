import { faChevronDown, faChevronRight, faMosque } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './MainCategore.css';

const MainCategoreChild = () => {
    const [categoreChildOpen, setCategoreChildOpen] = useState(false);

    return (
        <div className={categoreChildOpen ? "mainCategoreChild mainCategoreChildOnpen": "mainCategoreChild"}>
            <div className='mainCategoreChild-title'>
                <span>
                    <FontAwesomeIcon icon={faMosque} />
                    Islamic
                </span>
                <FontAwesomeIcon onClick={() => setCategoreChildOpen(!categoreChildOpen)} className='mainCategoreChild-cheveronRight' icon={faChevronRight} />
            </div>
            <div>
                hellow
            </div>
        </div>
    );
};

export default MainCategoreChild;