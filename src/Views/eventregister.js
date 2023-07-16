import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import infopic from "../Assets/info.png"
import backimage from '../Assets/sign-out.png'
import KCTImage from '../Assets/KCTLOGO.png'
function Eventregister() {
  const navigate = useNavigate()
    const[Institution,setInstitution] = React.useState("")
    const[Email,setEmail] = React.useState("")
    const[Title,setTitle] = React.useState("")
    const[Desc,setDesc] = React.useState("")
    const[link,setlink] = React.useState("")
    const[startDate,setstartDate] = React.useState(null)
       const[endDate,setendDate] = React.useState(null)
         const [isMobile, setIsMobile] = React.useState(false);

  // Function to set a cookie indicating the user's preference to view the desktop site
  function setDesktopViewCookie() {
    document.cookie = 'view=desktop';
    setIsMobile(false);
  }
    function HandleSubmit(e){
        e.preventDefault()
    axios.post("http://localhost:5000/requestevent",{
       Institution:Institution,
       Email:Email,
       Title:Title,
       Desc:Desc,
       Link:link,
       startDate:startDate,
       endDate:endDate
    })
navigate("/events")
    }
     const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)view\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const hasDesktopViewCookie = cookieValue === 'desktop';
  return (
    <div style={{marginTop:'90px',display:'flex',flexDirection:'column',alignItems:'center',fontFamily:'Inter',background:'white'}}>
         {isMobile && !hasDesktopViewCookie && (
        <p>
          You are currently viewing the mobile site. Would you like to switch to the desktop site? <br />
          <button className='btn btn-success' onClick={setDesktopViewCookie}>Yes</button>
        </p>
      )}
    {!isMobile&&(<><h1>  Welcome ! We are gald to invite you ,</h1>
    <h3>You can register your upcoming events to <p className='text-primary' style={{display:'inline'}}>KCTLEED.com</p></h3>
 <div className="w-75 d-flex justify-content-end my-3">    <Link to="/events" className='btn btn-primary d-flex align-items-center'> <img src={backimage} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(180deg)'}} alt="" /> &nbsp;BACK TO EVENTS</Link></div>
    <div className={window.innerWidth>500?'w-75 d-flex flex-column align-items-center':'w-100 d-flex flex-column align-items-center'} style={{background:'white',boxShadow:'0 0 5px grey',fontFamily:'Inter'}}>
<br />
<h3 style={{fontFamily:'Inter',fontWeight:700}}>Instructions To Apply To LEED Events</h3>
<p className={window.innerWidth<500?'text-primary  w-100 text-start p-2':'text-primary  w-75 d-flex align-items-center '}><img src={infopic} style={{height:30,width:30}} alt="" />ADD YOUR EVENT THROUGH BELOW FORMS</p>
<p className={window.innerWidth<500?'text-primary  w-100 text-start p-2':'text-primary  w-75 d-flex align-items-center '}><img src={infopic} style={{height:30,width:30}} alt="" />YOUR EVENT WILL BE DISPLAYED TO EVENTS SECTION AFTER &nbsp;<b className='mx-1'>VERIFICATION</b> </p>
<p className={window.innerWidth<500?'text-primary  w-100 text-start p-2':'text-primary  w-75 d-flex align-items-center '}><img src={infopic} style={{height:30,width:30}} alt="" />EVENTS FROM  <b className='mx-1'> ORGANIZATIONS</b>ARE ACCEPTED</p>
<p className={window.innerWidth<500?'text-primary  w-100 text-start p-2':'text-primary  w-75 d-flex align-items-center '}><img src={infopic} style={{height:30,width:30}} alt="" /><b className='mx-1'>SPAM</b> EVENTS REQUEST WILL NOT BE ENTERTAINED</p>
<p className={window.innerWidth<500?'text-primary  w-100 text-start p-2':'text-primary  w-75 d-flex align-items-center '}><img src={infopic} style={{height:30,width:30}} alt="" />USER WILL BE BLOCKED FROM WEBSITE ACCESS ON FALSY/SPAM REQUESTS</p>
<img src={KCTImage} style={{height:'20%',width:'40%'}} alt="" />
<br />
    <form className={window.innerWidth>500?'d-flex flex-column align-items-center w-75 border p-3':'d-flex flex-column align-items-center w-100 border p-3'} style={{boxShadow:'1px 1px 7px grey'}} action="" onSubmit={HandleSubmit}>
    <h3><u>APPLICATION</u></h3>
        Your Institution : <input className='form-control' style={{width:'100%',height:'40px'}}  type="text" onChange={(e)=>setInstitution(e.target.value)} required/> <br />
        Your Contact Mail Id : <input className='form-control' style={{width:'100%',height:'40px'}} type="email" onChange={(e)=>setEmail(e.target.value)}  required/> <br />
        Your Event Title : <input className='form-control' style={{width:'100%',height:'40px'}} type="text" onChange={(e)=>setTitle(e.target.value)} required/> <br />
        Your Event Description : <textarea  className='form-control' style={{width:'100%',height:'100px'}} type="text" onChange={(e)=>setDesc(e.target.value)}  required/> <br />
            Your Event Registration/Redirect link : <input className='form-control' style={{width:'100%',height:'40px'}} type="text" onChange={(e)=>setlink(e.target.value)}  required/> <br />
        Your Start Date Of Event (specify time if): <input type="datetime-local" onChange={(e)=>setstartDate(e.target.value)} name="" id=""  required/> <br />
         Your End Date Of Event (specify time if): <input type="datetime-local" onChange={(e)=>setendDate(e.target.value)} name="" id=""  required/> <br />
        <input type="submit" className='btn btn-warning' value="Apply" />
    </form>
    <br />
</div>
<br />
</>)}
    </div>
  )
}

export default Eventregister
