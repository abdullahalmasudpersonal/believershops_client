import React from 'react';
import sideItems from '../SideberData/SideberItem.json';
import SideberItem from '../SideberItem/SideberItem';
import './Sideber.css';

const Sideber = () => {
    return (
        <div className='sideber'>
            {
                sideItems.map((sideItem, index) => <SideberItem key={index} sideItem={sideItem} />)
            }
        </div>
    );
};

export default Sideber;