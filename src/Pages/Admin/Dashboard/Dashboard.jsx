// eslint-disable-next-line no-unused-vars
import React from "react";
import AdDashboardLayout from "../DashLayout/DashboardLayout";
import "./AdDash.css";
import { useNavigate } from "react-router-dom";

const AdDashboard = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={1}>
      <div className="ad-flex">
        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">Welcome Admin.</p>
            <p className="student-level">Admin Number: 001</p>
          </div>
        </div>

        <div className="grid-3">
          <div
            onClick={() => navigate("/admin/students/new")}
            className="ad-card"
          >
            New
            <br />
            Student
            <br />
            Profile
          </div>

          <div onClick={() => navigate("/admin/students")} className="ad-card">
            Edit
            <br />
            Student
            <br />
            Profile
          </div>

          <div onClick={() => navigate("/admin/students")} className="ad-card">
            Delete
            <br />
            Student
            <br />
            Profile
          </div>

        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default AdDashboard;
