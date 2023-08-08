// eslint-disable-next-line no-unused-vars
import React from "react";
import AdDashboardLayout from "../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={2}>
      <div className="ad-searchs">
      <p className="student-name">Clearance Request</p>
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
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Adetokunbo Oluwaseyi</p>
            <p className="student-level">19/551</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
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
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Isreal Pedro</p>
            <p className="student-level">19/5529</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Erukusin Larry</p>
            <p className="student-level">19/6018</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Oyetimehin Emmanuel</p>
            <p className="student-level">19/5349</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Oregunwa David</p>
            <p className="student-level">19/5745</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
          </div>
        </div>
        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Saka Abdulkareem</p>
            <p className="student-level">19/5782</p>
          </div>

          <div className="search-col">
            <div
              onClick={() => navigate("/admin/students/profile")}
              className="search-view"
            >
              View
            </div>
            <div className="search-del">Deny</div>
          </div>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default Request;
