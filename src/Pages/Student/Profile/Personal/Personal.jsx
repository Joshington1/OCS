import "../../Dashboard/Dashboard.css";

const Personal = () => {
  return (
    <div className="pers-contain">
      <div className="pers-info">
        <p className="pers-header">Personal Information</p>

        <div className="details">
          <div className="dets-flex">
            <p className="info">Full Name:</p>
            <p className="answer">ADESANYA SAMSON OLUTUNMISE</p>
          </div>
          <div className="dets-flex">
            <p className="info">Matric Number:</p>
            <p className="answer">19/5635</p>
          </div>
          <div className="dets-flex">
            <p className="info">Sex:</p>
            <p className="answer">Male</p>
          </div>
          <div className="dets-flex">
            <p className="info">College:</p>
            <p className="answer">COPAS</p>
          </div>
          <div className="dets-flex">
            <p className="info">Department:</p>
            <p className="answer">Computer Science</p>
          </div>
          <div className="dets-flex">
            <p className="info">Level:</p>
            <p className="answer">400</p>
          </div>
          <div className="dets-flex">
            <p className="info">Phone No.:</p>
            <p className="answer">090579....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
