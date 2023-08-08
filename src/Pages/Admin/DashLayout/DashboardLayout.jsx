// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./DashboardLayout.css"
import AdSidebar from "../SideBar/Sidebar"

// eslint-disable-next-line react/prop-types
const AdDashboardLayout = ({state, children}) => {
  return (
    <div className='layout'>
        <AdSidebar state={state}/>
        <div className='dash-body'>
            {children}
        </div>
    </div>
  )
}

export default AdDashboardLayout