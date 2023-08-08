import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import StudentLogin from "./Pages/Student/Login/StudentLogin";
import Dashboard from "./Pages/Student/Dashboard/Dashboard";
import Profile from "./Pages/Student/Profile/Profile";
import Settings from "./Pages/Student/Settings/Settings";
import Clearance from "./Pages/Student/Clearance/Clearance";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import AdDashboard from "./Pages/Admin/Dashboard/Dashboard";
import AdStudent from "./Pages/Admin/Student/Student";
import Request from "./Pages/Admin/Request/Request";
import AdSettings from "./Pages/Admin/Settings/Settings";




const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/clearance" element={<Clearance />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdDashboard />} />
        <Route path="/admin/request" element={<Request />} />
        <Route path="/admin/students" element={<AdStudent />} />
        <Route path="/admin/settings" element={<AdSettings />} />

        {/* 
        <Route path="/admin/students/new" element={<NewStud />} />
        <Route path="/admin/students/profile" element={<StudProfile />} /> */}
      </Routes>
     
    </Router>
  )
}

export default App
