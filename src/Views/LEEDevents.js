import React from 'react'
import axios from 'axios'
import DateToDay from '../Models/DateToDay'
import {SidebarEvent} from '../Models/sidebar'
import registericon from '../Assets/share.png'
import LazyLoad from 'react-lazyload'
import Modal from 'react-bootstrap/Modal'
import helpdeskimage from '../Assets/user.png'
import micpic from '../Assets/mic.png'
import sharepic from '../Assets/share.png'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import arrowupimg from '../Assets/arrow-up.png'
import tickimage from '../Assets/check.png'
function LEEDevents() {
    let location = useLocation()
    const verifiedLEEDevents =  useSelector((state)=>state.LEEDevents.value)
    const verifiedevents = [...verifiedLEEDevents];
        const[filteredevents,setfilteredevents] = React.useState([])
    const[renderevents,setrenderevents] = React.useState("returnfutureevents")
    const[showHelp,setShowHelp] = React.useState(false)
        const[copysharelink,setcopysharelink] = React.useState("")
 const [numPhotos, setNumPhotos] = React.useState(1);
 const[numcomevents,setNumcomevents] = React.useState(1);
 const[numfutevents,setNumfutevents] = React.useState(1)
 const[queryid,setqueryid] = React.useState("")
    const s = new Date()
   React.useEffect(()=>{
 
    if(verifiedevents.length>0){
      const queryParams = new URLSearchParams(location.search);
  // You can now access the query parameters using the "queryParams" object
  setrenderevents("returnallevents")
let id = queryParams.get('id')

if(id){
  setqueryid(id )
let filtered = verifiedevents.filter(event => event["_id"] !== id).sort((a, b) => new Date(b.startdate) - new Date(a.startdate))
verifiedevents.filter(event => event["_id"] == id).map((val,ind)=>{
filtered.unshift(val)
})
setNumPhotos(numPhotos+2)
setfilteredevents(filtered)

}
    }
       
    },[verifiedevents.length>0])
  const choosepicker = (msg)=>{
setrenderevents(msg)
  }
  const helpdeskfunc=(msg)=>{
setShowHelp(msg)
  }

  const Renderdata=({value})=>{
return <div style={{display:'flex',flexDirection:'column'}}  className='w-100'>
    <Helmet>
        <meta property="og:title" content={value["title"]} />
        <meta property="og:description" content={value['quotes']} />
        <meta property="og:image" content={value['pic'][0]} />
        <meta property="og:url" content={'http://localhost:3000/events?id=' + value['_id']} />
      </Helmet>
        <div id={value['_id']} style={{flexWrap:'wrap'}} className={window.innerWidth>500?'w-100 d-flex justify-content-between px-4 align-items-center':'w-100 d-flex justify-content-center align-items-center px-2'}> 
        <h2></h2>
        <h2   style={{fontSize:window.innerWidth<400&&20,fontWeight:500,textTransform:'capitalize',wordWrap:'break-word'}}>{value['title']}</h2>
        <button style={{width:'fit-content',height:window.innerWidth>500?30:20,fontSize:window.innerWidth<400&&10,boxShadow:copysharelink==value["_id"]&&'0 0 5px grey'}} className={copysharelink==value["_id"]?'btn btn-light text-dark d-flex justify-content-center align-items-center':'btn btn-warning text-light d-flex justify-content-center align-items-center'} onClick={()=>{
          const url  = `http://localhost:3000/events?id=${value['_id']}`
          navigator.clipboard.writeText(url)
          setcopysharelink(value["_id"])
          }
        }> <img src={copysharelink==value["_id"]?tickimage:sharepic} style={{width:'100%',objectFit:'contain',height:'100%'}} alt="" /> <p>&nbsp;</p> {copysharelink!=value["_id"]?'Share':'Copied'}</button>
        </div> 
        <p style={{margin:window.innerWidth<400?'0':20,fontSize:window.innerWidth<400?14:24,textShadow:'0 0 0.5px black'}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100 ">
         {value['video'].map((val,ind)=>
       <LazyLoad height={200} offset={100} once>
         <video  src={val['secure_url']} style={{width:'80%',height:'80%',}} controls></video>
       </LazyLoad>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className={window.innerWidth>600?"d-flex w-75  my-5":"d-flex flex-column align-items-center w-100 my-5"} style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column w-50 align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img loading='lazy' src={val['secure_url']} alt="" style={{objectFit:'contain',width:'70%',height:'100%'}} />)}
</div>
        <div className='d-flex px-1 w-50 flex-column justify-content-center align-items-around'>
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
        <h3 style={{textShadow:'0 0 1px rgba(3, 201, 169, 0.5) ',textDecoration:'underline',textUnderlineOffset:window.innerWidth>500? '8px':'3px'}}>Why to Join This Event ?</h3>
        <br />
       <div  className="d-flex justify-content-around" style={{flexWrap:'wrap'}}>
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column my-1' style={{background:'white',borderRadius:'10px',padding:10,boxShadow:'0 0 5px rgba(3, 201, 169, 0.5)',width:window.innerWidth>400?'200px':100}}>
           <h2 className='text-danger'>{ind+1}</h2><br />
          <h6  style={{wordWrap: 'break-word'}}>{val}</h6>
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
          </embed> <br /><a rel="noreferrer" style={{fontWeight:'600'}} href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
          </LazyLoad>
         })}                  
          <br/>
                <div className="w-100 d-flex justify-content-center">
                   <a rel="noreferrer"  style={{fontSize:window.innerWidth>500?'120%':'80%',boxShadow:'0 0 10px grey'}} href={value['link']} className='btn btn-success' target="_blank">REGISTER <img src={registericon} style={{width:20,height:20,filter:'brightness(0) invert(1)'}} alt=""  /></a> 
                </div>
                 <br />
                 <br />
                 <hr />
                 </div>
  }
    function ReturnAllEvents(){
      return <div style={{scrollBehavior:'smooth'}} className='border-top bg-light d-flex flex-column justify-content-center w-100'>

      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>All Events</h3>
      <hr />
        {queryid.length==0? verifiedevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numPhotos).map((value,ind)=>{
     return <Renderdata value={value}/>                     }
    ):filteredevents.slice(0,numPhotos).map((value,ind)=>{
     return <Renderdata value={value}/>                     }
    )}
<div className="d-flex justify-content-center w-100">
  <button  className='btn btn-primary my-3' onClick={() => {setNumPhotos(numPhotos + 2)}}>Load More Events</button>
</div>
      </div>
    }
       function ReturnTodayEvents(){
let a=0
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>
      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>Today Events</h3>
         <hr />
        {verifiedevents.map((value,ind)=>{
          if(DateToDay(value['startdate'].slice(0,10))=="Today"){
return  <Renderdata value={value}/>}  else{
                  a=a+1;
                  if(ind+1==verifiedevents.length&& a==ind+1)
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
        { verifiedevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numfutevents).map((value,ind)=>{
if(value['startdate'].split("-")[0]>s.getFullYear() ||(value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]>s.getMonth()+1) || (value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]==s.getMonth()+1&&value['startdate'].split("-")[2].slice(0,2)>s.getDate())){
  
     return <Renderdata value={value}/>
     
     }
     
                 else{
                  a=a+1;
                  if(ind+1==verifiedevents.length&& a==ind+1)
                  return <p className='text-danger'>NO LEED EVENTS IN FUTURE</p>
                 }
                 }
    )
    }
    
     <div className="d-flex justify-content-center w-100">
  <button className='btn btn-primary my-3' onClick={() => setNumfutevents(numfutevents + 2)}>Load More Events</button>
</div>
      </div>

    }
        function ReturnCompletedEvents(){
      return <div className='border-top bg-light d-flex flex-column justify-content-center w-100'>

      <h3 className='text-success' style={{fontSize:window.innerWidth<400?15:45,fontFamily:'Oswald'}}>Completed Events</h3>
            <hr />
        {verifiedevents.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)).slice(0,numcomevents).map((value,ind)=>{
if(value['startdate'].split("-")[0]<s.getFullYear() ||(value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]<s.getMonth()+1) || (value['startdate'].split("-")[0]==s.getFullYear()&&value['startdate'].split("-")[1]==s.getMonth()+1&&value['startdate'].split("-")[2].slice(0,2)<s.getDate())){
   
     return <Renderdata value={value}/>}}
    )}
    <div className="d-flex justify-content-center w-100">
  <button className='btn btn-primary my-3' onClick={() => setNumcomevents(numcomevents + 2)}>Load More Events</button>
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
