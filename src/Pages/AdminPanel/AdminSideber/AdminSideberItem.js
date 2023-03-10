import { useState } from "react"
import { Link } from "react-router-dom"

export default function AdminSideberItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "admin-sidebar-item open" : "admin-sidebar-item"}>
                <div className="admin-sidebar-title">
                    <Link to={item.path || ""}  style={{width:'200px', textDecoration:"none"}}>
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.title}
                        </span>
                    </Link>
                    <i className="bi-chevron-down admin-toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="admin-sidebar-content">
                    {item.childrens.map((child, index) => <AdminSideberItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <Link style={{ textDecoration:"none"}} to={item.path || ""}>
                <a className="admin-sidebar-item plain">
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </a>
            </Link>
        )
    }
}