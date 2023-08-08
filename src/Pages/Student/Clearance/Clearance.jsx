import DashboardLayout from "../DashLayout/DashboardLayout";
import { useState } from "react";
import "./Clearance.css";

const Clearance = () => {
  const [menu, setMenu] = useState(0);
  const [location, setLocation] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const handleSendRequest = () => {
    setRequestSent(true);
  };

  const handleBackClick = () => {
    setMenu(0);
    setLocation("");
    setRequestSent(false);
  };

  return (
    <DashboardLayout state={2}>
      <div className="amb-dash">
        <p className="amb-head">Clearance Inventory</p>

        {menu !== 0 ? (
          <div className="back">
            <div onClick={handleBackClick} className="back-link">
              {`<`} Back
            </div>
          </div>
        ) : null}

        {menu === 0 ? (
          <div className="grid-2">
            <div className="first">
              <div onClick={() => setMenu(1)} className="amb-card">
                Bursary
              </div>
              <div onClick={() => setMenu(2)} className="amb-card">
                Student Affairs
              </div>
              <div onClick={() => setMenu(3)} className="amb-card">
                Academic Affairs
              </div>
              <div onClick={() => setMenu(4)} className="amb-card">
                College Office
              </div>
            </div>
            <div className="second">
              <div onClick={() => setMenu(5)} className="amb-card">
                Department
              </div>
              <div onClick={() => setMenu(6)} className="amb-card">
                ICT
              </div>
              <div onClick={() => setMenu(7)} className="amb-card">
                Medical Centre
              </div>
              <div onClick={() => setMenu(8)} className="amb-card">
                Library
              </div>
              <div onClick={() => setMenu(9)} className="amb-card">
                Sport
              </div>
            </div>
          </div>
        ) : null}

        {menu === 1 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Mary")}
              className={`${location === "Mary" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Bursary Clearance:</p>
                <p>You have been Cleared!</p>
                {/* {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        )}

        {menu === 2 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Student Affairs Clearance </p>
                <p>You have not been cleared</p>
                {/* Add the content and "Send Request" button for Student Affairs */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 3 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Academic Affairs Clearance </p>
                You have not been cleared.{/* Add the content and "Send Request" button for Academic Affairs */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 4 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
             <div className="medical-record">
                <p className="pers-header">College Office Clearance:</p>
                <p>You have been Cleared!</p>
                {/* {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        )}

        {menu === 5 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Departmental Clearance </p>
                <p>You have not been Cleared</p>
                {/* Add the content and "Send Request" button for Department */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 6 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">ICT Clearance </p>
                You have not been Cleared.{/* Add the content and "Send Request" button for ICT */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 7 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Medical Clearance </p>
                You have not been Cleared.
                {/* Add the content and "Send Request" button for Medical Centre */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 8 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Library Clearance </p>
                You have not been cleared.
                {/* Add the content and "Send Request" button for Library */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {menu === 9 && (
          <div className="medical-record">
            <div
              onClick={() => setLocation("Joseph")}
              className={`${location === "Joseph" ? "" : ""}`}
            >
              <div className="medical-record">
                <p className="pers-header">Sport Clearance </p>
                You have not been Cleared.
                {/* Add the content and "Send Request" button for Sport */}
                {requestSent ? (
                  <p>Your request has been sent.</p>
                ) : (
                  <div className="search-col">
                    <div onClick={handleSendRequest} className="search-view">
                      Send Request
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Clearance;
