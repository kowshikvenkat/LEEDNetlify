import React from 'react'
import { Calendar, dayjsLocalizer, globalizeLocalizer, momentLocalizer,dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"
import Switch from "react-switch";
import { Link,Outlet,useNavigate } from 'react-router-dom';
import GeneralEvents from './generalevents';
import LEEDevents from './LEEDevents';
function Events() {
  const navigate = useNavigate()
const[verifiedevents,setverifiedevents] = React.useState([])
const[events,setevents] = React.useState([])
  const [checked, setChecked] = React.useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
 
  return (
    <div>
<h1>LEED Events</h1>
<div>
<div className="d-flex justify-content-center ">
  <Switch 
  onChange={handleChange}
   checkedIcon={false}
   checked={checked}
    uncheckedIcon={false}
/>&nbsp;&nbsp;{checked&&<p className='mt-1' style={{fontSize:15,color:'grey'}}>LEED EVENTS</p>}
</div>
{!checked?<>
  <GeneralEvents />
<Link to="/eventregister">Register For Your Event </Link> <br />
</>:  <LEEDevents />}

</div>
<div>
</div>

    </div>
  )
}

export default Events
