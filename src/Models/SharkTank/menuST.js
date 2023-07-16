import React from 'react'
import Modal from 'react-bootstrap/Modal'
import LinkedinPopup from '../../Models/SharkTank/linkedinPopup';
import addpic from '../../Assets/plus.png'
import savepic from '../../Assets/icons8-save-50.png'
import yourpitchimg from '../../Assets/check.png'
import helpdeskimg from '../../Assets/help.png'
import Footer from '../../Models/footer'
import menupic from '../../Assets/open-book.png'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
function MenuST({name,profile,userid}) {
        const[open,setopen] = React.useState(false)
  return (
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
         <img src={profile} style={{borderRadius:"50%",marginTop:'0',width:70,height:70}} alt=""  />
         <p >{name}</p>
  </Modal.Title> 
</div>

</Modal.Header>
<Modal.Body style={{paddingBottom:0}}>
<div onClick={()=>setopen(false)}  style={{boxShadow:' 0 0 10px rgba(3, 201, 169, 0.3)'}} className=' border d-flex flex-column justify-content-between'>
        
  <div className="sidebar">
      
        <div style={{padding:5}}>    <Link style={{textDecoration:'none',color:'white'}} className='d-flex justify-content-evenly align-items-center' to="createpitchST">CREATE PITCH <img src={addpic} style={{width:30,height:30,background:'white',padding:5,borderRadius:'50%'}} alt="" /> </Link></div>
        <hr />
       <div style={{padding:5,}} >    <Link className='d-flex justify-content-evenly align-items-center'  style={{textDecoration:'none',color:'white'}} to="savedST">SAVED PITCHES <img src={savepic}  style={{width:30,height:30,background:'white',padding:3,borderRadius:'50%'}} alt="" /> </Link></div> <hr />
              <div style={{padding:5}}>    <Link className='d-flex justify-content-evenly align-items-center'  style={{textDecoration:'none',color:'white'}} to="yourpitchST">YOUR PITCHES <img src={yourpitchimg}  style={{width:30,height:30,background:'white',padding:3,borderRadius:'50%'}} alt="" /></Link></div>
              </div>
                        <hr />
 
  <div className='sidebar'>
 <div style={{padding:5}}>      <LinkedinPopup id={userid}/></div>
 
                <div style={{background:'white',margin:'2%'}}><a className='link-success link-offset-2 link-underline-opacity-25' href="#">HELPDESK <img src={helpdeskimg}  style={{width:20,height:20}} alt="" /></a></div>
  </div>
    </div>
</Modal.Body>
     </Modal>
  
    </div>
  )
}

export default MenuST
