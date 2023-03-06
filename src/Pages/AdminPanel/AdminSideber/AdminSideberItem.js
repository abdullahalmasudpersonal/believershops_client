import { useState } from "react"
import { Link } from "react-router-dom"

export default function AdminSideberItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <Link to={item.path || ""}  style={{width:'200px'}}>
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.title}
                        </span>
                    </Link>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <AdminSideberItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <Link to={item.path || ""}>
                <a className="sidebar-item plain">
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </a>
            </Link>
        )
    }
}