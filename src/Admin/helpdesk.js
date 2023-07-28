import React from 'react'
import benefitsimage from '../Assets/eventbenefits.png'
import headingimage from '../Assets/eventheading.png'
import contentimage from '../Assets/eventcontent.png'
import pdfimage from '../Assets/eventpdf.png'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import YouTube from 'react-youtube';
function Helpdesk({Email}) {
      const [selectedImage, setSelectedImage] = React.useState(headingimage);
      const [show, setShow] = React.useState(false);
      const[UserEmail,setUserEmail] = React.useState("")
const[ytlink,setytlink] = React.useState()
     const[YTvideos,setYTvideos] = React.useState([])
 React.useEffect(()=>{
       axios({
    method: "GET",
    url: "https://leednetlifybackend.onrender.com/getYTReferral",
  }).then((res)=>{
setYTvideos(res.data.docs)
  })
  },[])
      function HostYoutube(e){
if(YTvideos.length<4){
  axios.post("https://leednetlifybackend.onrender.com/YTreferral",{
  ytlink:ytlink
})
}else{
  e.preventDefault()
  alert("Kindly remove one youtube referral")
}
      }
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
    <img src={selectedImage} style={{width:'95%',margin:'1%',height:'auto'}} alt="Selected" />
      </div>
      <hr />
  <h3 style={{fontFamily:'Nunito Sans ',fontWeight:800}} className='text-danger'>YOUTUBE REFERRAL</h3>

<div className="border border-dark p-1 ">
<h4>CURRENT YT REFERRALS</h4>
<div className="w-100" style={{display:'flex',flexWrap:'wrap'}}>
     {YTvideos.map((val,ind)=>(


  <div className='m-1'> <YouTube
          videoId={val.YTLink.substring(val.YTLink.lastIndexOf('/') + 1)}
opts={{
  width:window.innerWidth>450?'400':'200',
  height:'300'
}}
        />
        <button className='btn btn-danger' onClick={()=>{
            if(window.confirm("Confirm again to remove yt referral")){
      axios.post("https://leednetlifybackend.onrender.com/removeytreferral",{
id:val["_id"]
          })
            }
              window.location.reload()
        }}>Remove</button>
        </div>

        ))}
</div>
</div>
<br />
<hr />
  <form action="" onSubmit={HostYoutube} className='d-flex flex-column align-items-center justify-content-center'>
  <label htmlFor=""><b>ADD YT REFERRAL - Paste only Youtube link , avoid texts and other links</b></label>
    <input type="text" className='form-control w-75 my-2' onChange={(e)=>setytlink(e.target.value)} placeholder='Paste Youtube link' required/>
   <input type="submit" className='btn btn-success' value="HOST" />

  </form>
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
             axios.post("https://leednetlifybackend.onrender.com/requestblockuser",{
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
