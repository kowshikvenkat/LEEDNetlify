import React from 'react'
import leedimg from '../Assets/logo.png'
import Modal from 'react-bootstrap/Modal'
import '../Views/ST.css'
import '../Views/ST.css'
import axios from 'axios'
import { setexpertPitches,setexpertcomments,setexpertreports } from '../Controllers/redux'
import menupic from '../Assets/open-book.png'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import sidebarcommentpic from '../Assets/chat.png'
import sidebarreportpic from '../Assets/list.png'
import Footer from '../Models/footer';
import { useDispatch } from 'react-redux';
import helpdeskimg from '../Assets/help.png'
const cryptojs = require("crypto-js")
function STexpert() {
const dispatch = useDispatch()
      const [userName,setuserName] = React.useState("")
const [Email,setEmail] = React.useState("")
const [userProfilePic,setUserProfilePic] = React.useState("")
const[userid,setuserid] = React.useState("")
   const[open,setopen] = React.useState(false)
React.useEffect(()=>{

  if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined){
  var bytes = cryptojs.AES.decrypt(sessionStorage.getItem('name'),'kowshik123')
setuserName(()=> bytes.toString(cryptojs.enc.Utf8))
var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
var bytesimage = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('pic')),'kowshik123')
setUserProfilePic(()=>bytesimage.toString(cryptojs.enc.Utf8))
var bytesuserid = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('userid')),'kowshik123')
setuserid(()=>bytesuserid.toString(cryptojs.enc.Utf8))
  }

},[])
React.useEffect(()=>{

})
    React.useEffect(()=>{
      if(Email){
       axios.post("http://localhost:5000/expertpitchesST",{
       email:Email
    }).then((res)=>{
dispatch(setexpertPitches(res.data.docs))

   })
     axios.post("http://localhost:5000/commentSTexpert",{
  email:Email
}).then((res)=>dispatch(setexpertcomments(res.data.docs)))
  axios.post("http://localhost:5000/reportsexpertST",{
  email:Email
}).then((res)=>dispatch(setexpertreports(res.data.docs)))
  }
    },[Email])
  return (
    <div className=' ' style={{marginTop:'70px',}}>
    <div id='SThead'>
           <h1 style={{fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>DIGITAL FLAGSHIP - <img src={leedimg} style={{width:250,height:80}} alt="" /></h1>
    </div>
 
<div className="d-flex MainST">
    {window.innerWidth>800?<div style={{flex:0.15,height:'',boxShadow:' 0 0 10px rgba(3, 201, 169, 0.3)'}} className=' border d-flex flex-column justify-content-between'>  
  <div className="sidebar">
       <br />
         <img src={userProfilePic} style={{borderRadius:"50%",width:70,height:70}} alt=""  />
         <p>{userName}</p>
        <div style={{padding:5}}>    <Link style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center'  to="comments">YOUR COMMENTS <img src={sidebarcommentpic} style={{width:30,height:30,background:'white',padding:2,borderRadius:'50%'}} alt="" /> </Link></div>
             <hr />
       <div style={{padding:5}}>    <Link  style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center'  to="reports">YOUR REPORTS <img src={sidebarreportpic} style={{width:30,height:30,background:'white',padding:2,borderRadius:'50%'}} alt="" /></Link></div>   
            <hr />                 
  </div>
  <div>
                <div style={{background:'white',margin:'2%'}}><a className='link-success link-offset-2 link-underline-opacity-25' href="#">HELPDESK</a></div>
  </div>
    </div>:
    <div>
<div style={{position:'fixed',top:'100px',left:'5px',borderRadius:'70%',padding:3,background:'rgba(3,201,169,1)',boxShadow:'0 0 10px grey'}} onClick={()=>setopen(true)}>
    <div style={{height:40,width:40}}>
         <img src={menupic} style={{width:20,height:20,filter:'invert(100%)'}} alt="" /> <br />
     <p style={{fontSize:10,color:'white'}}>MENU</p>
    </div>
</div>

             <Modal  style={{textAlign:'center',fontFamily:'Inter'}} show={open} onHide={()=>setopen(false)} backdrop="static" size="sm" centered >
<Modal.Header  closeButton>
<div className='w-100' style={{textAlign:'center'}}>
  <Modal.Title  className='text-primary text-center'>
     <br />
         <img src={userProfilePic} style={{borderRadius:"50%",marginTop:'0',width:70,height:70}} alt=""  />
         <p >{userName}</p>
  </Modal.Title> 
</div>

</Modal.Header>
<Modal.Body style={{paddingBottom:0}}>
<div onClick={()=>setopen(false)}  style={{boxShadow:' 0 0 10px rgba(3, 201, 169, 0.3)'}} className=' border d-flex flex-column justify-content-between'>
        
  <div className="sidebar">
      
  <div style={{padding:5}}>    <Link style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center'  to="comments">YOUR COMMENTS <img src={sidebarcommentpic} style={{width:30,height:30,background:'white',padding:2,borderRadius:'50%'}} alt="" /> </Link></div>
        <hr />
       <div style={{padding:5}}>    <Link  style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center'  to="reports">YOUR REPORTS <img src={sidebarreportpic} style={{width:30,height:30,background:'white',padding:2,borderRadius:'50%'}} alt="" /></Link></div>  <hr />
            
 
  <div className='sidebar'>
 
                <div style={{background:'white',margin:'2%'}}><a className='link-success link-offset-2 link-underline-opacity-25' href="#">HELPDESK <img src={helpdeskimg}  style={{width:20,height:20}} alt="" /></a></div>
  </div>
    </div></div> <br />
</Modal.Body>
     </Modal>
  
    </div>
    }
    <div style={{flex:window.innerWidth<800?1:0.85,display:'flex',flexDirection:'column',alignItems:'center'}}>
  <Outlet />
    </div>

</div>

 <br />
 <Footer></Footer>
    </div>
  )
}

export default STexpert
