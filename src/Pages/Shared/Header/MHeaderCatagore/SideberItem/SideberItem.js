
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './SideberItem.css';



const SideberItem = ({ sideItem }) => {
    const [sideberOpen, setSideberOpen] = useState(false);

    if (sideItem.childrens) {
        return (
            <div className={sideberOpen ? "sideberItem sideberOpen" : "sideberItem"}>
                <div className='sideber-title'>
                    <Link className='text-decoration-none text-secondary' to={sideItem.path || ""} style={{ width: '210px' }}>
                        <span className='fw-bold'>
                            {sideItem.icon && <i className={sideItem.icon}></i>
                            }
                            {sideItem.title}
                        </span>
                    </Link>
                    <i style={{ fontSize: '12px' }} className="bi-chevron-right bi-3x sideberToggle-btn d-flex align-items-center" onClick={() => setSideberOpen(!sideberOpen)}></i>
                </div>
                <div className='sideberitem-content '>
                    {
                        sideItem.childrens.map((child, index) => <ul><li key={index} sideItem={child}>
                            {sideItem.childrens && <li>{sideItem.title}</li>}
                        </li>
                        </ul>)
                    }
                   {/*  {
                        sideItem.childrens.map((child, index) => <SideberItem key={index} sideItem={child} />)
                    } */}
                </div>
            </div>
        );
    }
    else {
        return (
            <Link to={sideItem.path || ""} className='text-decoration-none fw-bold text-secondary' >
                <a className='sideberItem plain'>
                    {sideItem && <i className={sideItem.icon}></i>}
                    {sideItem.title}
                </a>
            </Link>
        )
    }
};

export default SideberItem;