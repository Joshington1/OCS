// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./DashboardLayout.css"
import Sidebar from "../Sidebar/Sidebar"

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({state, children}) => {
  return (
    <div className='layout'>
        <Sidebar state={state}/>
        <div className='dash-body'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout