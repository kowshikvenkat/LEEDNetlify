import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar.css'
const Sidebar = ({choosepicker,bgcolor}) => {
  const[ActiveMenu,setActiveMenu] = React.useState(0)
  return (
 <div
      style={{ display: 'flex', height: 'auto', overflow: 'scroll initial' }}
    >
      <CDBSidebar className='border' textColor={bgcolor!==undefined?'black':'white'} backgroundColor={bgcolor!==undefined?bgcolor:'#333'}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            EVENTS SCHEDULED
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent textColor={bgcolor!==undefined?'black':'white'} className="sidebar-content">
          <CDBSidebarMenu className='cdbsidebarmenu'>
            <NavLink className={bgcolor==undefined? ActiveMenu=='allevents'?'text-warning':'text-light':'text-dark'} onClick={(e)=>{choosepicker('returnallevents');setActiveMenu('allevents')}}>
              <CDBSidebarMenuItem icon="columns">All Events</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink className={bgcolor==undefined?ActiveMenu=='todayevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returntodayevents');setActiveMenu('todayevents')}}       activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Today Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='futureevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returnfutureevents');setActiveMenu('futureevents')}} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Future Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='overevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returncompletedevents');setActiveMenu('overevents')}} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Completed Events
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
<hr />
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;