import React from 'react'
import { Calendar, dayjsLocalizer, globalizeLocalizer, momentLocalizer,dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"

import { Link,Outlet,useNavigate } from 'react-router-dom';

function Events() {
  const navigate = useNavigate()
const[verifiedevents,setverifiedevents] = React.useState([])
const[events,setevents] = React.useState([])
  React.useEffect(()=>{
    
axios({
    method: "GET",
    url: "http://localhost:5000/verifiedevents",
  
  }).then(res=>{
setverifiedevents(res.data.docs)

  })
  },[])
  React.useEffect(()=>{

  })
const locales = {
  "en-US":require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
React.useEffect(()=>{

  verifiedevents.map((val,ind)=>{
    var eventobject = {
    allday:true,
title:val['Title'],
start: new Date(val['Date'].slice(0,4),(val['Date'].slice(5,6)!=0?val['Date'].slice(5,7):val['Date'].slice(6,7)),(val['Date'].slice(8,9)!=0?val['Date'].slice(8,10):val['Date'].slice(9,10))) ,
end:new Date(val['Date'].slice(0,4),(val['Date'].slice(5,6)!=0?val['Date'].slice(5,7):val['Date'].slice(6,7)),(val['Date'].slice(8,9)!=0?val['Date'].slice(8,10):val['Date'].slice(9,10)))}
setevents((prev)=>!prev.includes(eventobject)&&prev.concat(eventobject))

  })
},[verifiedevents])
  return (
    <div>
<h1>Events</h1>
<div>
  <Calendar
localizer={localizer}
startAccessor="start"
endAccessor="end"
events={events}
 style={{height:700,width:"90vw",border:'2px solid blue',borderRadius:'20px',overflow:'hidden',padding:'2%'}}/>
</div>
<div>
  <Link to="/eventregister">Register For Your Event </Link> <br />
<Link to="/allevents">ALL EVENTS TODAY</Link> <br />
</div>
<Outlet />
    </div>
  )
}

export default Events
