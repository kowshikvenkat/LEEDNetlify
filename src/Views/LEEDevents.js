import React from 'react'
import axios from 'axios'
import DateToDay from '../Models/DateToDay'
import Sidebar from '../Models/sidebar'
function LEEDevents() {
    const[verifiedLEEDevents,setverifiedLEEDevents] = React.useState([])
    const[renderevents,setrenderevents] = React.useState("returnfutureevents")
 
    const s = new Date()

   React.useEffect(()=>{
        axios.get("http://localhost:5000/getverifiedLEEDevents").then((res)=>{
setverifiedLEEDevents(res.data.docs)
console.log(res.data.docs)
        })
    },[])
  const choosepicker = (msg)=>{
setrenderevents(msg)
  }
  const renderdata=()=>{

  }
    function ReturnAllEvents(){
      return <div style={{boxShadow:'0px 0px 2px 1px grey',width:'80%'}} className='mx-5 bg-light'>
      <h1> LEED EVENTS</h1>
      <h3>All Events</h3>
        {verifiedLEEDevents.map((value,ind)=>{

     return <div>

     <h2>{value['title']}</h2>
        <p style={{margin:50,fontSize:24,}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} autoPlay muted loop></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex w-75 h-50 px-2  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'50%',height:'100%'}} />)}
</div>
        <div className='d-flex flex-column justify-content-center align-items-around'>
           <p>{value['desc']}</p>
         <div className='d-flex  w-100'>
          <h4 className='text-success '>When:</h4>
          <h4 className='w-100'>{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)}-{DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)}</h4>
         </div>
          <div className=' d-flex'>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
        <div className='w-100 justify-content-center d-flex align-items-center bg-info'>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center '>
           <div style={{fontSize:20,color:'blueviolet'}}>Check Out -</div>  <a className='text-danger' style={{fontSize:20,fontWeight:700}} href={val['link']} target='_blank'>&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3>Why to Join This Event</h3>
        <br />
       <div className="d-flex justify-content-around ">
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'rgba(164,219,232,0.2)',border:'1px solid orange',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey'}}>
           <h6 className='text-danger'>{ind+1}</h6><br />
          <h6>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a style={{fontSize:20,fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} className='btn btn-success' target="_blank">Register</a> <br />
                 <br />
                 <br />
                 </div>
                 
                 }
    )}
 
      </div>
    }
       function ReturnTodayEvents(){

      return <div>
      <h3>Today Events</h3>
        {verifiedLEEDevents.map((value,ind)=>{
          if(DateToDay(value['startdate'].slice(0,10))=="Today"){
return  <div>

       <h2>{value['title']}</h2>
        <p style={{margin:50,fontSize:24,}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} autoPlay muted loop></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex w-75 h-50 px-2  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'50%',height:'100%'}} />)}
</div>
        <div className='d-flex flex-column justify-content-center align-items-around'>
           <p>{value['desc']}</p>
         <div className='d-flex  w-100'>
          <h4 className='text-success '>When:</h4>
          <h4 className='w-100'>{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)}-{DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)}</h4>
         </div>
          <div className=' d-flex'>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
        <div className='w-100 justify-content-center d-flex align-items-center bg-info'>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center '>
           <div style={{fontSize:20,color:'blueviolet'}}>Check Out -</div>  <a className='text-danger' style={{fontSize:20,fontWeight:700}} href={val['link']} target='_blank'>&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3>Why to Join This Event</h3>
        <br />
       <div className="d-flex justify-content-around ">
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'rgba(164,219,232,0.2)',border:'1px solid orange',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey'}}>
           <h6 className='text-danger'>{ind+1}</h6><br />
          <h6>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a style={{fontSize:20,fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} className='btn btn-success' target="_blank">Register</a> <br />
                 <br />
                 <br />
                 </div>
          }
    }
    )}
      </div>
    }
    function ReturnFutureEvents(){
let a=0
      return <div>
            <h1> LEED EVENTS</h1>
      <h3>Future Events</h3>
        { verifiedLEEDevents.map((value,ind)=>{
if(value['startdate'].split("-")[0]>s.getFullYear() ||(value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]>s.getMonth()+1) || (value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]==s.getMonth()+1&&value['startdate'].split("-")[2].slice(0,2)>s.getDate())){
  
     return <div>
       <h2>{value['title']}</h2>
        <p style={{margin:50,fontSize:24,}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} autoPlay muted loop></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex w-75 h-50 px-2  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'50%',height:'100%'}} />)}
</div>
        <div className='d-flex flex-column justify-content-center align-items-around'>
           <p>{value['desc']}</p>
         <div className='d-flex  w-100'>
          <h4 className='text-success '>When:</h4>
          <h4 className='w-100'>{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)}-{DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)}</h4>
         </div>
          <div className=' d-flex'>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
        <div className='w-100 justify-content-center d-flex align-items-center bg-info'>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center '>
           <div style={{fontSize:20,color:'blueviolet'}}>Check Out -</div>  <a className='text-danger' style={{fontSize:20,fontWeight:700}} href={val['link']} target='_blank'>&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3>Why to Join This Event</h3>
        <br />
       <div className="d-flex justify-content-around ">
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'rgba(164,219,232,0.2)',border:'1px solid orange',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey'}}>
           <h6 className='text-danger'>{ind+1}</h6><br />
          <h6>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a style={{fontSize:20,fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} className='btn btn-success' target="_blank">Register</a> <br />
                 <br />
                 <br />
        
                 </div>}
                 else{
                  a=a+1;
                  if(ind+1==verifiedLEEDevents.length&& a==ind+1)
                  return <p>NO LEED EVENTS</p>
                 }
                 }
    )
    }
      </div>

    }
        function ReturnCompletedEvents(){
      return <div>
            <h1> LEED EVENTS</h1>
      <h3>Completed Events</h3>
        {verifiedLEEDevents.map((value,ind)=>{
if(value['date'].split("-")[0]<s.getFullYear() ||(value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]<s.getMonth()+1) || (value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]==s.getMonth()+1&&value['date'].split("-")[2].slice(0,2)<s.getDate())){
   
     return <div>

         <h2>{value['title']}</h2>
        <p style={{margin:50,fontSize:24,}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} autoPlay muted loop></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex w-75 h-50 px-2  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'50%',height:'100%'}} />)}
</div>
        <div className='d-flex flex-column justify-content-center align-items-around'>
           <p>{value['desc']}</p>
         <div className='d-flex  w-100'>
          <h4 className='text-success '>When:</h4>
          <h4 className='w-100'>{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)}-{DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)}</h4>
         </div>
          <div className=' d-flex'>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
        <div className='w-100 justify-content-center d-flex align-items-center bg-info'>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center '>
           <div style={{fontSize:20,color:'blueviolet'}}>Check Out -</div>  <a className='text-danger' style={{fontSize:20,fontWeight:700}} href={val['link']} target='_blank'>&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3>Why to Join This Event</h3>
        <br />
       <div className="d-flex justify-content-around ">
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'rgba(164,219,232,0.2)',border:'1px solid orange',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey'}}>
           <h6 className='text-danger'>{ind+1}</h6><br />
          <h6>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a style={{fontSize:20,fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} className='btn btn-success' target="_blank">Register</a> <br />
                 <br />
                 <br />
                 </div>}}
    )}
      </div>
    }
  return (
   <div style={{width:'100vw'}}>

<div className=' d-flex'><Sidebar choosepicker={choosepicker}/>
    {renderevents=="returnallevents"&&<ReturnAllEvents />}
       {renderevents=="returntodayevents"&&<ReturnTodayEvents />}
          {renderevents=="returncompletedevents"&&<ReturnCompletedEvents />}
             {renderevents=="returnfutureevents"&&<ReturnFutureEvents />}</div>

   </div>
  )
}

export default LEEDevents
