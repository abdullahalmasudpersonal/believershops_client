import adminSideberData from "./AdminSideberData.json";
import AdminSideberItem from "./AdminSideberItem";
import './AdminSideber.css';

export default function AdminSideber(){
    return (
        <div className="sidebar">
          { adminSideberData.map((item, index) => <AdminSideberItem key={index} item={item} />) }
        </div>
    )
}