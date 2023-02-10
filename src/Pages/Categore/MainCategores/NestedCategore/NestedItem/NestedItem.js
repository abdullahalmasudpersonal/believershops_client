import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NestedItem.css';

const NestedItem = ({item}) => {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <Link className='text-decoration-none fw-bold' to={item.path || ""}  style={{width:'200px'}}>
                        <span>
                            {/* {item.icon && <i className={item.icon}></i>} */}
                            {item.title}
                        </span>
                    </Link>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <NestedItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <Link className='text-decoration-none fw-bold' to={item.path || ""}>
                <a className="sidebar-item plain t">
                    {/* {item.icon && <i className={item.icon}></i>} */}
                    {item.title}
                </a>
            </Link>
        )
    }
};

export default NestedItem;