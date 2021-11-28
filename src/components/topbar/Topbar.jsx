import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          
        </ul>
        
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            
          </Link>
        ) : (
          <ul className="topList">
            
            
          </ul>
        )}
       
      </div>
    </div>
  );
}
