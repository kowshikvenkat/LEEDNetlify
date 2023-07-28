import React from 'react'
import axios from 'axios'
import uparrow from '../../Assets/up-arrow.png'
import uparrow1 from '../../Assets/up-arrow (1).png'
import saveimage from '../../Assets/share.png'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import linkedinimg from '../../Assets/linkedin.png'
import commentpic from '../../Assets/comment.png'
import globepic from '../../Assets/globe.png'
import backimage from '../../Assets/sign-out.png'
import DateToDay from '../DateToDay';
function Pitchyourtemplate({val,userid}) {
    const[upvotes,setupvotes] = React.useState(val['upvotes'])
  const[disablelike,setdisablelike] = React.useState(false)
   const[opencomment,setopencomment] = React.useState("")
    function Likedfunction(pitchid) {
           
             setdisablelike(true)

if(!upvotes.includes(userid))
setupvotes((prev)=>prev.concat(userid));
else
setupvotes((prev)=>prev.filter(item=>item!=userid))
axios.post("https://leednetlifybackend.onrender.com/likepitchST",{
    id:userid,
    pitchid:pitchid
})
setdisablelike(false)
}
  return (
<div className='pitch bg-light my-3 p-1' style={{boxShadow:'0 0 10px grey',borderRadius:20,width:'95%'}}>
           <div style={{background:'rgba(200,200,200,0.5)',fontWeight:500,borderTopRightRadius:20,borderTopLeftRadius:20,letterSpacing:'2px'}} className={window.innerWidth>500?"d-flex justify-content-between p-4":"d-flex p-3 flex-column align-items-center"}>
           <div className={window.innerWidth>500?"d-flex w-25 justify-content-between":"d-flex  justify-content-between"}>  <div>{val['name']}</div>     {(val['linkedin'] &&val['linkedin'].length>0) && <a target='_blank' href={val['linkedin']}> <img src={linkedinimg} style={{width:20,height:20}} alt="" /> </a>}</div>
           <div className={window.innerWidth>500?"d-flex w-50 justify-content-between":"d-flex w-100 justify-content-between"}>
            <div>{val['category']}</div>
            <div>{DateToDay(val['createdAt'].slice(0,10))}</div>
           </div>
         </div> <br />
            <h5><b>{val['title']}</b></h5>
            <h6 className='p-2'>{val['content']}</h6>
                   {val["users"].length>0 && <div className={window.innerWidth>500?'w-100 p-5':'w-100 text-center'} style={{textAlign:'start'}}>
<h5 className='text-secondary'>Target Users</h5>
<p>{val['users']}</p>
   </div>}
     {val["impact"].length>0 && <div className={window.innerWidth>500?'w-100 p-5':'w-100 text-center'}style={{textAlign:'start'}}>
<h5 className='text-secondary'>Solution Impact</h5>
<p>{val['impact']}</p>
   </div>}
     {val["barriers"].length>0 && <div className={window.innerWidth>500?'w-100 p-5':'w-100 text-center'}style={{textAlign:'start'}}>
<h5 className='text-secondary'>Adoption Barriers</h5>
<p>{val['barriers']}</p>
   </div>}
  <div className="w-100 d-flex justify-content-around" style={{flexWrap:'wrap'}}>
     {val['image'].length>0 && val['image'].map((value,index)=>
   <div className='my-5' style={{width:'40%'}}>
    <img src={value['secure_url']} style={{width:'100%',height:400,objectFit:'contain'}} alt="" />
   </div> 
   )}
  </div>
   {val['video'].length>0 && val['video'].map((value,index)=>
  <>
     <video src={value['secure_url']} style={{width:'90%',border:'1px solid black',maxHeight:'70vh'}} controls /> <br />
  </> 
   )} <br />
             {val['gdrive'].length>0&& val['gdrive'].map((value,ind)=>{
         
          return         <div className='w-100 d-flex flex-column align-items-center border border-dark'>
            <embed src={value.replace("/view?usp=sharing","/preview")} style={{width:'75%'}} height="400">          
          </embed> <br /> <a style={{fontWeight:'600'}} href={val} target="_blank">DOWNLOAD DOCUMENT</a> <br />
          </div>
         })}
                  <br />
              
<hr />
<br />

<div className="d-flex w-100 justify-content-evenly align-items-center" style={{flexWrap:'wrap'}}>
  <div className="d-flex align-items-center m-2">
    <button className='btn btn-light shadow-sm' onClick={()=>Likedfunction(val["_id"])} disabled={disablelike}> {/*Used button to use disable function when clicked once  and enabled when function ends*/}
            {upvotes.includes(userid)?<> <div className="d-flex justify-content-center"><img src={uparrow1} style={{width:20,height:20}} alt=""  />       <div style={{fontWeight:700}}> {upvotes.length}</div> </div>  <div className='text-secondary'>Upvoted!</div> </>: <><div className="d-flex justify-content-center"><img src={uparrow} style={{width:20,height:20}} alt=""  />       <div style={{fontWeight:700}}> {upvotes.length}</div> </div>  <div className='text-secondary'>Upvote</div> </>}
    </button>
      
         </div>
   
     {(val['comment']['expert1']!=""||val['comment']['expert2']!="")?<div className='d-flex flex-column m-2'><b className='text-success' onClick={()=>{
      if(opencomment!=val["_id"]) 
      setopencomment(val['_id']);
      else
     setopencomment("")
     }}>  Comments•</b> </div>:<><p><img src={commentpic} style={{width:20,height:20}} alt="" />No Comments</p></>
     }


</div>
<br />
 {opencomment==val['_id']&&<span>{val['comment']['expert1']&& <div className='border border-success '>
            <h6 className='bg-secondary text-light p-2'>Expert1</h6>
          <p >{val['comment']['expert1']}</p>
        </div>}
              {val['comment']['expert2']&& <div className='border border-success'>
            <h6 className='bg-secondary text-light p-2'>Expert2</h6>
          <p>{val['comment']['expert2']}</p>
        </div>} {val['comment']['expert3']&& <div className='border border-success'>
            <h6 className='bg-secondary text-light p-2'>Expert3</h6>
          <p>{val['comment']['expert3']}</p>
        </div>}</span>}

        
        
               <br />
               <hr />
               {val['report'].length>0&&<h3 style={{fontWeight:600}}>REPORTS</h3>}
                    <div className='d-flex justify-content-around' style={{flexWrap:'wrap'}}>
{val['report'].map((value,index)=>
<div style={{flex:0.3,border:'1px solid black',margin:5,borderRadius:5,background:'#fcfbf8',minWidth:'150px'}}>
<b className='text-danger'>Expert {index+1}</b>
<hr />
 <p >Problem : {value['one']}</p>
            <p>Inspiration : {value['two']}</p>
            <p>Use Case : {value['three']}</p>
               <p>Solution : {value['four']}</p>
                  <p>Uniqueness : {value['five']}</p>
                     <p>Barriers : {value['six']}</p>
                        <p>Research : {value['seven']}</p>
                           <p>Impact : {value['eight']}</p>
                              <p>Clarity : {value['nine']}</p>
                                 <p>NextStep : {value['ten']}</p>
</div>
)}

<div className='w-100 bg-secondary text-light' style={{borderBottomLeftRadius:20,borderBottomRightRadius:20}}><p> 
  Your <b>pitch</b> will be on <b className='text-warning'>Leaderboard</b> ,<br /> once it obtains three reports
</p></div>
             </div>
        </div>
  )
}

export default Pitchyourtemplate;
