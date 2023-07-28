import React from 'react'
import logo2 from '../Assets/logo2.png'
import TextTransition, { presets } from 'react-text-transition';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import 'pure-react-carousel/dist/react-carousel.es.css';
import backbutton from '../Assets/arrow-left.png'
import goalpic from '../Assets/goal.png'
import menupic from '../Assets/menu.png'
import scholarpic from '../Assets/scholar.png'
import openbookpic from '../Assets/open-book.png'
import YouTube from 'react-youtube';
import './ImageHolderHome.css'
import '../Views/home.css';
const TEXTS = [<> L E A G U E &nbsp;O F <br /><img src={goalpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E N T R E P R E N E U R I A L <br /><img src={menupic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E M P O W E R M E N T <br /><img src={scholarpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>D E V E L O P M E N T <br /><img src={openbookpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /> </>];
function ImageHolderHome() {
      const [index, setIndex] = React.useState(0);
      const[YTvideos,setYTvideos] = React.useState([])
        React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
    
  
  }, []);
  React.useEffect(()=>{
       axios({
    method: "GET",
    url: "http://localhost:5000/getYTReferral",
  }).then((res)=>{
    
setYTvideos(res.data.docs)
  })
  },[])
  return (
 <div className='imageHolder_Home'>
<img className='imgHolderBgImage ' src={logo2} style={{}} alt="" />
<div className='d-flex justify-content-center '> <h1 className='text-light transition_h1' style={{fontFamily:'roboto'}}>
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
        visibleSlides={window.innerWidth>850?2:1}
      >
        <Slider>
        {YTvideos.map((val,ind)=>(
 <Slide index={ind}> 
 <LazyLoad className='slide' height={200} offset={100} once>
   <YouTube
          videoId={val.YTLink.substring(val.YTLink.lastIndexOf('/') + 1)}
opts={{
  width:window.innerWidth>450?'400':'250',
  height:'300'
}}
        />
 </LazyLoad></Slide>
        ))}
          
        </Slider>
        <br />
        <ButtonBack className='btn btn-warning' ><img src={backbutton} style={{width:'40px',height:'20px',objectFit:'cover',filter:"invert(100%)"}} alt="" /> </ButtonBack> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <ButtonNext className='btn btn-warning'><img src={backbutton} style={{width:'40px',height:'20px',objectFit:'cover',filter:"invert(100%)",transform:"rotate(180deg)"}} alt="" /></ButtonNext>
      </CarouselProvider>
  
</div>
  )
}

export default ImageHolderHome
