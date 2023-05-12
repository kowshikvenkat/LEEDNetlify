import React from 'react'
import axios from 'axios'
import DateToDay from '../Models/DateToDay'
import {SidebarEvent} from '../Models/sidebar'
import registericon from '../Assets/share.png'
import LazyLoad from 'react-lazyload'
import Modal from 'react-bootstrap/Modal'
import helpdeskimage from '../Assets/user.png'
function LEEDevents() {
    const[verifiedLEEDevents,setverifiedLEEDevents] = React.useState([])
    const[renderevents,setrenderevents] = React.useState("returnfutureevents")
    const[showHelp,setShowHelp] = React.useState(false)
 const [numPhotos, setNumPhotos] = React.useState(1);
 const[numcomevents,setNumcomevents] = React.useState(1);
 const[numfutevents,setNumfutevents] = React.useState(1)
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
  const helpdeskfunc=(msg)=>{
setShowHelp(msg)
  }
  const Renderdata=({value})=>{
return <div style={{display:'block'}}  className='w-100'>

         <h2   style={{fontSize:window.innerWidth<400&&15}}>{value['title']}</h2>
        <p style={{margin:window.innerWidth<400?'0':20,fontSize:window.innerWidth<400?14:24}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
       <LazyLoad height={200} offset={100} once>
         <video  src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} controls></video>
       </LazyLoad>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className={window.innerWidth>600?"d-flex w-75  my-5":"d-flex flex-column align-items-center w-100 my-5"} style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img loading='lazy' src={val['secure_url']} alt="" style={{objectFit:'contain',width:'70%',height:'100%'}} />)}
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
        <div className='w-100 justify-content-center d-flex align-items-center bg-info' style={{boxShadow:'1px 1px 6px grey'}}>
           {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center '>
           <div style={{fontSize:window.innerWidth>400?20:15,fontWeight:700,color:'white',fontFamily:'initial'}}>Check Out -</div>  <a style={{fontSize:20,fontWeight:700,fontFamily:'initial',textTransform:'uppercase',color:'red'}} href={val['link']} target='_blank'>&nbsp;{val['name']}</a>
        </div>
         )}
        </div>
        <br />
        <br />
        <h3 style={{textDecoration:'underline'}}>Why to Join This Event</h3>
        <br />
       <div  className="d-flex justify-content-around " style={{flexWrap:'wrap'}}>
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column' style={{background:'white',borderRadius:'10px',padding:10,boxShadow:'0 0 5px grey',width:window.innerWidth>400?'200px':'100px'}}>
           <h2 className='text-danger'>{ind+1}</h2><br />
          <h6  style={{wordWrap: 'break-word',}}>{val}</h6>
         </div>
         )
         }
           </div>
           <br />
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <LazyLoad height={200} offset={100} once>
            <div >
            <embed src={val.replace("/view?usp=sharing","/preview")} style={{width:'70%'}} height="400">          
          </embed> <br /><a style={{fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
          </LazyLoad>
         })}                  
          <br/>
                 <a  style={{fontSize:'120%',boxShadow:'0 0 10px grey'}} href={value['link']} className='btn btn-success' target="_blank">REGISTER <img src={registericon} style={{width:20,height:20,filter:'brightness(0) invert(1)'}} alt="" /></a> <br />
                 <br />
                 <hr />
                 </div>
  }
    function ReturnAllEvents(){
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>

      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>All Events</h3>
      <hr />
        {verifiedLEEDevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numPhotos).map((value,ind)=>{
     return <Renderdata value={value}/>                     }
    )}
<div className="d-flex justify-content-center w-100">
  <button  className='btn btn-primary my-3 w-25' onClick={() => {setNumPhotos(numPhotos + 2)}}>Load more events</button>
</div>
      </div>
    }
       function ReturnTodayEvents(){
let a=0
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>
      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>Today Events</h3>
         <hr />
        {verifiedLEEDevents.map((value,ind)=>{
          if(DateToDay(value['startdate'].slice(0,10))=="Today"){
return  <Renderdata value={value}/>}  else{
                  a=a+1;
                  if(ind+1==verifiedLEEDevents.length&& a==ind+1)
                  return <p className='text-danger' >NO LEED EVENTS TODAY</p>
                 }
    }
    )}
      </div>
    }
    function ReturnFutureEvents(){
let a=0
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>
      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>Future Events</h3>      <hr />
        { verifiedLEEDevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numfutevents).map((value,ind)=>{
if(value['startdate'].split("-")[0]>s.getFullYear() ||(value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]>s.getMonth()+1) || (value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]==s.getMonth()+1&&value['startdate'].split("-")[2].slice(0,2)>s.getDate())){
  
     return <Renderdata value={value}/>
     
     }
     
                 else{
                  a=a+1;
                  if(ind+1==verifiedLEEDevents.length&& a==ind+1)
                  return <p className='text-danger'>NO LEED EVENTS IN FUTURE</p>
                 }
                 }
    )
    }
    
     <div className="d-flex justify-content-center w-100">
  <button className='btn btn-primary my-3 w-25' onClick={() => setNumfutevents(numfutevents + 2)}>Load more events</button>
</div>
      </div>

    }
        function ReturnCompletedEvents(){
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>

      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>Completed Events</h3>
            <hr />
        {verifiedLEEDevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numcomevents).map((value,ind)=>{
if(value['startdate'].split("-")[0]<s.getFullYear() ||(value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]<s.getMonth()+1) || (value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]==s.getMonth()+1&&value['startdate'].split("-")[2].slice(0,2)<s.getDate())){
   
     return <Renderdata value={value}/>}}
    )}
    <div className="d-flex justify-content-center w-100">
  <button className='btn btn-primary my-3 w-25' onClick={() => setNumcomevents(numcomevents + 2)}>Load more events</button>
</div>
      </div>
    }
  return (
   <div style={{width:'100vw',fontFamily:'Nunito'}}>
   <Modal  style={{textAlign:'center',fontFamily:'Inter'}} show={showHelp} onHide={()=>setShowHelp(false)} backdrop="static" size="md" centered >
<Modal.Header closeButton>
  <Modal.Title className='text-primary'><img src={helpdeskimage} style={{width:20,height:20}} alt="" /><b>&nbsp;LEED HELPDESK </b></Modal.Title>
</Modal.Header>
<Modal.Body >
<h6>EVENTS ARE REGULARLY UPDATED</h6>
<div className="d-flex align-items-end"><>CONTACT - </> <a href="mailto:kwoshikvenkat2002@gmail.com" target="_blank">LEED HELP</a></div>
</Modal.Body>
     </Modal>
<div className=' d-flex '><SidebarEvent choosepicker={choosepicker} helpdesk={helpdeskfunc}/>
    {renderevents=="returnallevents"&&<ReturnAllEvents />}
       {renderevents=="returntodayevents"&&<ReturnTodayEvents />}
          {renderevents=="returncompletedevents"&&<ReturnCompletedEvents />}
             {renderevents=="returnfutureevents"&&<ReturnFutureEvents />}</div>

   </div>
  )
}

export default LEEDevents
