import React from 'react'
import logo2 from '../Assets/logo2.png'
import TextTransition, { presets } from 'react-text-transition';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import LazyLoad from 'react-lazyload';
import 'pure-react-carousel/dist/react-carousel.es.css';
import cardimage1 from '../Assets/5363874.jpg'
import cardimage2 from '../Assets/brands-people-ZdqSuxl3Lak-unsplash.jpg'
import cardimage3 from '../Assets/business-concept-with-team-close-up.jpg'
import cardimage4 from '../Assets/cardimage1.jpg'
import backbutton from '../Assets/arrow-left.png'
import goalpic from '../Assets/goal.png'
import menupic from '../Assets/menu.png'
import scholarpic from '../Assets/scholar.png'
import openbookpic from '../Assets/open-book.png'
import './ImageHolderHome.css'
import '../Views/home.css';
const TEXTS = [<> L E A G U E &nbsp;O F <br /><img src={goalpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E N T R E P R E N E U R I A L <br /><img src={menupic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>E M P O W E R M E N T <br /><img src={scholarpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /></>, <>D E V E L O P M E N T <br /><img src={openbookpic} style={{width:'100px',height:'100px',filter:'invert(100%)'}} alt="" /> </>];
function ImageHolderHome() {
      const [index, setIndex] = React.useState(0);
        React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
 <div className='imageHolder_Home'>
<img className='imgHolderBgImage ' src={logo2} style={{}} alt="" />
<div className='d-flex justify-content-center '> <h1 className='text-light transition_h1' style={{fontFamily:'Anton'}}>
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
        visibleSlides={window.innerWidth>700?2:1}
      >
        <Slider>
          <Slide   index={0}>
       <LazyLoad className='slide' height={200} offset={100} once>
           <div class="card w-100">
  <img class="card-img-top" loading='lazy' style={{height:'20vh',objectFit:'cover',objectPosition:'50% 30%'}} src={cardimage1} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>ACHIEVEMENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
       </LazyLoad>
          </Slide>
          <Slide  index={1}>
            <LazyLoad className='slide' height={200} offset={100} once>
               <div class="card w-100 ">
  <img class="card-img-top" loading='lazy'  style={{height:'20vh',objectFit:'cover'}} src={cardimage2} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>UPCOMING EVENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
            </LazyLoad>
          </Slide>
          <Slide  index={2}> 
          <LazyLoad className='slide' height={200} offset={100} once>
            <div class="card w-100 ">
  <img class="card-img-top" loading='lazy'  style={{height:'20vh',objectFit:'cover'}} src={cardimage3} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>ACHIEVEMENTS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
          </LazyLoad>
          </Slide>
 <Slide index={3}> 
 <LazyLoad className='slide' height={200} offset={100} once>
  <div  class="card w-100">
  <img class="card-img-top" loading='lazy'  style={{height:'20vh',objectFit:'cover',objectPosition:'50% 30%'}} src={cardimage4} alt="Card img" />
  <div class="card-body">
    <h5 class="card-title"><b>OUR GOALS</b></h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
 </LazyLoad></Slide>
        </Slider>
        <br />
        <ButtonBack className='btn btn-warning' ><img src={backbutton} style={{width:'40px',height:'20px',objectFit:'cover',filter:"invert(100%)"}} alt="" /> </ButtonBack> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <ButtonNext className='btn btn-warning'><img src={backbutton} style={{width:'40px',height:'20px',objectFit:'cover',filter:"invert(100%)",transform:"rotate(180deg)"}} alt="" /></ButtonNext>
      </CarouselProvider>
  
</div>
  )
}

export default ImageHolderHome
