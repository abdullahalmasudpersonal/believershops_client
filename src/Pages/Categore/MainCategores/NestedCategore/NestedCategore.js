import React from 'react';
import NestedItem from './NestedItem/NestedItem';
import item from '../../../Shared/Header/MHeaderCatagore/SideberData/SideberItem.json';
import './NestedCategore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const NestedCategore = () => {
    return (
        <div className="sidebar">

            <div className='nestedCategore-title'>
                <FontAwesomeIcon style={{padding:"16px"}} icon={faAlignJustify} />
                <span>ALL CATEGORIES</span>
            </div>

            {item.map((item, index) => <NestedItem key={index} item={item} />)}
        </div>
    );
};

export default NestedCategore;