import React from 'react'
import emailjs from '@emailjs/browser';
import { toast,ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import logo from '../Assets/logo.png'
import './home.css'
import Footer from '../Models/footer';
function Contact() {
      const[loader,setloader] = React.useState(false)
    function sendemail(e){
    setloader(true)
     e.preventDefault();

    emailjs.sendForm('service_whyp4lj', 'template_9hrrijl',e.target, 'hcsWT9t1HwZVn40PM')
      .then((result) => {
        setloader(false)
          toast.success('Success! Message sent',{autoClose:3000,
             position:toast.POSITION.BOTTOM_CENTER,className:'toast-message'})
           e.target.reset()
      }, (error) => {
          setloader(false)
          toast.warn(error.text,{
            autoClose:false,
            position:toast.POSITION.BOTTOM_CENTER,
            className:'toast-message'
          })
          e.target.reset()
      });
     
  }
  return (
    <div style={{marginTop:'90px'}}>
      <div className="w-100 my-5 form_div_home">

   <Form onSubmit={sendemail} className=' border text-center px-5 py-3 my-2 bg-light'>
   <h2 style={{color:'white',textShadow:'0.5px 0.5px 1px black',backgroundColor:'green'}}>POST YOUR QUERIES</h2>
     <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label className='text-success'>Your profession ?</Form.Label>
       <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="profile" value="Employee" required/> &nbsp;
        <label for="html">Employee</label>
       </div>
         <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="profile" value="Business Lead"/> &nbsp;
        <label for="html">Business Lead</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="profile" value="Student"/> &nbsp;
        <label for="html">Student</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="profile" value="Other professional"/> &nbsp;
        <label for="html">Others</label>
       </div>
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label className='text-success'>How helpful was our site ?</Form.Label>
       <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="remark" value="Good" required/> &nbsp;
        <label for="html">Good</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="remark" value="Average"/> &nbsp;
        <label for="html">Average</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="remark" value="Bad"/> &nbsp;
        <label for="html">Bad</label>
       </div>
      </Form.Group>


      <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
              <Form.Label className='text-success'><u>Any Remarks</u></Form.Label>
        <Form.Control name="message" as="textarea" minLength={10} rows={5} label="Check me out" />
      </Form.Group>
       {loader? (<Spinner style={{alignSelf:'flex-end',marginTop:10}} animation="border" variant="danger" />) :      <input className="m-1 btn btn-primary" style={{alignSelf:'flex-end',marginTop:10}} type="submit" value="SUBMIT"/>}
    </Form>
    <div className='bg-light px-5 border border-primary my-2' >
    <img src={logo} style={{width:200,height:100,maxWidth:'100%',objectFit:'contain'}} alt="" />
      <div><h3 style={{color:'rgba(18, 104, 129, 1)'}}>Contact Location</h3>
      <p>KCT Business School cabin ,</p>
      <p>Kumaraguru College Of Technology</p>
      <p>+9199999999</p>
      <p className='text-primary'>kctleed@kct.ac.in</p>
      
      </div>
      <hr />
      <div>
        <h3 style={{color:'rgba(18, 104, 129, 1)'}}>Staff Co-ordinator</h3>
      <p>Mr. Hari Babu</p>
      <p>Kumaraguru College Of Technology</p>
      <p>+9199999999</p>
      <p className='text-primary'>haribabu@kct.ac.in</p>
      
      </div>
      <hr />
      <div>
          <h3 style={{color:'rgba(18, 104, 129, 1)'}}>Work Timings</h3>
          <p className='mx-5'>Monday to saturday except on college holidays</p>
          <p>10 AM - 7 PM</p>
      </div>
    </div>
</div>
<Footer></Footer>
  <ToastContainer />
    </div>
  )
}

export default Contact
