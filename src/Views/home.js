import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './home.css'
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
import uparrow from '../Assets/arrow-up.png'
const TEXTS = [<> E N H A N C E <br /><img src={goalpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E X E C U T E <br /><img src={menupic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>P R O D U C E <br /><img src={scholarpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E N T R E P R E N E U R <br /><img src={openbookpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /> </>];
function Home() {
  const [index, setIndex] = React.useState(0);
  const[soicalmediaicon,setsocialmediaicon] = React.useState(0)
 let box = React.createRef("")
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  React.useEffect(()=>{
  if(box.current.getBoundingClientRect().top<0&&box.current.getBoundingClientRect().top>-2700)
  setsocialmediaicon(1)
  else
   setsocialmediaicon(0)
  })
  return (
    <div >
    <div className='d-flex flex-column align-items-center justify-content-evenly' style={{position:'fixed',top:'20%',width:80,height:250,right:'0%',opacity:soicalmediaicon,transition:'0.2s ease',zIndex:1000,backgroundColor:'limegreen',margin:0,borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',boxShadow:'0 0 10px grey',border:'1px solid green'}}>
<img src={linkedinicon} style={{width:50,height:50}} alt="" /> 
<img src={facebookicon} style={{width:50,height:50}} alt="" /> 
<img src={instagramicon} style={{width:50,height:50}} alt="" /> 
<img src={twittericon} style={{width:50,height:50}} alt="" /> 
    </div>
    <br />
<div className='imageHolder_Home'>
<img src={logo2} style={{width:'600px',height:'200px'}} alt="" /><br /><br /><br /><br />
<div className='d-flex justify-content-center'> <h1 className='text-light' style={{fontFamily:'Anton'}}>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1></div>
 <CarouselProvider
        naturalSlideWidth={10}
        isIntrinsicHeight={true}
        totalSlides={4}
        interval={2000}
        isPlaying={true}
        className='corouselprovider'
        infinite={true}
        visibleSlides={2}
      >
        <Slider>
          <Slide className='slide bg-success'  index={0}>
          <div class="card w-100">
  <img class="card-img-top" style={{height:'20vh',objectFit:'cover',objectPosition:'50% 30%'}} src={cardimage1} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>ACHIEVEMENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
          </Slide>
          <Slide className='slide ' index={1}> <div class="card w-100 ">
  <img class="card-img-top" style={{height:'20vh',objectFit:'cover'}} src={cardimage2} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>UPCOMING EVENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div></Slide>
          <Slide className='slide ' index={2}> <div class="card w-100 ">
  <img class="card-img-top" style={{height:'20vh',objectFit:'cover'}} src={cardimage3} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>ACHIEVEMENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div></Slide>
 <Slide className='slide' index={2}> <div class="card w-100">
  <img class="card-img-top" style={{height:'20vh',objectFit:'cover',objectPosition:'50% 30%'}} src={cardimage4} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>OUR GOALS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div></Slide>
        </Slider>
        <br />
        <ButtonBack className='card_button'><img src={backbutton} style={{width:'40px',height:'20px',marginBottom:10,objectFit:'cover',filter:"invert(100%)"}} alt="" /> </ButtonBack> &nbsp;&nbsp;
        <ButtonNext className='card_button'><img src={backbutton} style={{width:'40px',height:'20px',marginBottom:10,objectFit:'cover',filter:"invert(100%)",transform:"rotate(180deg)"}} alt="" /></ButtonNext>
      </CarouselProvider>
  
</div>
<div ref={box} className="w-100 h-100 d-flex flex-column align-items-center" style={{position:'relative',border:'none'}} >
<video src={bgvideo} style={{width:'100%',height:'100%',background:'red',objectFit:'cover',position:'absolute',top:0,right:0,zIndex:-1}} autoplay="true" muted loop />
  <div className='home_sharktank ' style={{height:'450px'}}>
 
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
  <div className='home_sharktank'>


  
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
  <div className='home_sharktank' style={{borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px',marginBottom:40}}>


  
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>Know Us</h2>
<div className='d-flex '>

    <div >
<img src={cardimage3} alt="" /><br />
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat minus quod quam commodi consectetur pariatur id! Magnam possimus deserunt soluta omnis quis, iste non odit animi perspiciatis vel in quae?</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
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
</div>
</div> <br /><br />
<div className='d-flex justify-content-around align-items-center my-5 numberdata_home'>
<h2 className='text-warning' style={{textShadow:'1px 1px 1px gray'}}>Yearly <br /> Achievements <br /><p className='text-muted' style={{fontSize:15,textShadow:'0 0 1px white'}}>(2018-2023)</p> <img src={cardimage3} style={{width:250,height:95,objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey'}} alt="" /></h2>
<div className='d-flex flex-column align-items-center justify-content-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 15 </h1></div>
    <h3 className='text-succes'>Business<br />Meetings</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 150 </h1></div>
    <h3 className='text-succes'>Passed Out<br />Students</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 7</h1></div>
    <h3 className='text-succes'>Patent<br />Submission</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',cursor:'pointer',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 5 </h1></div>
    <h3 className='text-succes'>Annual<br />Awards</h3>
</div>
</div>
<hr />
    <div className='w-100 d-flex flex-column align-items-center img_content_home'>
      <div className='d-flex'>
        <div className='d-flex flex-column align-items-center justify-content-center px-5'><h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>ABCDE</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
     <img src={eventimage2}  style={{width:'60%',height:'200px',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
 <div className='d-flex py-5 my-5'>

     <img src={eventimage3}  style={{width:'60%',height:'200px',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
             <div className='d-flex flex-column align-items-center justify-content-center px-5' ><h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>ABCDE</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
      </div>
       <div className='d-flex  my-5'>
        <div className='d-flex flex-column align-items-center justify-content-center px-5'><h2 style={{fontFamily:'Chivo Mono',color:'limegreen'}}>ABCDE</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
     <img src={eventimage1}  style={{width:'60%',height:'200px',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
    </div>
    <hr />
<div className="w-100 my-5  d-flex justify-content-center">

   <Form className='w-50 border text-center px-5 py-3 bg-light'>
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
<footer className='d-flex flex-column bg-light ' style={{boxShadow:'0 -5px 5px -5px grey',backgroundColor:'',width:'99vw'}}>
<div className='d-flex ' style={{fontFamily:'Mukta'}}>
 <div style={{width:'100%'}}>
   <img src={logo1} style={{width:200,height:200,objectFit:'contain',}} alt="" />
 </div>
  <div className='d-flex  align-items-end w-100 mx-3'>
    <div className='text-dark w-25 h-100   text-start mx-5'>
    <br />
<br />
      <h5 style={{fontWeight:'800'}}>PARTNERS</h5> 
      <br />
      <p className='text-start'>BOSCH</p>
            <p>GLOBAL</p>
                  <p>INDIANA</p>
    </div>
     <div className='text-dark w-25 h-100   text-start mx-5'>
    <br />
<br />
      <h5 style={{fontWeight:'800'}}>KNOW US</h5> 
      <br />
      <p className='text-start'>CONTACT</p>
            <p>MAIL</p>
                  <p>MOBILE</p>
    </div>
        <div className='text-dark w-25 h-100   text-start mx-5'>
    <br />
<br />
      <h5 style={{fontWeight:'800'}}>CONNECT</h5> 
      <br />
      <p className='text-start'>LINKEDIN</p>
            <p>INSTAGRAM</p>
                  <p>FACEBOOK</p>
    </div>
    <img onClick={()=>window.scrollTo(0,0)} src={uparrow} style={{width:20,height:20,cursor:'pointer'}} alt="" />
  </div>
</div>
<hr />
<div className='d-flex justify-content-center align-items-center my-3'>
<img src={goalpic} style={{width:30,height:30}} alt="" />
<img src={menupic} style={{width:30,height:30}} alt="" />
  <div className='text-muted mx-5'>2023 &#169; KCT LEED . All Right Reserved</div>
</div>
</footer>
    </div>
  )
}

export default Home
