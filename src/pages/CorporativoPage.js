import { Link, Outlet } from "react-router-dom";

export default function Corporativo() {
    return (
        <div>
              <h1>Corporativo</h1>
              <Outlet />
              <Link to="main">Say</Link>
      
        </div>
    );
}