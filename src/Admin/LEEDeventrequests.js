import React from 'react'
import axios from 'axios'
import DateToDay from '../Models/DateToDay'
import registericon from '../Assets/share.png'
import arrowupimg from '../Assets/arrow-up.png'
import micpic from '../Assets/mic.png'
function LEEDeventrequests({LEEDevents}) {
  return (
    <div className=''>
         {LEEDevents.length>0?LEEDevents.map((value,index)=>
{


  return     <div className='w-100 h-100 border border-dark' style={{fontFamily:'roboto',overflowY:'hidden'}}>

      <h2 style={{fontSize:window.innerWidth<400&&15}}>{value['title']}</h2>
        <p style={{margin:window.innerWidth<400?'0':20,fontSize:window.innerWidth<400?14:24}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} controls></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex flex-column w-75  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'70%',height:'100%',maxHeight:'400px'}} />)}
</div>
        <div style={{paddingRight:'2%',paddingLeft:'2%'}} className='d-flex flex-column justify-content-center align-items-around'>
           <p>{value['desc']}</p>
         <div className='d-flex' style={{flexWrap:'wrap'}}>
          <h4 className='text-success '>When : </h4>
          <h4 className=''>&nbsp;{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)}-{DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)}(24hrs format)</h4>
         </div>
          <div className=' d-flex' style={{flexWrap:'wrap'}}>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
        <div className='w-100 justify-content-center d-flex align-items-center  p-3' style={{boxShadow:'0 0 5px rgba(3, 201, 169, 0.5)',backgroundColor:'rgba(164,219,232,0.2)'}}>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center ' style={{flexWrap:'wrap'}}>
           <div style={{fontSize:20,display:'flex ',alignItems:'center',flexWrap:'wrap'}}> <img src={micpic} style={{width:30,height:30}} alt="" /> Check Out </div>  <a style={{fontSize:20,fontWeight:700,textTransform:'uppercase',textUnderlineOffset:'3px'}} href={val['link']} target='_blank' rel="noreferrer"><img src={arrowupimg} style={{width:20,height:20,transform:'rotate(90deg)',marginLeft:15}} alt="" />&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3 style={{textDecoration:'underline'}}>Why to Join This Event</h3>
        <br />
       <div className="d-flex justify-content-around " style={{flexWrap:'wrap'}}>
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'white',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey',width:window.innerWidth>400?'200px':'100px'}}>
           <h2 className='text-danger'>{ind+1}</h2><br />
          <h6 style={{wordWrap: 'break-word',}}>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} style={{width:'70%'}} height="400">          
          </embed> <br /><a style={{fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a style={{fontSize:'120%',boxShadow:'0 0 10px grey'}} href={value['link']} className='btn btn-success' target="_blank">REGISTER <img src={registericon} style={{width:20,height:20,filter:'brightness(0) invert(1)'}} alt="" /></a> <br />
                 <br />
      <button className='btn btn-danger' onClick={()=>{
         
         let response = window.confirm( value['title']+", event taking place on "+ value['startdate'].slice(0,10)+" Time : "+  value['startdate'].slice(11)+"\n"+"Confirm again to reject event !")
         if(response){
 axios.post("http://localhost:5000/rejectKCTLEEDevents",{
            id:value['_id']
          })
          window.location.reload()
         }
         }}>REJECT</button>
         <button className='btn btn-success' onClick={()=>{
         
         let response = window.confirm( value['title']+", event taking place on "+ value['startdate'].slice(0,10)+" Time : "+  value['startdate'].slice(11)+"\n"+"Confirm again to accept event !")
         if(response){
 axios.post("http://localhost:5000/acceptKCTLEEDevents",{
            id:value['_id']
          })
                 window.location.reload()
         }
         }}>ACCEPT</button>
  
    </div>
}
    ):<h4><i>No LEED Event Requests</i></h4>}
    </div>
  )
}

export default LEEDeventrequests
  