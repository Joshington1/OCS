import DashboardLayout from "../DashLayout/DashboardLayout";
import { useState } from "react";
import "./Bursary.css";

const Ambulance = () => {
  const [menu, setMenu] = useState(0);
  const handleClick = () => {
    setMenu(0);
    
  };

  return (
    <DashboardLayout state={2}>
      <div className="amb-dash">
        <p className="amb-head">Bursary Clearance</p>

        {menu !== 0 ? (
          <div className="back">
            <div onClick={handleClick} className="back-link">
              {`<`} Back
            </div>
          </div>
        ) : null}

       
      </div>
    </DashboardLayout>
  );
};

export default Ambulance;
