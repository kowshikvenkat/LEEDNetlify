import React from 'react'
import { Calendar, dayjsLocalizer, globalizeLocalizer, momentLocalizer,dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import axios from 'axios';
import infopic from "../Assets/info.png"
import "react-datepicker/dist/react-datepicker.css"
import Switch from "react-switch";
import { Link,Outlet,useNavigate } from 'react-router-dom';
import GeneralEvents from './generalevents';
import LEEDevents from './LEEDevents';
import KCTImage from '../Assets/KCTLOGO.png'
function Events() {
  const navigate = useNavigate()
const[verifiedevents,setverifiedevents] = React.useState([])
const[events,setevents] = React.useState([])
  const [checked, setChecked] = React.useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
 
  return (
    <div style={{marginTop:'100px'}} >
<h1 style={{fontFamily:'Bebas Neue'}} className='text-success'>Events Schedule</h1>
<div>
<div className="d-flex justify-content-center ">

  <Switch 
  onChange={handleChange}
   checkedIcon={false}
   checked={checked}
    uncheckedIcon={false}
/>
{!checked?<p className='mt-1' style={{fontSize:15,color:'grey',width:150}}>GENERAL EVENTS</p>:<p className='mt-1' style={{fontSize:15,color:'grey',width:150}}>LEED EVENTS</p>} 
</div>
{!checked?<div className=' d-flex flex-column align-items-center'>
<div className=''>
    <GeneralEvents />
<br />
</div>
<div className='w-75 d-flex flex-column align-items-center' style={{background:'white',boxShadow:'0 0 5px grey',fontFamily:'Inter'}}>
<br />
<p className='text-success '>Register Your Event Too ?</p>
<h3 style={{fontFamily:'Inter',fontWeight:700}}>Apply To LEED Events</h3>
<p className='text-primary  w-50 d-flex align-items-center mt-2'><img src={infopic} style={{height:30,width:30}} alt="" />Adhere to the instructions</p>
<p className='text-primary  w-50 d-flex align-items-center'><img src={infopic} style={{height:30,width:30}} alt="" />Kindly follow terms and conditions</p>
<p className='text-primary  w-50 d-flex align-items-center'><img src={infopic} style={{height:30,width:30}} alt="" />Events from organizations are accepted</p>
<p className='text-primary  w-50 d-flex align-items-center bg-dark'><img src={infopic} style={{height:30,width:30}} alt="" />Events from individuals will not be entertained</p>
<img src={KCTImage} style={{height:'20%',width:'40%'}} alt="" />
  <Link to="/eventregister" className='btn btn-primary my-3'>Register For Your Event </Link> 
</div>
<br /><br />
</div>:  <LEEDevents />}

</div>
<div>
</div>

    </div>
  )
}

export default Events
