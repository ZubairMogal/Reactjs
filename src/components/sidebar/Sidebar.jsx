import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebarItem">
        
        <Link className="link" to="/">
             <b> HOME</b>
            </Link>
      </div>
      
    </div>
  );
}
