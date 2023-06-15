import React, { useState } from 'react';
import './MobileSideberAll.css';

const MobileSideberItem = ({ sideberData }) => {
    const [mSideberOpen, setMSideberOpen] = useState(false)

    if (sideberData.childrens) {
        return (
            <div className={mSideberOpen ? "mobileSideberItem mSOpen" : "mobileSideberItem"}>
                <div className="mobileSideber-title">
                    <span>
                        {/* {sideberData.icon && <i className={sideberData.icon}></i>} */}
                        {sideberData.title}
                    </span>
                        <i className="bi-chevron-down mSideber-toggle-btn" onClick={() => setMSideberOpen(!mSideberOpen)}></i>
                </div>
                <div className="mobileSidebar-content pt-0">
                    {sideberData.childrens.map((child, index) => <MobileSideberItem key={index} sideberData={child} />)}
                </div>
            </div>
        );
    }
    else {
        return (
            <a href={sideberData.path || "#"} className="mobileSideberItem mSPlain">
                {/*  {sideberData.icon && <i className={sideberData.icon}></i>}  */}
                {sideberData.title}
            </a>
        )
    }
};

export default MobileSideberItem;