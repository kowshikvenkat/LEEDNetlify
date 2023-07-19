import React from 'react'
import leedimg from '../Assets/logo.png'
import './ST.css'
import axios from 'axios';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import LinkedinPopup from '../Models/SharkTank/linkedinPopup';
import addpic from '../Assets/plus.png'
import savepic from '../Assets/icons8-save-50.png'
import yourpitchimg from '../Assets/check.png'
import helpdeskimg from '../Assets/help.png'
import Footer from '../Models/footer'
import MenuST from '../Models/SharkTank/menuST';
import { useDispatch } from 'react-redux';
import { setPitches } from '../Controllers/redux';
import { setyourpitch } from '../Controllers/redux';
const cryptojs = require("crypto-js")

function ST() {
const dispatch = useDispatch()
    const [userName,setuserName] = React.useState("")
const [Email,setEmail] = React.useState("")
const [userProfilePic,setUserProfilePic] = React.useState("")
const[userid,setuserid] = React.useState("")
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
   axios({
    method: "GET",
    url: "http://localhost:5000/pitchesST",
  }).then((res)=>{

dispatch(setPitches(res.data.docs))
  })  },[])
  React.useEffect(()=>{

if(userid){
  
   axios.post("http://localhost:5000/yourpitchST",{
        id:userid
    }).then((res)=>dispatch(setyourpitch(res.data.docs)))
}

    })
  return (
    <div className=' ' style={{marginTop:'80px',}}>
     <div id='SThead'>
       <h1 style={{fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>DIGITAL SHARKTANK - <img src={leedimg} style={{width:250,height:80}} alt="" /></h1>
     </div>


<div  className="d-flex MainST">
  {window.innerWidth>800?
    <div  style={{flex:0.15,height:'',boxShadow:' 0 0 10px rgba(3, 201, 169, 0.3)'}} className=' border d-flex flex-column justify-content-between'>
        
  <div className="sidebar">
       <br />
         <img src={userProfilePic} style={{borderRadius:"50%",marginTop:'0',width:70,height:70}} alt=""  />
         <p >{userName}</p>
        <div style={{padding:5}}>    <Link style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center' to="createpitchST">CREATE PITCH <img src={addpic} style={{width:30,height:30,background:'white',padding:5,borderRadius:'50%'}} alt="" /> </Link></div>
        <hr />
       <div style={{padding:5,}} >    <Link className='d-flex justify-content-evenly align-items-center'  style={{textDecoration:'none',color:'white'}} to="savedST">SAVED PITCH <img src={savepic}  style={{width:30,height:30,background:'white',padding:3,borderRadius:'50%'}} alt="" /> </Link></div> <hr />
              <div style={{padding:5}}>    <Link className='d-flex justify-content-evenly align-items-center'  style={{textDecoration:'none',color:'white'}} to="yourpitchST">YOUR PITCH <img src={yourpitchimg}  style={{width:30,height:30,background:'white',padding:3,borderRadius:'50%'}} alt="" /></Link></div>
              </div>
                        
 
  <div className='sidebar'>
 <div style={{padding:5}}>      <LinkedinPopup id={userid}/></div>
 
                <div style={{background:'white',margin:'2%'}}><a className='link-success link-offset-2 link-underline-opacity-25' href="#">HELPDESK <img src={helpdeskimg}  style={{width:20,height:20}} alt="" /></a></div>
  </div>
    </div>:<MenuST name={userName} profile={userProfilePic} userid={userid}/>

  }
    <div style={{flex:window.innerWidth<800?1:0.85,display:'flex',flexDirection:'column',alignItems:'center'}}>
     <Outlet />

    
    </div>

</div>
<br />
 <Footer />
    </div>
  )
}

export default ST
