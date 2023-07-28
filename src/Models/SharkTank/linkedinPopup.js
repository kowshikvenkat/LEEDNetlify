import React from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import linkedinimg from '../../Assets/icons8-linkedin-64.png'
function LinkedinPopup({id}) {
    const[LinkedIn,setLinkedIn] = React.useState("")
    const[open,setopen] = React.useState(false)
    function AddLinkedIn(e){
        e.preventDefault();
axios.post("https://leednetlifybackend.onrender.com/addLinkedInST",{
    id:id,
    linkedin:LinkedIn
})
    }
    return (
    <div>
     <Link className='d-flex justify-content-evenly align-items-center' style={{textDecoration:'none',color:'white'}} onClick={()=>setopen(true)}>YOUR LINKEDIN<img src={linkedinimg} style={{width:30,height:30,background:'white',borderRadius:'50%'}} alt="" /></Link>
             <Modal  style={{textAlign:'center',fontFamily:'Inter'}} show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
<Modal.Header  closeButton>
<div className='w-100' style={{textAlign:'center'}}>
  <Modal.Title  className='text-primary text-center'>Add/Update LinkedIn Details</Modal.Title> 
</div>

</Modal.Header>
<Modal.Body style={{paddingBottom:0}}>
    <form action="" className='d-flex ' onSubmit={AddLinkedIn}>
        <input type="text" className='form-control' placeholder=' LinkedIn ID' onChange={(e)=>setLinkedIn(e.target.value)}/>&nbsp;
        <input type="submit" className='btn btn-success'/>
      </form>
      <br />
      <p className='text-secondary'>*Submit Empty field to remove your linkedIn account from your profile</p>
</Modal.Body>
     </Modal>
  
    </div>
  )
}

export default LinkedinPopup
