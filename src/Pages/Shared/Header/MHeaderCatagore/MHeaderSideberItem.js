import { faChevronDown, faMosque } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './MHeadersideberItem.css';

const MHeaderSideberItem = ({ mheaderitem }) => {
    const [msideberOpen, setMsideberOpen] = useState(false);

    if (mheaderitem.childrens) {
        return (
            <div className={msideberOpen ? "mHeaderSideberItem msideberOpen" : "mHeaderSideberItem"} >
                <div className='mHeaderSideberItem-title'>
                    <span>
                        {mheaderitem.icon && <FontAwesomeIcon className='mHeaderSideberItem-icon' icon={mheaderitem.icon} />}

                        {mheaderitem.title}
                    </span>
                    <FontAwesomeIcon className='mHeaderSideberItem-toggle-btn' onClick={() => setMsideberOpen(!msideberOpen)
                    } icon={faChevronDown} />
                </div>
                <div className='mHeaderSideberItem-content'>
                    hellow
                </div>
            </div>
        );
    }
    else {
        return (
            <a href={mheaderitem.path || "#"} className={msideberOpen ? "mHeaderSideberItem msideberOpen" : "mHeaderSideberItem"} >
                <span>
                    {mheaderitem.icon && <FontAwesomeIcon className='mHeaderSideberItem-icon' icon={mheaderitem.icon} />}
                </span>
            </a>
        );
    }
};

export default MHeaderSideberItem;