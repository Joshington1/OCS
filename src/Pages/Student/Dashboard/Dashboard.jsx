import DashboardLayout from "../DashLayout/DashboardLayout";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <DashboardLayout state={1}>
      <div className="student-dash">
        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">ADESANYA SAMSON OLUTNMISE</p>
            <p className="student-level">19/5635</p>
          </div>

          <div className="welcome-state">Pending</div>
        </div>

        <div className="medical-record">
          <p className="pers-header">Cleared Departments</p>

          <div className="medical-table">
            <div className="medical-head">
              <p className="med-head">Date</p>
              <p className="med-head">Description</p>
              <p className="med-head">Department</p>
              <p className="med-head">Status</p>
            </div>

            <div className="medical-head">
              <p className="med-text">25/7/2023</p>
              <p className="med-text">College File Completed</p>
              <p className="med-text">College Office</p>
              <p className="med-active">Completed</p>
            </div>

            <div className="medical-head">
              <p className="med-text">23/7/2023</p>
              <p className="med-text">ID Card and Books Returned</p>
              <p className="med-text">Library</p>
              <p className="med-active">Completed</p>
            </div>

            
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
