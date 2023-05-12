import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './home.css'
import { useNavigate } from 'react-router-dom';
import shareimage from '../Assets/share.png'
import KCTImage from '../Assets/Kctimage.jpeg'
import backbutton from '../Assets/arrow-left.png'
import google from '../Assets/google.png'
import logo1 from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png'
import goalpic from '../Assets/goal.png'
import menupic from '../Assets/menu.png'
import scholarpic from '../Assets/scholar.png'
import openbookpic from '../Assets/open-book.png'
import cardimage1 from '../Assets/5363874.jpg'
import cardimage2 from '../Assets/brands-people-ZdqSuxl3Lak-unsplash.jpg'
import cardimage3 from '../Assets/business-concept-with-team-close-up.jpg'
import cardimage4 from '../Assets/cardimage1.jpg'
import eventimage1 from '../Assets/eventimagehome.jpg'
import eventimage2 from '../Assets/eventimagehome3.jpg'
import eventimage3 from '../Assets/eventimagehome2.jpg'
import TextTransition, { presets } from 'react-text-transition';
import Button from 'react-bootstrap/Button';
import bgvideo from '../Assets/home_bg.mp4'
import Form from 'react-bootstrap/Form';
import linkedinicon from '../Assets/linkedin.png'
import instagramicon from '../Assets/instagram.png'
import twittericon from '../Assets/twitter.png'
import facebookicon from '../Assets/facebook.png'
import ImageHolderHome from '../Models/imageHolderHome';
import Footer from '../Models/footer';
function Home() {
  const navigate = useNavigate()
  const[soicalmediaicon,setsocialmediaicon] = React.useState(0)
 let box = React.createRef("")
  React.useEffect(()=>{
    console.log(box.current.getBoundingClientRect().top)
  if(box.current.getBoundingClientRect().top<0&&box.current.getBoundingClientRect().top>-2700){
    
  setsocialmediaicon(1)}
  else{
   setsocialmediaicon(0)}
  })
  return (
    <div >
    <div className='d-flex flex-column align-items-center justify-content-center' style={{position:'fixed',bottom:'10%',width:80,height:250,right:'0%',opacity:soicalmediaicon,transition:'0.2s ease',zIndex:1000,backgroundColor:'white',margin:0,borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',boxShadow:'0 0 10px grey',border:'01px solid grey'}}>
<img src={linkedinicon} style={{width:30,height:30}} alt="" /> 
<div className='w-100 d-flex justify-content-center'>
  <hr className='w-75'/>
</div>
<img src={facebookicon} style={{width:30,height:30}} alt="" /> 
<div className='w-100 d-flex justify-content-center'>
  <hr className='w-75'/>
</div>
<img src={instagramicon} style={{width:30,height:30}} alt="" /> 
<div className='w-100 d-flex justify-content-center'>
  <hr className='w-75'/>
</div>
<img src={twittericon} style={{width:30,height:30}} alt="" /> 
    </div>
    <br />
<ImageHolderHome />
<div ref={box} className="w-100 h-100 d-flex flex-column align-items-center" style={{position:'relative',border:'none'}} >
<video src={bgvideo} style={{width:'100%',height:'100%',background:'red',objectFit:'cover',position:'absolute',top:0,right:0,zIndex:-1}} autoplay="true" muted loop />
  <div className='home_sharktank ' onClick={()=>navigate("/sharktank")}>
 
  <br /><br />
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>SharkTank</h2>
<div className='d-flex  '>
    <div >
<img src={cardimage4} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?

</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage3} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage2} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
</div>
</div>
  <div className='home_sharktank' onClick={()=>navigate("/events")}>


  
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>Events</h2>
<div className='d-flex '>

    <div >
<img src={cardimage1} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage2} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage1} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
</div>
</div>
  <div className='home_sharktank'  style={{borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px',marginBottom:40}}>


  
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>Know Us</h2>
<div className='d-flex '>

    <div >
<img src={cardimage3} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn d-flex justify-content-center btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage3} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
    <div >
<img src={eventimage1} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
</div>
  <br /><br />
</div>
</div> <br /><br />
<div className=' my-5 numberdata_home w-100 '>
<h2 className='text-warning w-50 ' style={{textShadow:'1px 1px 1px gray'}}>Yearly <br /> Achievements <br /><p className='text-muted' style={{fontSize:15,textShadow:'0 0 1px white'}}>(2018-2023)</p> <img src={cardimage3} style={{width:'80%',height:'50%',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey'}} alt="" /></h2>
<span className="d-flex justify-content-around  w-100 " style={{flexWrap:'wrap',padding:'5%'}}>
  <div className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 15 </h1></div>
    <h3 className='text-succes'>Business<br />Meetings</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 150 </h1></div>
    <h3 className='text-succes'>Passed Out<br />Students</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start text-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 7</h1></div>
    <h3 className='text-succes'>Patent<br />Submission</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 5 </h1></div>
    <h3 className='text-succes'>Annual<br />Awards</h3>
</div>
</span>
</div>
<hr />
    <div className='w-100 d-flex flex-column align-items-center img_content_home'>
      <div className='w-100'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
        <h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>NEW GOALS</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
     <img src={eventimage2}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
 <div className=' py-5 my-5'>

     <img src={eventimage3}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
             <div className='d-flex flex-column align-items-center justify-content-center ' ><h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>ENTER THE WORLD OF ASPIRANTS</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
      </div>
       <div className='  my-5'>
        <div className='d-flex flex-column align-items-center justify-content-center '><h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>ENTREPRENEUR</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i>
        </div>
     <img src={eventimage1}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
    </div>
    <hr />
<div className="w-100 my-5  d-flex justify-content-center form_div_home">

   <Form className=' border text-center px-5 py-3 bg-light'>
   <h2 style={{color:'white',textShadow:'0.5px 0.5px 1px black',backgroundColor:'green'}}>Fill The Survey</h2>
     <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label className='text-success'>Your profession ?</Form.Label>
       <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="language" value="" required/> &nbsp;
        <label for="html">Employee</label>
       </div>
         <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="language" value=""/> &nbsp;
        <label for="html">Business Lead</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="language" value=""/> &nbsp;
        <label for="html">Student</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="language" value=""/> &nbsp;
        <label for="html">Others</label>
       </div>
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label className='text-success'>How helpful was our site ?</Form.Label>
       <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="fav_language" value="" required/> &nbsp;
        <label for="html">Good</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="fav_language" value=""/> &nbsp;
        <label for="html">Average</label>
       </div>
        <div className="d-flex align-items-center ">
         <input type="radio"  id="html" name="fav_language" value=""/> &nbsp;
        <label for="html">Bad</label>
       </div>
      </Form.Group>


      <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
              <Form.Label className='text-success'><u>Any Remarks</u></Form.Label>
        <Form.Control as="textarea" rows={5} label="Check me out" />
      </Form.Group>
      <Button className='' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div> <br />
<Footer />
    </div>
  )
}

export default Home
