// eslint-disable-next-line no-unused-vars
import React from 'react'

const StuAffair = () => {
  return (
    <div>
       <div className="medical-record">
          <p className="pers-header">Recent Clearance Records</p>

          <div className="medical-table">
            <div className="medical-head">
              <p className="med-head">Date</p>
              <p className="med-head">Description</p>
              <p className="med-head">Department</p>
              <p className="med-head">Status</p>
            </div>

            <div className="medical-head">
              <p className="med-text">25/5/2023</p>
              <p className="med-text">400 Level first Semester fees</p>
              <p className="med-text">Bursary</p>
              <p className="med-active">Completed</p>
            </div>

            <div className="medical-head">
              <p className="med-text">23/5/2023</p>
              <p className="med-text">400 Level second Semester fees</p>
              <p className="med-text">Bursary</p>
              <p className="med-active">Completed</p>
            </div>

            <div className="medical-head">
              <p className="med-text">18/5/2023</p>
              <p className="med-text">Jamb admission letter upload</p>
              <p className="med-text">College Office</p>
              <p className="med-active">Completed</p>
            </div>
            <div className="medical-head">
              <p className="med-text">10/5/2023</p>
              <p className="med-text">Jamb admission later upload</p>
              <p className="med-text">College Office</p>
              <p className="med-active">Completed</p>
            </div><div className="medical-head">
              <p className="med-text">07/5/2023</p>
              <p className="med-text">Caleb Admission letter upload</p>
              <p className="med-text">College Office</p>
              <p className="med-active">Completed</p>
            </div><div className="medical-head">
              <p className="med-text">05/5/2023</p>
              <p className="med-text">300 Level clearance upload</p>
              <p className="med-text">College Office</p>
              <p className="med-active">Completed</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default StuAffair
