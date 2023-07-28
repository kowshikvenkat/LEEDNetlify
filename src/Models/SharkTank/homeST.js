import React from 'react'
import Pitches from './pitches'
import '../../Views/ST.css'
import shineimg from '../../Assets/star.png'
import studentimg from '../../Assets/graduation-hat.png'
import sendpic from '../../Assets/send-mail.png'
import trophyimg from '../../Assets/trophy.png'
import goalpic from '../../Assets/achievement.png'
import discussionpic from '../../Assets/discussion.png'
import onepic from '../../Assets/1 (1).png'
import twopic from '../../Assets/2 (1).png'
import threepic from '../../Assets/3(1).png'
import { useSelector } from 'react-redux';
import linkedinimg from '../../Assets/linkedin.png'
import DateToDay from '../../Models/DateToDay';
const cryptojs = require("crypto-js")
function HomeST() {
  const pitches = useSelector((state)=>state.pitch.value)
  const leaderboardpitches = pitches.filter(pitch=>pitch.report.length==3)
  const[showcateg,setshowcateg] = React.useState([])
      const[topTen,settopTen] = React.useState([])
      const[topTenMedical,settopTenMedical]= React.useState([])
          const[topTenAgri,settopTenAgri]= React.useState([])
                   const[topTenAero,settopTenAero]= React.useState([])
                       const[email,setEmail] = React.useState("")
          let s = new Date()
let months=['January','February','March','April','May','June','July','August','September','October','November','December']
   
     React.useEffect(()=>{
if(pitches){

  const topTen = leaderboardpitches
   .sort((a, b) => {
     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten'])+a.upvotes.length, 0);
     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten'])+b.upvotes.length, 0);
     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
   })
   .slice(0, 10);

   setshowcateg(topTen)

}
//   let  pitch  = res.data.docs;
//  pitch =pitch.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
// let medicalPitch = pitch.filter(pitch => pitch.category === "Medical");
//  medicalPitch =medicalPitch.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
// let AgriPitch = pitch.filter(pitch => pitch.category === "Agricultural");
// AgriPitch =AgriPitch.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
// let AeroPitch = pitch.filter(pitch => pitch.category === "Aerospace");
// AeroPitch =AeroPitch.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
//     const topTenPitch = pitch
//   .sort((a, b) => {
//     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);
//     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);

//     if (reportsSumA === reportsSumB) {
//       return b.upvotes.length - a.upvotes.length; // Sort by upvotes length in descending order if reports sum is equal
//     }

//     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
//   })
//   .slice(0, 10);
//       const topTenpitchMedical = medicalPitch.sort((a, b) => {
//     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);
//     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);

//     if (reportsSumA === reportsSumB) {
//       return b.upvotes.length - a.upvotes.length; // Sort by upvotes length in descending order if reports sum is equal
//     }

//     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
//   })
//   .slice(0, 10);
//         const topTenpitchAgri = AgriPitch.sort((a, b) => {
//     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);
//     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);

//     if (reportsSumA === reportsSumB) {
//       return b.upvotes.length - a.upvotes.length; // Sort by upvotes length in descending order if reports sum is equal
//     }

//     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
//   })
//   .slice(0, 10);
//   const topTenAero = AeroPitch
//   .sort((a, b) => {
//     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);
//     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']), 0);

//     if (reportsSumA === reportsSumB) {
//       return b.upvotes.length - a.upvotes.length; // Sort by upvotes length in descending order if reports sum is equal
//     }

//     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
//   })
//   .slice(0, 10);
//     settopTenAgri(topTenpitchAgri)
// settopTenMedical(topTenpitchMedical)
//     settopTen(topTenPitch)
// settopTenAero(topTenAero)
    },[pitches])
          React.useEffect(()=>{
   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined&&sessionStorage.getItem('userid')!==null&&sessionStorage.getItem('userid')!==undefined){
    var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))

}

       },[])
function showcategory(val){
  let dispPitch;
if(val=="All"){
 dispPitch = leaderboardpitches.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
 dispPitch = dispPitch.filter(pitch=>pitch.report.length==3)
}else{
  dispPitch = leaderboardpitches.filter(pitch => pitch.category === val);
  dispPitch = dispPitch.filter(pitch => pitch.createdAt.slice(5,7) == s.getMonth()+1);
   dispPitch = dispPitch.filter(pitch=>pitch.report.length==3)
}
   const topTen = dispPitch
   .sort((a, b) => {
     const reportsSumA = a['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten'])+a.upvotes.length, 0);
     const reportsSumB = b['report'].reduce((sum, value) => sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten'])+b.upvotes.length, 0);
     return reportsSumB - reportsSumA; // Sort by reports sum in descending order
   })
   .slice(0, 10);

   setshowcateg(topTen)
}
  return (
    <div className='w-100 d-flex flex-column align-items-center'>
    <br />
          {window.innerWidth>400?  <div className='bannerST w-100 text-light d-flex'><div style={{flex : window.innerWidth>900? 0.8:1,wordWrap:'break-word',wordBreak:'break-all'}}>
              <span className='text-warning'>250+</span> USERS  <span className='text-warning'>1000+</span> BUSINESS IDEAS <img src={shineimg} style={{width:30,height:30}} alt="" /> <br /><img src={studentimg} style={{width:30,height:30}} alt="" /> STUDENTS  <span style={{wordBreak:'break-all'}}className='text-warning'>BENEFITED</span> PLATFORM <br />
              <div className="d-flex justify-content-center my-3" style={{textShadow:'0 2px 1px black'}}><h3>ENTREPREUNERIAL • EMPOWERMENT • DEVELOPMENT</h3></div>
              <p style={{fontSize:12}}>
              ARE YOU AN ASPIRING  <span className='text-warning'>ENTREPRENEUR</span> ? <br />
              POST YOUR  <span className='text-warning'>STARTUP</span> IDEA AND GET FEEDBACK NOW ! 
              <br /><img src={sendpic} style={{width:30,height:30}} alt=''/>
              </p>
              
            </div></div>
            :
                <div className='bannerST w-100 text-light d-flex'><div style={{flex:1,wordWrap:'break-word',wordBreak:'break-all',fontSize:12}}>
              <span className='text-warning'>250+</span> USERS <br />  <span className='text-warning'>1000+</span> <br /> BUSINESS IDEAS <img src={shineimg} style={{width:30,height:30}} alt="" /> <br /><img src={studentimg} style={{width:30,height:30}} alt="" /> STUDENTS <br /> <span style={{wordBreak:'break-all'}}className='text-warning'>BENEFITED</span> PLATFORM <br />
              <div className="d-flex flex-column align-items-center my-3" ><h3 style={{textShadow:'0 2px 1px black'}}>ENTREPREUNERIAL  </h3> <h3 style={{textShadow:'0 2px 1px black'}}>
                • EMPOWERMENT 
              </h3> <h3 style={{textShadow:'0 2px 1px black'}}>• DEVELOPMENT</h3> </div>
              <p style={{fontSize:12,wordBreak:'break-all',wordWrap:'break-word'}}>
              ARE YOU AN ASPIRING  <span className='text-warning'>ENTREPRENEUR</span> ? <br />
              POST YOUR  <span className='text-warning'>STARTUP</span> IDEA AND GET FEEDBACK NOW ! 
              <br /><img src={sendpic} style={{width:30,height:30}} alt=''/>
              </p>
              
            </div></div>
            }
            <h1 className='mt-5 ' style={{background:'rgba(3, 201, 169, 0.2)',padding:5,borderRadius:5,display:'flex',alignItems:'center',fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>2023 - {months[s.getMonth()].toUpperCase()} INNOVATIVE CONTEST&nbsp; <img src={trophyimg} style={{width:30,height:30}} alt="" /> </h1>
             <h1 className='mb-5 ' style={{background:'rgba(3, 201, 169, 0.2)',padding:5,borderRadius:5,display:'flex',alignItems:'center',fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>LEADERBOARD&nbsp; <img src={goalpic} style={{width:30,height:30}} alt="" /> </h1>
            <div className="w-75 d-flex justify-content-end my-1">
              <label className='bg-light d-flex align-items-center px-3' style={{boxShadow:'0 0 1px grey',borderRadius:3}}  htmlFor=""><b>Choose Category</b></label><select class="form-select w-50" onChange={(e)=>showcategory(e.target.value)} name="" id="">
                 <option value="All">All</option>
              <option value="Retail">Retail and Consumer Goods</option>
    <option value="Finance">Financial Services</option>
      <option value="IT">Technology and Information Technology (IT)</option>
        <option value="Health">Healthcare and Pharmaceuticals</option>
         <option value="Manufacture">Manufacturing and Industrial</option>
          <option value="Energy">Energy and Utilities</option>
           <option value="Tourism&Hospitality">Hospitality and Tourism</option>
            <option value="Consultancy">Consultancies</option>
             <option value="Transportation">Transportation and Logistics</option>
              <option value="RealEstate">Real Estate and Construction</option>
            </select>
            </div>
      <div className={window.innerWidth>500&& 'w-100 d-flex justify-content-center'} style={{overflowX:window.innerWidth<800&&'scroll',width:window.innerWidth<500&&'100vw'}}>
      <table style={{width:window.innerWidth>500?'90%':'600px',boxShadow:'0 0 10px rgba(3, 201, 169, 0.2)',overflowX:window.innerWidth<800&&'scroll'}}>
     
        <tr style={{background:'rgba(38, 194, 129, 1)'}}><th style={{width:'5%',border:'none',padding:'10px'}} className="column-rank">RANK</th>
        <th style={{width:'20%',border:'none'}}>CANDIDATE</th>
           <th style={{width:'35%',border:'none'}}>TITLE</th>
               <th style={{width:'10%',border:'none'}}>POINTS</th>
        <th style={{width:'10%',border:'none'}}>CATEGORY</th>
        </tr>
              {showcateg.map((val,ind)=>
 <tr style={{background:ind%2==0?'rgba(200,200,200,0.1)':'white',color:ind==0?'#DAA520':ind==1?'grey':ind==2?'#00008B':'black',fontWeight:(ind==0||ind==1||ind==2)&&600}}>
            <td style={{width:'5%',border:'none'}}>{ind==0? <img src={onepic} style={{width:20,height:20}} alt="" />:ind==1?<img src={twopic} style={{width:20,height:20}} alt="" />:ind==2?<img src={threepic} style={{width:20,height:20}} alt="" /> :ind+1}  </td>
            <td style={{width:'20%',border:'none'}}>{val['name']}&nbsp;{(val['linkedin'] &&val['linkedin'].length>0) && <a target='_blank' style={{textDecoration:'none'}} href={val['linkedin']}> <img src={linkedinimg} style={{width:20,height:20}} alt="" /> </a>} {(email=="kowshik.20ei@kct.ac.in"||email=="jeevankumar.20ei@kct.ac.in")&&<><br /><a target="_blank" rel="noreferrer" href={`mailto:${val['email']}`}>Email</a>
</>} </td>
            <td style={{width:'35%',border:'none'}}>  {val['title']}<br /> <p className='text-secondary ' style={{fontSize:10,textShadow:'none'}}>{DateToDay(val['createdAt'].slice(0,10))}</p></td>
            <td className='text-success' style={{width:'10%',border:'none',textShadow:'none'}}> {val['report'].reduce((sum, value) => {
    return sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']);
  }, 0)+val['upvotes'].length}</td>
            <td style={{width:'10%',border:'none',textShadow:'none'}} className='text-success '>{val['category']}</td>
            
        </tr>
            ) }
            
          {/* {chooseCategory=="Agricultural"&& topTenAgri.map((val,ind)=>
  <tr style={{background:ind%2==0?'rgba(200,200,200,0.1)':'white',color:ind==0?'#DAA520':ind==1?'grey':ind==2?'#00008B':'black',fontWeight:(ind==0||ind==1||ind==2)&&600}}>
            <td style={{width:'5%',border:'none'}}>{ind==0? <img src={onepic} style={{width:20,height:20}} alt="" />:ind==1?<img src={twopic} style={{width:20,height:20}} alt="" />:ind==2?<img src={threepic} style={{width:20,height:20}} alt="" /> :ind+1}  </td>
            <td style={{width:'20%',border:'none'}}>{val['name']}  </td>
            <td style={{width:'35%',border:'none'}}>  {val['title']}<br /> <p className='text-secondary ' style={{fontSize:10,textShadow:'none'}}>{DateToDay(val['createdAt'].slice(0,10))}</p></td>
            <td className='text-success' style={{width:'10%',border:'none',textShadow:'none'}}> {val['report'].reduce((sum, value) => {
    return sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']);
  }, 0)+val['upvotes'].length}</td>
            <td style={{width:'10%',border:'none',textShadow:'none'}} className='text-success '>{val['category']}</td>
            
        </tr>
            )} 
        
    {chooseCategory=="Medical"&& topTenMedical.map((val,ind)=>
  <tr style={{background:ind%2==0?'rgba(200,200,200,0.1)':'white',color:ind==0?'#DAA520':ind==1?'grey':ind==2?'#00008B':'black',fontWeight:(ind==0||ind==1||ind==2)&&600}}>
            <td style={{width:'5%',border:'none'}}>{ind==0? <img src={onepic} style={{width:20,height:20}} alt="" />:ind==1?<img src={twopic} style={{width:20,height:20}} alt="" />:ind==2?<img src={threepic} style={{width:20,height:20}} alt="" /> :ind+1}  </td>
            <td style={{width:'20%',border:'none'}}>{val['name']}  </td>
            <td style={{width:'35%',border:'none'}}>  {val['title']}<br /> <p className='text-secondary ' style={{fontSize:10,textShadow:'none'}}>{DateToDay(val['createdAt'].slice(0,10))}</p></td>
            <td className='text-success' style={{width:'10%',border:'none',textShadow:'none'}}> {val['report'].reduce((sum, value) => {
    return sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']);
  }, 0)+val['upvotes'].length}</td>
            <td style={{width:'10%',border:'none',textShadow:'none'}} className='text-success '>{val['category']}</td>
            
        </tr>
            )} 
              {chooseCategory=="Aerospace"&& topTenAero.map((val,ind)=>
  <tr style={{background:ind%2==0?'rgba(200,200,200,0.1)':'white',color:ind==0?'#DAA520':ind==1?'grey':ind==2?'#00008B':'black',fontWeight:(ind==0||ind==1||ind==2)&&600}}>
            <td style={{width:'5%',border:'none'}}>{ind==0? <img src={onepic} style={{width:20,height:20}} alt="" />:ind==1?<img src={twopic} style={{width:20,height:20}} alt="" />:ind==2?<img src={threepic} style={{width:20,height:20}} alt="" /> :ind+1}  </td>
            <td style={{width:'20%',border:'none'}}>{val['name']}  </td>
            <td style={{width:'35%',border:'none'}}>  {val['title']}<br /> <p className='text-secondary ' style={{fontSize:10,textShadow:'none'}}>{DateToDay(val['createdAt'].slice(0,10))}</p></td>
            <td className='text-success' style={{width:'10%',border:'none',textShadow:'none'}}> {val['report'].reduce((sum, value) => {
    return sum + Number(value['one']) + Number(value['two']) + Number(value['three'])+Number(value['four'])+Number(value['five'])+Number(value['six'])+Number(value['seven'])+Number(value['eight'])+Number(value['nine'])+Number(value['ten']);
  }, 0)+val['upvotes'].length}</td>
            <td style={{width:'10%',border:'none',textShadow:'none'}} className='text-success '>{val['category']}</td>
            
        </tr>
            )}  */}
 
      </table>
      </div>
      <br /><br />
      <hr style={{width:'100%'}}/>
      <br />
<h2 style={{background:'rgba(3, 201, 169, 0.2)',padding:5,borderRadius:5,fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>FLAGSHIP <img src={discussionpic} style={{width:80,height:80}} alt="" /> PITCHES </h2> 
         <Pitches />

    </div>
  )
}

export default HomeST
