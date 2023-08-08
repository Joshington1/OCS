import "./Sidebar.css";
import Logo from "../../../images/logo.png";
import DashboardIcon from "../../../assets/dashboard";
import ProfileIcon from "../../../assets/profile";
import SettingsIcon from "../../../assets/settings";
import { Link, useNavigate } from "react-router-dom";

import Clear from "../../../assets/Clear";


// eslint-disable-next-line react/prop-types
const Sidebar = ({state}) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="side-container">
        <img src={Logo} alt="" className="side-logo" />

        <div className="side-links">

          <Link to="/student/dashboard" className={`${state === 1 ? "side-flex active": "side-flex"}`}>
            <DashboardIcon />
            Dashboard
          </Link>

          <Link to="/student/clearance" className={`${state === 2 ? "side-flex active": "side-flex"}`}>
          <Clear/>
            Clearance
          </Link>

          <Link to="/student/profile" className={`${state === 3 ? "side-flex active": "side-flex"}`}>
            <ProfileIcon />
            Profile
          </Link>

          <Link to="/student/settings" className={`${state === 4 ? "side-flex active": "side-flex"}`}>
            <SettingsIcon />
            Settings
          </Link>

        </div>

        <button className="logout" onClick={() => navigate("/")}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
