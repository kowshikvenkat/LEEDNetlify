import React from 'react'
import { Calendar, dayjsLocalizer, globalizeLocalizer, momentLocalizer,dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import infopic from "../Assets/info.png"
import "react-datepicker/dist/react-datepicker.css"
import Switch from "react-switch";
import { Link,Outlet,useNavigate } from 'react-router-dom';
import GeneralEvents from './generalevents';
import LEEDevents from './LEEDevents';
import calendarimg from '../Assets/calendar.png'
import KCTImage from '../Assets/KCTLOGO.png'
import { useLocation } from 'react-router-dom';
function Events() {
      let location = useLocation()
  const [checked, setChecked] = React.useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
 React.useEffect(()=>{
  const queryParams = new URLSearchParams(location.search);
  // You can now access the query parameters using the "queryParams" object
  const id = queryParams.get('id');
  if(id)
  handleChange(true)
 },[])
  return (
    <div style={{marginTop:'100px',background:'white'}} >
<h1 style={{fontFamily:'Bebas Neue',width:'100%'}} className='text-success'>Events Schedule</h1>
<div>
<div className="d-flex justify-content-center ">

  <Switch 
  onChange={handleChange}
   checkedIcon={false}
   checked={checked}
    uncheckedIcon={false}
/>
{checked?<p className='mt-1' style={{fontSize:15,color:'grey',width:150}}>GENERAL EVENTS</p>:<p className='mt-1' style={{fontSize:15,color:'grey',width:150}}>LEED EVENTS</p>} 
</div>
<div className="d-flex w-100 justify-content-center align-items-center"><img src={calendarimg} style={{height:35,width:35}} alt="" /> &nbsp;&nbsp;<div style={{fontFamily:'Bebas Neue',fontSize:35,fontWeight:500}} className='text-success ' >{!checked?'GENERAL EVENTS':'LEED EVENTS'}</div></div>
{!checked?<div className=' d-flex flex-column align-items-center'>
<div className=''>
    <GeneralEvents />
<br />
</div>
<div className='w-75 d-flex flex-column align-items-center' style={{background:'white',boxShadow:'0 0 5px grey',fontFamily:'Inter'}}>
<br />
<p className='text-success '>Register Your Event Too ?</p>
<h3 style={{fontFamily:'Inter',fontWeight:700}}>Apply To LEED Events</h3>
<p className={window.innerWidth>500?'text-primary  w-50 d-flex align-items-center mt-2':'text-primary mt-2 text-start p-1'}><img src={infopic} style={{height:30,width:30}} alt="" />Adhere to the instructions .</p>
<p className={window.innerWidth>500?'text-primary  w-50 d-flex align-items-center mt-2':'text-primary mt-2 text-start p-1'}><img src={infopic} style={{height:30,width:30}} alt="" />Kindly follow terms and conditions .</p>
<p className={window.innerWidth>500?'text-primary  w-50 d-flex align-items-center mt-2':'text-primary mt-2 text-start p-1'}><img src={infopic} style={{height:30,width:30}} alt="" />Events from organizations are accepted .</p>
<p className={window.innerWidth>500?'text-primary text-light w-50 d-flex align-items-center mt-2':'text-primary mt-2 text-start text-light p-1'} style={{background:'rgba(0,0,0,0.5)'}}><img src={infopic} style={{height:30,width:30}} alt="" />Events from individuals will not be entertained !</p>
<img src={KCTImage} style={{height:'20%',width:'40%'}} alt="" />
  <Link to="/eventregister" className='btn btn-primary my-3 w-75'>Register Your Event </Link> 
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
