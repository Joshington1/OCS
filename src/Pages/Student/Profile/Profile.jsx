// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DashboardLayout from "../DashLayout/DashboardLayout";
import "./Profile.css";
import Personal from "./Personal/Personal";


const Profile = () => {
  const [profile, setProfile] = useState(true);
  return (
    <DashboardLayout state={3}>
      <div className="profile-body">
        <div className="profile-nav">
          <div
            className={`nav-${profile ? "active" : "inactive"}`}
            onClick={() => setProfile(true)}
          >
            User Information
          </div>
        </div>

        <Personal /> 
      </div>
    </DashboardLayout>
  );
};

export default Profile;
