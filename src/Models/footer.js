import React from 'react'
import '../Views/home.css'
import logo1 from '../Assets/logo.png'
import goalpic from '../Assets/goal.png'
import menupic from '../Assets/menu.png'
import uparrow from '../Assets/arrow-up.png'
import LazyLoad from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()
  return (
    <LazyLoad height={200} offset={100} once>
<footer className='d-flex flex-column bg-light ' style={{boxShadow:'0 -5px 5px -5px grey',width:'99vw'}}>
<span className='w-100 ' style={{fontFamily:'Mukta'}}>
 <div style={{width:'100%'}}>
   <img src={logo1} style={{width:'40%',height:200,objectFit:'contain',}} alt="" />
 </div>
  <div className='span_div_home w-100 '>
     <div style={{cursor:'pointer'}} onClick={()=>navigate("/contact")}  className='text-dark  text-start mx-5'>
    <br />
<br />
      <h5 style={{fontWeight:'800'}}>KNOW US</h5> 
      <br />
      <p className='text-start'>CONTACT</p>
            <p>MAIL</p>
                  <p>MOBILE</p>
    </div>
        <div style={{cursor:'pointer'}} className='text-dark  text-start '>
    <br />
<br />
      <h5 style={{fontWeight:'800'}}>CONNECT</h5> 
      <br />
      <p className='text-start' onClick={()=> window.open(`https://www.linkedin.com/company/leed-kumaraguru-college/`, '_blank')}>LINKEDIN</p>
            <p onClick={()=> window.open(`https://instagram.com/leed_kumaraguru?igshid=MzRlODBiNWFlZA==`, '_blank')}>INSTAGRAM</p>
                  <p onClick={()=> window.scrollTo(0, 390)}>YOUTUBE</p>
                    
    </div>

     <img onClick={()=>{window.scrollTo(0,0);console.log("kowshik")}} src={uparrow} style={{width:20,height:20,marginLeft:30,cursor:'pointer'}} alt="" />

  </div>
</span>
<hr />
<div className='d-flex justify-content-center align-items-center m-2'>
<img src={goalpic} style={{width:30,height:30}} alt="" />
<img src={menupic} style={{width:30,height:30}} alt="" />
  <div className='text-muted copyrights_footer' >2023 &#169; KCT LEED . All Right Reserved</div>
</div>
</footer>
    </LazyLoad>

  )
}

export default Footer
