import React from 'react'
import './aboutus.css'
import './home.css'
import LEEDimglogo from '../Assets/Leed-Logo-01 (2).png'
import image1 from '../Assets/cardimage1.jpg'
import calendarpic from '../Assets/achievement.png'
import calendarpic1 from '../Assets/calendar.png'
import celebrity from '../Assets/cheran.jpeg'
import cardimage3 from '../Assets/business-concept-with-team-close-up.jpg'
import Footer from '../Models/footer';
function AboutUs() {
  return (
    <div style={{width:'100vw'}}>

<div className='head_aboutus'>
          <h2 >LEAGUE OF ENTREPRENEURIAL EMPOWERMENT AND DEVELOPMENT</h2>
          <img className='mb-2' src={LEEDimglogo}  alt="" />
          <h4 className='text-warning'>SINCE 2010</h4>
</div>
<div className='bg-light w-100 whoarewe'>
    <h2 style={{textUnderlineOffset:'5px',color:'rgba(18, 104, 129, 1)'}}><u>WHO ARE WE </u></h2>
    <ul className='p-5'>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>

    </ul>
</div>
<div className="w-100 justify-content-center d-flex py-5 " style={{background:'white'}}>
    <div className='timeline bg-light w-75'>
    <b style={{paddingLeft:'1%',marginTop:'1%',color:'rgba(18, 104, 129, 1)'}}>LEED TIMELINE <img src={calendarpic} style={{width:50,height:50}} alt="" /></b> <br /> 
    <p className='text-secondary' style={{fontSize:'large',paddingLeft:'1%',}}>2015 - Today</p> <br />
  
<div>
    <b>2015 <img src={calendarpic1} style={{width:20,height:20}} alt="" /></b>
    <b>LEED INAUGRATION </b>
    <img src={image1} style={{width:200,height:200,maxWidth:'100%',objectFit:'contain'}} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tenetur, aperiam nisi sequi voluptates enim! In voluptatum quaerat, dolor alias aut sequi quia, similique quae placeat error laborum officia.</p>
</div>
<hr />
<div>
    <b>2015</b>
    <b>LEED INAUGRATION </b>
    <img src={image1} style={{width:200,height:200,maxWidth:'100%',objectFit:'contain'}} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tenetur, aperiam nisi sequi voluptates enim! In voluptatum quaerat, dolor alias aut sequi quia, similique quae placeat error laborum officia.</p>
</div>
<hr />
<div>
    <b>2015</b>
    <b>LEED INAUGRATION </b>
    <img src={image1} style={{width:200,height:200,maxWidth:'100%',objectFit:'contain'}} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam tenetur, aperiam nisi sequi voluptates enim! In voluptatum quaerat, dolor alias aut sequi quia, similique quae placeat error laborum officia.</p>
</div>
</div>
</div>
<div className='bg-light w-100 whoarewe'>
    <h2 style={{textUnderlineOffset:'5px',color:'rgba(18, 104, 129, 1)'}}><u>WHAT WE DO </u></h2>
    <ul className='p-5'>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sed, quos laboriosam tempora obcaecati necessitatibus facere, repellendus culpa sunt minus tenetur vero quasi neque similique eum nulla totam et ullam.</li>

    </ul>
</div>
<div className='w-100 p-5 celebrity  text-light'>
<img src={celebrity} style={{width:300,height:200,maxWidth:"100%",objectFit:'contain'}} alt="" />
<b>- HUSSAIN AHMED -</b>
<p style={{fontSize:'large'}}>CEO OF CHERAN ACADEMY</p>
<q>LEED is a good platform for budding entrepreneurs</q>
<i style={{fontSize:'large'}}>- YUGAM 2023</i>
</div>
  <div className=' numberdata_home w-100 py-5 bg-light'>

<h2 className='w-50 ' style={{fontFamily: 'roboto',color:'rgba(18, 104, 129, 1)'}}>LEED <br /> ACHIEVEMENTS <br /><p className='text-muted' style={{fontSize:15,textShadow:'0 0 1px white'}}>(2018-2023)</p> <img src={cardimage3} style={{width:'80%',height:'50%',objectFit:'cover',margin:0,boxShadow:'3px 3px 5px grey'}} alt="" /></h2>
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

<Footer />
    </div>
  )
}

export default AboutUs
