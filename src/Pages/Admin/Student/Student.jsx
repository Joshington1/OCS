// eslint-disable-next-line no-unused-vars
import React from "react";
import AdDashboardLayout from "../DashLayout/DashboardLayout";
import "./Student.css";
import AdStudentIcon from "../../../assets/adstud";
import { useNavigate } from "react-router-dom";

const AdStudent = () => {
  const navigate = useNavigate();
  
  return (
    <AdDashboardLayout state={3}>
      <div className="ad-stud">
        <div className="ad-search">
          <p className="student-name">Student Search</p>

          <div className="ad-nav">
            <div className="search-bar">
              <AdStudentIcon />
              <input
                type="text"
                placeholder="Enter Matric Number"
                className="mat-ad"
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>

          <h3>Recent Searches</h3>


          <div className="search-welcome">
            <div className="welcome-info">
              <p className="student-name">Adesanya Samson</p>
              <p className="student-level">19/5635</p>
            </div>

            <div className="search-col">
              <div
                onClick={() => navigate("/admin/students/profile")}
                className="search-view"
              >
                View
              </div>
              <div className="search-del">Delete</div>
            </div>
          </div>
          <div className="search-welcome">
            <div className="welcome-info">
              <p className="student-name">Atiyota Princess</p>
              <p className="student-level">20/7670</p>
            </div>

            <div className="search-col">
              <div
                onClick={() => navigate("/admin/students/profile")}
                className="search-view"
              >
                View
              </div>
              <div className="search-del">Delete</div>
            </div>
          </div>
          <div className="search-welcome">
            <div className="welcome-info">
              <p className="student-name">Pedro Isreal</p>
              <p className="student-level">19/5529</p>
            </div>

            <div className="search-col">
              <div
                onClick={() => navigate("/admin/students/profile")}
                className="search-view"
              >
                View
              </div>
              <div className="search-del">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default AdStudent;
