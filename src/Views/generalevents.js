import React from 'react'
import { Calendar, dayjsLocalizer, globalizeLocalizer, momentLocalizer,dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"
function GeneralEvents() {
    const[verifiedevents,setverifiedevents] = React.useState([])
    const[events,setevents] = React.useState([])
     React.useEffect(()=>{
    
axios({
    method: "GET",
    url: "http://localhost:5000/verifiedevents",
  
  }).then(res=>{
setverifiedevents(res.data.docs)
console.log(res.data.docs)
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
    console.log(new Date(val['Date']))
    var eventobject = {
    allday:true,
title:val['Title'],
start: new Date(val['Date']) ,
end:new Date(val['Date']),
description:val['Desc'],
}
setevents((prev)=>!prev.includes(eventobject)&&prev.concat(eventobject))

  })
},[verifiedevents])
function eventPropGetter(event, start, end, isSelected) {
  const backgroundColor = 'green'
  const style = {
    backgroundColor,
    borderRadius: '5px',
    opacity: 0.8,
    color: 'white',
    border: 'none',
    display: 'block',
    textAlign: 'center',
  };
  return {
    style,
  };
}

function dayPropGetter(date) {
  const backgroundColor = 'rgba(200,200,300,0.6)'; // set the background color here
  const style = {
    backgroundColor,
    margin:'1px',
  borderTopLeftRadius:'10px'
  };
  return {
    style,
  };
}
  return (
    <Calendar
localizer={localizer}
startAccessor="start"
endAccessor="end"
events={events}
 style={{height:700,width:"90vw",border:'2px solid blue',borderRadius:'20px',overflow:'hidden',padding:'2%',}}
   eventPropGetter={eventPropGetter}
       dayPropGetter={dayPropGetter}
 />
  )
}

export default GeneralEvents
