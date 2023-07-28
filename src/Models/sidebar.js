import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon
} from 'cdbreact';
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';
import './sidebar.css'
export const SidebarEvent = ({choosepicker,bgcolor,helpdesk}) => {
  const[ActiveMenu,setActiveMenu] = React.useState(0)
  return (
 <div 
      style={{ display: 'flex', height: 'auto', overflow: 'scroll initial', }}
    >
      <CDBSidebar className='border'  textColor={bgcolor!==undefined?'black':'white'} backgroundColor={bgcolor!==undefined?bgcolor:'#333'} >
        <CDBSidebarHeader  hideElementOnCollapse prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            EVENTS SCHEDULED
          </a><br />{window.innerWidth<800&&<p style={{fontSize:10}} className='text-secondary'>Close this bar to view events</p>}
        </CDBSidebarHeader>

        <CDBSidebarContent textColor={bgcolor!==undefined?'black':'white'} className="sidebar-content">
          <CDBSidebarMenu className='cdbsidebarmenu'>
            <NavLink className={bgcolor==undefined? ActiveMenu=='allevents'?'text-warning':'text-light':'text-dark'} onClick={(e)=>{choosepicker('returnallevents');setActiveMenu('allevents')}}>
              <CDBSidebarMenuItem icon="columns">All Events</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink className={bgcolor==undefined?ActiveMenu=='todayevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returntodayevents');setActiveMenu('todayevents')}}       >
              <CDBSidebarMenuItem icon="table">Today Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='futureevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returnfutureevents');setActiveMenu('futureevents')}} >
              <CDBSidebarMenuItem icon="user">Future Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='overevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returncompletedevents');setActiveMenu('overevents')}} >
              <CDBSidebarMenuItem icon="chart-line">
                Completed Events
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
<hr />
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            
            className={bgcolor==undefined?ActiveMenu=='helpdesk'?'text-warning sidebar-btn-wrapper':'text-light sidebar-btn-wrapper':'text-dark'}
            style={{
              padding: '20px 5px',cursor:'pointer'
            }}
             onClick={()=>{setActiveMenu('helpdesk');helpdesk(true)}}
          >
          
         <CDBIcon fab size='lg' border icon="stack-overflow"/> <p>HELP DESK</p>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export const SidebarAdmin = ({choosepicker,bgcolor}) => {
  const[ActiveMenu,setActiveMenu] = React.useState(0)
  return (
 <div
      style={{ display: 'flex', height: 'auto', overflow: 'scroll initial' }}
    >
      <CDBSidebar className='border' textColor={bgcolor!==undefined?'black':'white'} backgroundColor={bgcolor!==undefined?bgcolor:'#333'}>
        <CDBSidebarHeader hideElementOnCollapse prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <img src={logo} style={{width:70,height:70,objectFit:'contain'}} alt="" /> ADMIN
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent textColor={bgcolor!==undefined?'black':'white'} className="sidebar-content">
          <CDBSidebarMenu className='cdbsidebarmenu'>
            <NavLink className={bgcolor==undefined? ActiveMenu=='allevents'?'text-warning':'text-light':'text-dark'} onClick={(e)=>{choosepicker('returnallevents');setActiveMenu('allevents')}}>
              <CDBSidebarMenuItem style={{backgroundColor:ActiveMenu=='allevents'?'black':'white',color:ActiveMenu=='allevents'?'white':'black',transition:'0.5s'}} icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink className={bgcolor==undefined?ActiveMenu=='todayevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returntodayevents');setActiveMenu('todayevents')}}       >
              <CDBSidebarMenuItem style={{backgroundColor:ActiveMenu=='todayevents'?'black':'white',color:ActiveMenu=='todayevents'?'white':'black',transition:'0.5s'}} icon="table">SharkTank Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='futureevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returnfutureevents');setActiveMenu('futureevents')}} >
              <CDBSidebarMenuItem style={{backgroundColor:ActiveMenu=='futureevents'?'black':'white',color:ActiveMenu=='futureevents'?'white':'black',transition:'0.5s'}} icon="user">Event Notifications</CDBSidebarMenuItem>
            </NavLink>
            <NavLink className={bgcolor==undefined?ActiveMenu=='overevents'?'text-warning':'text-light':'text-dark'} onClick={()=>{choosepicker('returncompletedevents');setActiveMenu('overevents')}} >
              <CDBSidebarMenuItem style={{backgroundColor:ActiveMenu=='overevents'?'black':'white',color:ActiveMenu=='overevents'?'white':'black',transition:'0.5s'}} icon="chart-line">
                Create Events
              </CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
<hr />
     {/* <div
            
            className={bgcolor==undefined?ActiveMenu=='helpdesk'?'text-warning sidebar-btn-wrapper':'text-light sidebar-btn-wrapper':'text-dark'}
            style={{
              padding: '20px 5px',cursor:'pointer'
            }}
             onClick={()=>{setActiveMenu('helpdesk');helpdesk(true)}}
          >
          
         <CDBIcon fab size='lg' border icon="stack-overflow"/> <p>HELP DESK</p>
          </div> */}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
          style={{backgroundColor:ActiveMenu=='helpdesk'?'black':'white',color:ActiveMenu=='helpdesk'?'white':'black',transition:'0.5s',padding:'20px 5px',fontWeight:800,cursor:'pointer'}}
            onClick={()=>{choosepicker('returnhelpdesk');setActiveMenu('helpdesk')}}
          >
           <CDBIcon  fab size='lg' border icon="stack-overflow"/><p>HELP DESK</p>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

