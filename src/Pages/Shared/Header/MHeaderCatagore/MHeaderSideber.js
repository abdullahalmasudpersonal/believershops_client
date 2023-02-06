import React from 'react';
import MHeaderSideberItem from './MHeaderSideberItem';
import mheaderitem from './MHeaderData.json';

const MHeaderSideber = () => {
    return (
        <div>
           {
            mheaderitem.map((mheaderitem, index) => <MHeaderSideberItem key={index} mheaderitem={mheaderitem}  />)
           }
        </div>
    );
};

export default MHeaderSideber;