import { useState } from "react";
import DashboardLayout from "../DashLayout/DashboardLayout";
import "../Profile/Profile.css";
import "../Dashboard/Dashboard.css";
import "./Settings.css";

const Settings = () => {
  const [opass, setOpass] = useState("");
  const [npass, setNpass] = useState("");
  const [cpass, setCpass] = useState("");

  return (
    <DashboardLayout state={4}>
      <div className="profile-body">
        <div className="pers-info">
          <p className="pers-header">Edit Security Information</p>
          <form className="set-form">
            <label htmlFor="opass" className="set-label">
              Current Password
              <input
                type="text"
                name="cpass"
                placeholder="********"
                value={opass}
                onChange={(e) => setOpass(e.target.value)}
              />
            </label>

            <label htmlFor="npass" className="set-label">
              New Password
              <input
                type="text"
                name="npass"
                placeholder="********"
                value={npass}
                onChange={(e) => setNpass(e.target.value)}
              />
            </label>

            <label htmlFor="cpass" className="set-label">
              Confirm Password
              <input
                type="text"
                name="cpass"
                placeholder="********"
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
              />
            </label>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
