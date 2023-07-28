import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './home.css'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import shareimage from '../Assets/share.png'
import LazyLoad from 'react-lazyload';
import cardimage1 from '../Assets/5363874.jpg'
import cardimage3 from '../Assets/business-concept-with-team-close-up.jpg'
import cardimage4 from '../Assets/cardimage1.jpg'
import eventimage1 from '../Assets/eventimagehome.jpg'
import eventimage2 from '../Assets/eventimagehome3.jpg'
import eventimage3 from '../Assets/eventimagehome2.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import linkedinicon from '../Assets/linkedin.png'
import instagramicon from '../Assets/instagram.png'
import twittericon from '../Assets/youtube.png'
import facebookicon from '../Assets/facebook.png'
import ImageHolderHome from '../Models/imageHolderHome';
import Footer from '../Models/footer';
function Home() {
   const pitches = useSelector((state)=>state.pitch.value)
   let samplepitch1 = [...pitches]
   samplepitch1 = samplepitch1.sort((a, b) => moment(a.createdAt).diff(moment(b.createdAt))).reverse()
  const filteredPitches = samplepitch1.filter((pitch) => pitch.image.length > 0).slice(0, 3); 
      const verifiedLEEDevents =  useSelector((state)=>state.LEEDevents.value)
      let sampleLEEDevents = [...verifiedLEEDevents]
      sampleLEEDevents = sampleLEEDevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,2);
  const navigate = useNavigate()
  const[soicalmediaicon,setsocialmediaicon] = React.useState(0)
  const [Email,setEmail] = React.useState("")
 let box = React.createRef("")
 React.useEffect(()=>{
let timer = setInterval(()=>{

  if(window.scrollY>800&&window.scrollY<4000){
  setsocialmediaicon(1)}
  else{
   setsocialmediaicon(0)
  }

},1000)
  return () => {
    console.log("cleanup func executed")
      clearInterval(timer);
    };
 },[])
  React.useEffect(()=>{
  

   
  })
  React.useEffect(()=>{
if(sessionStorage.getItem('userid')!=null||sessionStorage.getItem('userid')!=undefined)
setEmail(sessionStorage.getItem('email'))
  },[])

  return (
    <div style={{background:'rgba(3, 201, 169, 0.09)'}}>
    <div className='d-flex flex-column align-items-center justify-content-center' style={{position:'fixed',bottom:'10%',width:80,height:200,right:'0%',opacity:soicalmediaicon,transition:'0.2s ease',zIndex:1000,backgroundColor:'white',margin:0,borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',boxShadow:'0 0 10px grey',border:'01px solid grey'}}>
<img src={linkedinicon} onClick={()=> window.open(`https://www.linkedin.com/company/leed-kumaraguru-college/`, '_blank')} style={{width:30,height:30,cursor:'pointer'}} alt="" /> 
<div className='w-100 d-flex justify-content-center'>
  <hr className='w-75'/>
</div>

<img src={instagramicon} onClick={()=> window.open(`https://instagram.com/leed_kumaraguru?igshid=MzRlODBiNWFlZA==`, '_blank')}  style={{width:30,height:30,cursor:'pointer'}} alt="" /> 
<div className='w-100 d-flex justify-content-center'>
  <hr className='w-75'/>
</div>
<img src={twittericon} onClick={()=> window.scrollTo(0, 390)} style={{width:30,height:30,cursor:'pointer'}} alt="" /> 
    </div>
    <br />
<ImageHolderHome />
<div ref={box} className="w-100 h-100 d-flex flex-column align-items-center" style={{position:'relative',border:'none'}} >

<div className='home_sharktank' >

 

    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>FLAGSHIP</h2>
<div className='d-flex  '>
{filteredPitches.map((val,ind)=>
  <div onClick={() => navigate((Email === "kowshik.20ei@kct.ac.in" || Email === "jeevankumar.20ei@kct.ac.in" || Email === "harihaaran.20ei@kct.ac.in") ? "/sharktankexpert" : (Email.length > 0 ? "/sharktank" : "/login"))}>
<img src={val.image[0]['secure_url']} alt="" /><br />
<p> <b style={{fontSize:15}}>{val.title}</b> <br />  { val.content}

</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> J O I N </button>
  </div>
)}

</div>
</div>
  <div className='home_sharktank'>


  
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>EVENTS</h2>
<div className='d-flex '>
<div onClick={()=>navigate("/events")}>
<img src={cardimage1} alt="" /><br />
<p className='text-primary'><b style={{fontSize:15}} className='text-primary'>REGISTER YOUR EVENT TO LEED</b> <br />
Enroll to promote events for free | Get a chance to publish your events globally </p>

<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> REGISTER </button>
  </div>
   
{sampleLEEDevents.map((val,ind)=>
  <div onClick={()=>navigate("/events?id=leedevents")}>
<img src={val.pic[0]['secure_url']} alt="" /><br />
<p> <b style={{fontSize:15}}>{val.title}</b> <br />  { val.desc}

</p>
<button className='btn btn-warning text-light'> <img src={shareimage} style={{width:20,height:15,objectFit:'contain'}} alt="" /> V I S I T </button>
  </div>
)}
    {/* <div >
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
  </div> */}
</div>
</div>
  <div className='home_sharktank'  style={{borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px',marginBottom:40}} onClick={()=>navigate("/aboutus")}>


  
    <h2 style={{ zIndex:2,  fontFamily: 'roboto'}}>KNOW US</h2>
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
</div> 
<div style={{background:'white',paddingTop:'5%',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',boxShadow:'0 0 5px grey'}}>
  <div className=' numberdata_home w-100'>
<h2 className='text-warning w-50 ' style={{textShadow:'1px 1px 0px gray',fontFamily: 'roboto'}}>YEARLY <br /> ACHIEVEMENTS <br /><p className='text-muted' style={{fontSize:15,textShadow:'0 0 1px white'}}>(2018-2023)</p> <img src={cardimage3} style={{width:'80%',height:'50%',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey'}} alt="" /></h2>
<span className="d-flex justify-content-around  w-100 " style={{flexWrap:'wrap',padding:'5%'}}>
  <div  className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 15 </h1></div>
    <h3 className='text-succes'>Business<br />Meetings</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>

    <div style={{borderRadius:'50%',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 150 </h1></div>

    <h3 className='text-succes'>Passed Out<br />Students</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start text-center' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 7</h1></div>
    <h3 className='text-succes'>Patent<br />Submission</h3>
</div>
<div className='d-flex flex-column align-items-center justify-content-start' style={{fontFamily:'monospace'}}>
  <div style={{borderRadius:'50%',boxShadow:'3px 3px 3px grey',width:'100px',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}><h1 > 5 </h1></div>
    <h3 className='text-succes'>Annual<br />Awards</h3>
</div>
</span>
</div>
<hr />
    <div className='w-100 d-flex flex-column align-items-center img_content_home'>
      <div className='w-100'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
        <h2 style={{fontFamily:'roboto',color:'limegreen'}}>NEW GOALS</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
     <img src={eventimage2}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
 <div className=' py-5 my-5'>

     <img src={eventimage3}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
             <div className='d-flex flex-column align-items-center justify-content-center ' ><h2 style={{fontFamily:'roboto',color:'limegreen'}}>ENTER THE WORLD OF ASPIRANTS</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i></div>
      </div>
       <div className='  my-5'>
        <div className='d-flex flex-column align-items-center justify-content-center '><h2 style={{fontFamily:'roboto',color:'limegreen'}}>ENTREPRENEUR</h2>
        <i className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iure incidunt illum a. Earum in accusamus itaque ipsam enim dolorum quae quam dignissimos? Dolor alias natus facilis odio omnis at!</i>
        </div>
     <img src={eventimage1}  style={{width:'60%',height:'200px',margin:0,boxShadow:'3px 3px 5px grey',borderRadius:'10px'}} alt="" />
      </div>
    </div>
    <hr />
<div className="w-100 my-5  d-flex justify-content-center form_div_home">

  
</div> <br />
<Footer />
</div>
    </div>
  )
}

export default Home
