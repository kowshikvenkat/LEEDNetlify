import React from 'react'
import benefitsimage from '../Assets/eventbenefits.png'
import headingimage from '../Assets/eventheading.png'
import contentimage from '../Assets/eventcontent.png'
import pdfimage from '../Assets/eventpdf.png'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
function Helpdesk({Email}) {
      const [selectedImage, setSelectedImage] = React.useState(headingimage);
      const [show, setShow] = React.useState(false);
      const[UserEmail,setUserEmail] = React.useState("")
  return (
    <div>
      <div className='d-flex flex-column align-items-around'>
<h4 style={{fontFamily:'Nunito Sans ',fontWeight:700}}>REFERENCE</h4>
   <div className="d-flex justify-content-around">
         <button onClick={()=>setSelectedImage(headingimage)} className='btn btn-info text-light'>Title , Quotes , Video</button>
              <button onClick={()=>setSelectedImage(contentimage)} className='btn btn-info text-light'>Image , Venue , Description , Start&End date</button>
                       <button onClick={()=>setSelectedImage(benefitsimage)} className='btn btn-info text-light'>Additional Info , Benefits</button>
                        <button onClick={()=>setSelectedImage(pdfimage)} className='btn btn-info text-light'>Pdf, Registeration Form</button>
   </div>
    <img src={selectedImage} style={{width:'100%',margin:'1%',height:'auto'}} alt="Selected" />
      </div>
      <hr />
      <h3 style={{fontFamily:'Nunito Sans ',fontWeight:800}} className='text-danger'>BLOCK A USER</h3>
<div className='w-75 d-flex flex-column align-items-start mx-5'>
          <b className='m-3'>NOTE</b>
<ul className='bg-warning d-flex flex-column align-items-start'>
    <li>You are responsible for this serious action</li>
    <li>Other Admin has to accept your block request before permanent blocking</li>
</ul>
</div>
<button className='btn btn-danger' onClick={()=>setShow(true)}>BLOCK</button>
    <Modal
   style={{ position: 'absolute',
  top: '50%',zIndex:1000000000
}}
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>
         BLOCK A USER</Modal.Title>
        </Modal.Header>

        <Modal.Body>
  <ul><li>
    User will not be able to <b>sign in</b>
  </li>
  <li>User can <b>not request</b> for events registeration</li>
  <li>User can not participate in <b>Digital SharkTank</b></li>
  <li>User can still browse website <b>without signing in</b> </li>
  </ul>
            
    
        </Modal.Body>
        <Modal.Footer className='w-100 bg-warning d-flex justify-content-center'>
    <form action="" className=' w-75 d-flex flex-column align-items-center'>
        <input type="email" onChange={(e)=>setUserEmail(e.target.value)} placeholder='Enter Email Address Of User' className='form-control w-100 my-1' /> 
        <input type="submit" value="BLOCK" className='btn btn-danger' onClick={()=>{
                 if(window.confirm('Confirm Again To Block')){
            console.log("confirmed")
             axios.post("http://localhost:5000/requestblockuser",{
     email:Email,
     UserEmail:UserEmail
          }) }
        }}/>
    </form>
        </Modal.Footer>
     
      </Modal>
    </div>
  )
}

export default Helpdesk
