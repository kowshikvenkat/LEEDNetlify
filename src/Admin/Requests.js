import React from 'react'
import axios from 'axios'
import { app } from '../Models/firebase';
import {OAuthProvider,getAuth,GoogleAuthProvider,signInWithPopup,signOut,deleteUser} from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';
import DateToDay from '../Models/DateToDay';
import { SidebarAdmin } from '../Models/sidebar';
import './Requests.css'
import Dashboard from './dashboard';
import adminpic from '../Assets/user.png'
import Helpdesk from './helpdesk';
import LEEDeventrequests from './LEEDeventrequests';
import Createevents from './createevents';

var cryptojs = require("crypto-js")

function Requests() {

    const[renderevents,setrenderevents] = React.useState("returnallevents")
  const navigate=useNavigate()
      const auth = getAuth(app)
  const[pendingdata,setpendingdata] = React.useState([])
  const[open,setopen] = React.useState(false)
  const[UIC,setUIC] = React.useState(false)
  const[result,setresult] = React.useState({})
  const[accessToken,setaccessToken] = React.useState("")
  const [Email,setEmail] = React.useState("")
          const[blockedrequests,setblockedrequests] = React.useState([])
     const[pendingregisters,setpendingregisters] = React.useState([])
                    const[LEEDevents,setLEEDevents] = React.useState([])
             
         const choosepicker = (msg)=>{
setrenderevents(msg)
  }
  React.useEffect(()=>{
   if(window.innerWidth>800){
    if(sessionStorage.getItem('email')==undefined||sessionStorage.getItem('email')==null){ 
VerifyAdmin()
}else if(sessionStorage.getItem('email')){
  var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
  if(bytesemail.toString(cryptojs.enc.Utf8)!=="kowshik.20ei@kct.ac.in"&&bytesemail.toString(cryptojs.enc.Utf8)!=="jeevankumar.20ei@kct.ac.in"){
    navigate("/")
 }
 
}
   }else{
    alert("Kindly switch to PC device(screenSize >800px) and Reload page ! ")
   }
  },[])

  React.useEffect(()=>{
     if(sessionStorage.getItem('pic')!==null&&sessionStorage.getItem('pic')!==undefined){
      var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
     }
  })
  React.useEffect(()=>{

axios({
    method: "GET",
    url: "http://localhost:5000/pendingpitchST",
  
  }).then(res => {
  res.data.docs.map((value,index)=>{
    if(res.data.docs.length!==pendingdata.length){
    if(Email=="kowshik.20ei@kct.ac.in"){
    if(value['admin1']==false){
  setpendingdata((prev)=>[...prev,value])
    }}
     else if(Email=="jeevankumar.20ei@kct.ac.in"){
    if(value['admin2']==false){
   setpendingdata((prev)=>[...prev,value])
    }}
  }
  })

  });
  },[Email==="kowshik.20ei@kct.ac.in"||Email==="jeevankumar.20ei@kct.ac.in"])
  React.useEffect(()=>{
   if(Email.length>0){
     axios({
    method: "GET",
    url: "http://localhost:5000/getpendingregisters",
  
  }).then(res=>{
    res.data.docs.map((val)=>{

if(!val.admin){
  
setpendingregisters((prev) => (prev.includes(val) ? prev : [...prev, val]));
  }
    else if(val.admin){
      if(val.admin!=Email){
          setpendingregisters((prev) => (prev.includes(val) ? prev : [...prev, val]))}
    }
    })
  })
    axios({
    method: "GET",
    url: "http://localhost:5000/getpendingblockedusers",
  
  }).then(res=>{
    res.data.docs.map((val,ind)=>{
if(val.admin!=Email){
  setblockedrequests(prev=>[...prev,val])
}
    })
  })
   }
  },[Email])
function VerifyAdmin(){
   const microsoftProvider = new OAuthProvider('microsoft.com');
microsoftProvider.setCustomParameters({
  // Optional "tenant" parameter in case you are using an Azure AD tenant.
  // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
  // or "common" for tenant-independent tokens.
  // The default value is "common".
  tenant: '6b8b8296-bdff-4ad8-93ad-84bcbf3842f5',
    prompt: 'consent',
});
  signInWithPopup(auth, microsoftProvider)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.
    // Get the OAuth access token and ID Token
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
    setresult(result)
    setaccessToken(accessToken)
  if(result.user.email=="kowshik.20ei@kct.ac.in"||result.user.email=="jeevankumar.20ei@kct.ac.in"){
    setopen(true)
  }else{
    navigate("/")
  }
  })
}
function VerifyUIC(e){
  e.preventDefault()
 setopen(false)
     if((result.user.email=="kowshik.20ei@kct.ac.in"&&UIC=="K2O0W0S2H0I7K2R6A0N")||(result.user.email=="jeevankumar.20ei@kct.ac.in"&&UIC=="H2A0R0I2H0A7A1R7A0N")){
          let name = cryptojs.AES.encrypt(result.user.displayName,'kowshik123').toString()
sessionStorage.setItem('name',name)
let email = cryptojs.AES.encrypt(result.user.email,'kowshik123').toString()  
sessionStorage.setItem('email',email);
     const lookupMsAzureProfilePhoto = (accessToken) => {
     fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'image/jpg'
    }
    })
    .then(function(response) {
      return response.blob();   
    })
    .then(function(blob) {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload=async()=>{
        const base64data = reader.result;
      let profilePic = cryptojs.AES.encrypt(base64data,'kowshik123').toString()
sessionStorage.setItem('pic',JSON.stringify(profilePic))
await axios.post("http://localhost:5000/createuser",{
  name:result.user.displayName,
  email:result.user.email,
  pic:base64data,
}).then((res)=>{
let userid = cryptojs.AES.encrypt(res.data.id,'kowshik123').toString()
sessionStorage.setItem('userid',JSON.stringify(userid))
let verifyuic = cryptojs.AES.encrypt('verified','kowshik123').toString()
sessionStorage.setItem('verifyuic',JSON.stringify(verifyuic))
})
window.location.reload()
      }

    })
    .catch(e => console.log('error injecting photo'));
};   
    lookupMsAzureProfilePhoto(accessToken)  
// fetchDataFromBackend()
    }
else{
    navigate("/")
  }
     
}
//   function fetchDataFromBackend(){
// axios({
//     method: "GET",
//     url: "http://localhost:5000/pendingdata",
  
//   }).then(res => {
//   res.data.pendingdata.map((value,index)=>{
//     if(result.user.email=="kowshik.20ei@kct.ac.in"){
//     if(value['admin1']==false){
//     setpendingdata((prev)=>[...prev,value])
//     }}
//      else if(result.user.email=="jeevankumar.20ei@kct.ac.in"){
//     if(value['admin2']==false){
//   setpendingdata((prev)=>[...prev,value])
//     }}
//   })

//   });

//   }

  React.useEffect(()=>{
addaxiosfunction()

  },[Email=="jeevankumar.20ei@kct.ac.in" ||Email=="kowshik.20ei@kct.ac.in"])
  function addaxiosfunction(){

        axios.post("http://localhost:5000/getpendingKCTLEEDevents",{
      email:Email
    }).then((res)=>{
     res.data.docs.map((value,index)=>{
      if(value['email']!=Email)
      setLEEDevents((prev)=>prev.concat(value))
     })

    })
  }
  return (
    <div className='' >
     <Modal  style={{textAlign:'center',fontFamily:'Inter'}} show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
<Modal.Title className='text-primary'>Enter 16 digit Unique Identity Code</Modal.Title>
<Modal.Body >
  <form action="" style={{display:'flex',flexDirection:'column',alignItems:'center'}} onSubmit={VerifyUIC}>
    <input type="text" className='form-control' style={{width:'60%',fontSize:20}} onChange={(e)=>setUIC(e.target.value)} /> <br />
    <input type="submit" value="Submit" className='btn btn-primary' />
  </form>
</Modal.Body>
     </Modal>
     {(Email=="kowshik.20ei@kct.ac.in"||Email=="jeevankumar.20ei@kct.ac.in") &&  <div className='d-flex bg-light'>
      <SidebarAdmin choosepicker={choosepicker} bgcolor={'white'}/>
      <div className='w-100 mt-5'>
        <h3 style={{fontFamily:'Oswald',fontSize:30}}><img src={adminpic} style={{width:20,height:20}}/> ADMIN PAGE LEED</h3>
        <hr />
        {
          renderevents=="returnallevents"&&<Dashboard />
        }
    {renderevents=="returntodayevents"&&( pendingdata.length>0 ? pendingdata.map((value,index)=>
      <div className='border d-flex flex-column align-items-center mt-3 p-2' style={{width:'95%'}}>
    
   <div className="d-flex w-100 pitch_profile justify-content-around align-items-center">
     <div className="d-flex justify-content-center align-items-end">
       <img src={value['pic']} style={{borderRadius:"50%",width:40,height:40}} alt="" />&nbsp;&nbsp;
        <i><h4 className='text-muted'>{value['name']}</h4></i>
     </div> &nbsp;&nbsp;
           <p>{value['category']}</p>
            <p>{DateToDay(value['createdAt'].slice(0,10))}</p>
   </div>
        <h4>{value['title']}</h4> 
   <p style={{fontFamily:"inherit"}}>    {value['content']}</p>
   {value["users"].length>0 && <div className='w-100 ' style={{textAlign:'start'}}>
<h3 className='text-secondary'>Target Users</h3>
<p>{value['users']}</p>
   </div>}
     {value["impact"].length>0 && <div className='w-100 ' style={{textAlign:'start'}}>
<h3 className='text-secondary'>Solution Impact</h3>
<p>{value['impact']}</p>
   </div>}
     {value["barriers"].length>0 && <div className='w-100 ' style={{textAlign:'start'}}>
<h3 className='text-secondary'>Adoption Barriers</h3>
<p>{value['barriers']}</p>
   </div>}
       
       {value['image'].map((val,ind)=>
       <>
        <img src={val['secure_url']} style={{width:'90%',height:400,objectFit:'contain'}} alt="" /> <br />
       </>
       )}
       <br />
       {value['video'].map((val,ind)=>
       <>
        <video src={val['secure_url'] } style={{width:'90%',maxHeight:'70vh',border:'1px solid black'}} controls></video> <br />
       </>
       )}
  {value['gdrive'].length>0&& value['gdrive'].map((val,ind)=>{
         
          return         <div className='w-75'>
            <embed src={val.replace("/view?usp=sharing","/preview")} style={{width:'100%'}} height="400">          
          </embed> <br /> <a style={{fontWeight:'600'}} href={val} target="_blank">DOWNLOAD DOCUMENT</a> <br />
          </div>
         })}
    <div className="w-100 d-flex justify-content-evenly my-3">
        <button onClick={()=>{


              if(window.confirm("Confirm again to ACCEPT the pitch")){
                if(Email=="kowshik.20ei@kct.ac.in"){
           axios.post("http://localhost:5000/requestacceptST",{
  id:value['_id'],
  admin:"admin1"
})
}else if(Email=="jeevankumar.20ei@kct.ac.in"){
   axios.post("http://localhost:5000/requestacceptST",{
  id:value['_id'],
  admin:"admin2"
})
}
      window.location.reload()
              }
    
      }} className='btn btn-success'>Accept</button>
          <button onClick={()=>{
   
                if(window.confirm("Confirm again to REJECT the pitch")){
           axios.post("http://localhost:5000/requestrejectST",{
  id:value['_id']
})
       window.location.reload()
                }

      }} className='btn btn-danger'>Reject</button>
    </div>
      </div>
    ) :<h4><i>No Pending Sharktank Requests</i></h4>)}
     <div>
   
   {renderevents=="returnfutureevents" &&  <div className='d-flex flex-column align-items-center'>
   {blockedrequests.map((value,index)=>

   <div className='d-flex flex-column'>
   
   <h2 className='text-danger'>BLOCK USER REQUEST</h2>
    <h3>{value['Useremail']}</h3>
    <button className='btn btn-danger' onClick={()=>{
      if(window.confirm('Confirm Again to Block')){
        axios.post("http://localhost:5000/acceptblockuser",{
          id:value['_id']
        })
      }
    }}>BLOCK</button>
    <hr className='w-100'/>
   </div>
   )} 
    <h3><u>Event Registers Requested</u> </h3>
   {pendingregisters.length>0?<>
{pendingregisters.map((value,index)=>
<div className='my-5 w-75 p-2' style={{boxShadow:'0 0 10px grey'}}>
  <h5>From <b>{value['Institution']}</b></h5>
<p className='' style={{float:'left'}}>Person To Contact - <a target="_blank" href={`mailto:${value['Email']}`}>{value['Email']}</a></p><br /><br />
<h5>{value['Title']}</h5>
<p>{value['Desc']}</p>
{value['Link']!=null&& <a href={value['Link']}>Registeration/Redirect Link</a>}
<p><i>Date Of Event : {DateToDay(value['Date'].slice(0,10)) }&nbsp;{value['Date'].slice(11)}</i> -<i>{DateToDay(value['endDate'].slice(0,10)) }&nbsp;{value['endDate'].slice(11)}</i></p>
<button className='btn btn-success  mx-5' onClick={()=>{
    if(window.confirm("Confirm again to ACCEPT the EVENT")){
axios.post("http://localhost:5000/accepteventrequest",{
id:value['_id'],
email:Email
})
setpendingregisters(prevArray => prevArray.filter(obj => obj['_id'] !== value['_id']))
    }
}}>Accept</button>
<button className='btn btn-danger' onClick={()=>{
    if(window.confirm("Confirm again to REJECT the EVENT")){
axios.post("http://localhost:5000/rejecteventrequest",{
id:value['_id']

})
setpendingregisters(prevArray => prevArray.filter(obj => obj['_id'] !== value['_id']))
    }
}}>Reject</button>
<br />
</div> 


)}</>:<h4><i>No Events Requests</i></h4>}
<br /><br />
 <h3><u>Upcoming KCT LEED EVENTS</u></h3>
 <LEEDeventrequests LEEDevents={LEEDevents}/>
</div>
}
    </div>
   {renderevents=="returncompletedevents"&& <Createevents Email={Email}/>}
   {
    renderevents=="returnhelpdesk"&&<Helpdesk Email={Email}/>
   }
      </div>
    </div>
    
    }

    </div>
  )
}

export default Requests
