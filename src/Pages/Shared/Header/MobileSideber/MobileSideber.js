import React from 'react';
import MobileSideberItem from './MobileSideberItem';
import sideberDatas from './MobileSideberData.json';
import './MobileSideberAll.css';

const MobileSideber = () => {
    return (
        <div className='mobile-sideber'>
            { sideberDatas.map((sideberData, index) => <MobileSideberItem key={index} sideberData={sideberData} />) }
        </div>
    );
};

export default MobileSideber;