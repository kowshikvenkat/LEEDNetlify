import React from 'react'
import axios from 'axios'
import { app } from '../Models/firebase';
import {OAuthProvider,getAuth,GoogleAuthProvider,signInWithPopup,signOut,deleteUser} from 'firebase/auth';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';
import DateToDay from '../Models/DateToDay';
import Sidebar from '../Models/sidebar';
import './Requests.css'
var cryptojs = require("crypto-js")
function Requests() {

  const navigate=useNavigate()
      const auth = getAuth(app)
  const[pendingdata,setpendingdata] = React.useState([])
  const[open,setopen] = React.useState(false)
  const[UIC,setUIC] = React.useState(false)
  const[result,setresult] = React.useState({})
  const[accessToken,setaccessToken] = React.useState("")
  const [Email,setEmail] = React.useState("")
     const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
     const[pendingregisters,setpendingregisters] = React.useState([])
         const [addvideo,setaddvideo] = React.useState(1)
                const[videofile,setvideofile] = React.useState([])
     const [addimage,setaddimage] = React.useState(1)
        const [addpdf,setaddpdf] = React.useState(1)
     const[Title,setTitle] = React.useState("")
          const[Desc,setDesc] = React.useState("")
               const[startDate,setstartDate] = React.useState("")
               const[enddate,setenddate] = React.useState("")
                    const[Link,setLink] = React.useState("")
                    const[imagefile,setimagefile] = React.useState([])
                     const[pdffile,setpdffile] = React.useState([])
                    const[LEEDevents,setLEEDevents] = React.useState([])
                 const[Quotes,setQuotes] = React.useState("")
                 const[Venue,setVenue] = React.useState("")
               const[addinfo,setaddinfo] = React.useState(1)
                   const[addbenefits,setaddbenefits] = React.useState(1)
        
  React.useEffect(()=>{
   
    if(sessionStorage.getItem('email')==null||sessionStorage.getItem('email')==undefined){
     
VerifyAdmin()
    
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
    url: "http://localhost:5000/pendingdata",
  
  }).then(res => {
  res.data.pendingdata.map((value,index)=>{
    if(res.data.pendingdata.length!==pendingdata.length){
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
  
axios({
    method: "GET",
    url: "http://localhost:5000/getpendingregisters",
  
  }).then(res=>{
    setpendingregisters(res.data.docs)
  })
  },[Email==="kowshik.20ei@kct.ac.in"||Email==="jeevankumar.20ei@kct.ac.in"])
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
      reader.onload=()=>{
        const base64data = reader.result;
      let profilePic = cryptojs.AES.encrypt(base64data,'kowshik123').toString()
sessionStorage.setItem('pic',JSON.stringify(profilePic))
window.location.reload()
      }
      // const imageObjectURL = URL.createObjectURL(blob);
      // imageObjectURL will be e.g. blob:http://localhost:3000/f123c12a-1234-4e30-4321-af32f2c5e5bc
      // so updating the <img scr=""> will present the image correctly after
      // setProfilePicUrl(imageObjectURL);
     
    })
    .catch(e => console.log('error injecting photo'));
};   
    lookupMsAzureProfilePhoto(accessToken)  
fetchDataFromBackend()

    }
else{

    navigate("/")
  }
     
}
  function fetchDataFromBackend(){
axios({
    method: "GET",
    url: "http://localhost:5000/pendingdata",
  
  }).then(res => {
  res.data.pendingdata.map((value,index)=>{
    if(result.user.email=="kowshik.20ei@kct.ac.in"){
    if(value['admin1']==false){
    setpendingdata((prev)=>[...prev,value])
    }}
     else if(result.user.email=="jeevankumar.20ei@kct.ac.in"){
    if(value['admin2']==false){
  setpendingdata((prev)=>[...prev,value])
    }}
  })

  });

  }
  function Eventhandler(e){

e.preventDefault()
let benefits = []
let info =[]
for(let i=0;i<addinfo;i++){
  info.push({name:document.forms["myform"]["info_name"+i].value,link:document.forms["myform"]["info_link"+i].value})
   
}
for(let i=0;i<addbenefits;i++)
benefits.push(document.forms["myform"]["benefits"+i].value)
let arr=[]
let video=[]
const formdata = new FormData()
const videoformdata = new FormData()
if(videofile.length>0){

videofile.map((val,ind)=>{

videoformdata.append("file",val)
videoformdata.append("upload_preset", "axjn5pob")
axios.post("https://api.cloudinary.com/v1_1/ds27l3mqz/auto/upload",videoformdata,{
  headers:{
    "Content-Type":'multipart/form-data'
  }
}).then((res,err)=>{if(res){video.push({secure_url:res.data.secure_url,public_id:res.data.public_id});if(video.length==videofile.length){

imagefile.map((val,ind)=>{
  console.log("with video")
formdata.append("file",val)
formdata.append("upload_preset", "axjn5pob")
axios.post("https://api.cloudinary.com/v1_1/ds27l3mqz/image/upload",formdata).then((res)=>{if(res){arr.push({secure_url:res.data.secure_url,public_id:res.data.public_id});if(arr.length==imagefile.length){
axios.post("http://localhost:5000/pendingLEEDevent",{

title:Title,
desc:Desc,
startdate:startDate,
enddate:enddate,
link:Link,
quotes:Quotes,
venue:Venue,
benefits:benefits,
info:info,
video:video,
pic:arr,
pdf:pdffile,
email:Email,
})
}}}).catch(function(err){
   console.log(err)
   })
 })

}}if(err){
  console.log(err)
}}).catch(function(err){
   console.log(err)
   })
 })}

else{
  imagefile.map((val,ind)=>{
    console.log("without video")
formdata.append("file",val)
formdata.append("upload_preset", "axjn5pob")
axios.post("https://api.cloudinary.com/v1_1/ds27l3mqz/image/upload",formdata).then((res)=>{if(res){arr.push({secure_url:res.data.secure_url,public_id:res.data.public_id});if(arr.length==imagefile.length){
  
axios.post("http://localhost:5000/pendingLEEDevent",{

title:Title,
desc:Desc,
startdate:startDate,
enddate:enddate,
link:Link,
quotes:Quotes,
venue:Venue,
benefits:benefits,
info:info,
video:video,
pic:arr,
pdf:pdffile,
email:Email,
})
}}}).catch(function(err){
   console.log(err)
   })
 })
}



  }
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
     <Modal  show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
<Modal.Title>Enter 16 digit Unique Identity Code</Modal.Title>
<Modal.Body >
  <form action="" onSubmit={VerifyUIC}>
    <input type="text" onChange={(e)=>setUIC(e.target.value)} /> <br />
    <input type="submit" value="Submit" className='btn btn-primary' />
  </form>
</Modal.Body>
     </Modal>
     {(Email=="kowshik.20ei@kct.ac.in"||Email=="jeevankumar.20ei@kct.ac.in") &&  <div>
      <Sidebar bgcolor={'white'}/><h3>Admin's Page Kct Leed</h3>
    {pendingdata.length>0 ? pendingdata.map((value,index)=>
      <div className='border w-100 mt-3'>
   <div className="d-flex pitch_profile justify-content-center align-items-center">
     <div className="d-flex justify-content-center align-items-end">
       <img src={value['pic']} style={{borderRadius:"50%",width:40,height:40}} alt="" />&nbsp;&nbsp;
        <i><h4 className='text-muted'>{value['name']}</h4></i>
     </div> &nbsp;&nbsp;
     <div className=''>   <i className='text-muted '>{DateToDay(value['createdAt'])}</i></div>
   </div>
        <h4>{value['title']}</h4> 
   <p style={{fontFamily:"inherit"}}>    {value['desc']}</p>
      <button onClick={()=>{


              if(window.confirm("Confirm again to ACCEPT the pitch")){
                if(Email=="kowshik.20ei@kct.ac.in"){
           axios.post("http://localhost:5000/requestaccept",{
  id:value['_id'],
  admin:"admin1"
})
}else if(Email=="jeevankumar.20ei@kct.ac.in"){
   axios.post("http://localhost:5000/requestaccept",{
  id:value['_id'],
  admin:"admin2"
})
}
      window.location.reload()
              }
    
      }} className='btn btn-success'>Accept</button>
          <button onClick={()=>{
   
                if(window.confirm("Confirm again to REJECT the pitch")){
           axios.post("http://localhost:5000/requestreject",{
  id:value['_id']
})
       window.location.reload()
                }

      }} className='btn btn-danger'>Reject</button>
      </div>
    ) :<h4><i>No Pending Sharktank Requests</i></h4>}
     <div>
      <h3>Event Registers Requested </h3>
{pendingregisters.map((value,index)=>
<div>
  <h5>From <b>{value['Institution']}</b></h5>
<p>{value['Email']}</p>
<h5>{value['Title']}</h5>
<p>{value['Desc']}</p>
<p><i>Date Of Event : {value['Date']}</i></p>
<button onClick={()=>{
axios.post("http://localhost:5000/accepteventrequest",{
id:value['_id']
})
}}>Accept</button>
<br /><br /><br />
</div> 


)}
    </div>
    <div className='border border-warning p-3'>
       
      
      <form name="myform" action="" onSubmit={Eventhandler}>

    <label htmlFor="">Title:</label><input type="text" onChange={(e)=>setTitle(e.target.value)} required/> <br />
  <label htmlFor="">Quotes : </label><textarea type="text" onChange={(e)=>setQuotes(e.target.value)} required/> <br />

      <div className="d-flex ">
         <button type='button'  onClick={()=>setaddvideo(prev=>prev+1)}>Add</button>
     <div className="d-flex flex-column">
       {[...Array(addvideo)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',marginTop:'2%'}}>        <label htmlFor="">Upload Video(max 100 MB):</label><input type="file" accept='video/*' onChange={(e)=>setvideofile((prev)=>prev.concat(e.target.files[0]))} />
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddvideo(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
      <div className="d-flex ">
         <button type='button'  onClick={()=>setaddimage(prev=>prev+1)}>Add</button>
     <div className="d-flex flex-column">
       {[...Array(addimage)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',marginTop:'2%'}}>        <label htmlFor="">Upload Image:</label><input type="file" accept='image/png,image/gif,image/jpeg,image/jpg' onChange={(e)=>setimagefile((prev)=>prev.concat(e.target.files[0]))} required/>
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddimage(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
   
  
     <label htmlFor="">Description:</label><textarea type="text" onChange={(e)=>setDesc(e.target.value)} required/> <br />
     <label htmlFor="">Venue : </label><textarea type="text" onChange={(e)=>setVenue(e.target.value)} required/> <br />
        <label htmlFor="">Start Date:</label><input onChange={(e)=>setstartDate(e.target.value)} type="datetime-local" required/> <br />
          <label htmlFor="">End Date:</label><input onChange={(e)=>setenddate(e.target.value)} type="datetime-local" required/> <br />
           <label htmlFor="">Registeration Form(Upload Link):</label>
<input onChange={(e)=>setLink(e.target.value)} type="text" required/> <br />
    
         <div className="d-flex ">
         <button type='button'  onClick={()=>setaddinfo(prev=>prev+1)}>Add</button>
     <div className="d-flex flex-column">
       {[...Array(addinfo)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',marginTop:'2%'}}>        <label htmlFor="">Additional Info</label><input name={"info_name"+i} placeholder={"name"} type="text" />:<input name={"info_link"+i} placeholder={"link"} type="text" />
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddinfo(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
     <div className="d-flex ">
         <button type='button'  onClick={()=>setaddbenefits(prev=>prev+1)}>Add</button>
     <div className="d-flex flex-column">
       {[...Array(addbenefits)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',marginTop:'2%'}}>        <label htmlFor="">Benefits</label><input name={"benefits"+i} placeholder={'Add Benefits'} type="text" />
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddbenefits(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
                       <div className="d-flex">
                          <button type='button' onClick={()=>setaddpdf(prev=>prev+1)}>Add </button>
<div className="d-flex flex-column">
        {[...Array(addpdf)].map((e,i)=>
<div style={{marginTop:'2%',backgroundColor:'rgba(200,200,200,0.5)'}}>        <label htmlFor="">Upload PDF(Only Paste google drive link and enable <i>` anyone can view`</i>) :</label><input type="text" onChange={(e)=>setpdffile(prev=>prev.concat(e.target.value))} />
<button type='button' style={{borderRadius:'50%',border:'none',color:'white'}} className='bg-danger'  onClick={()=>setaddpdf(prev=>prev-1)}>X</button>
</div>
      )}
</div>
                       </div> <br />
                <input type="submit" className='btn btn-primary' value="Add Event" />
      </form>
    </div>
    <h2><u>Upcoming KCT LEED EVENTS</u></h2>
    {LEEDevents.length>0?LEEDevents.map((value,index)=>
{


  return     <div className='w-100 ' style={{fontFamily:'roboto'}}>

        <h2>{value['title']}</h2>
        <p style={{margin:50,fontSize:24,}} className='text-warning'><em>`{value['quotes']}`</em></p>
       <div className="w-100">
         {value['video'].map((val,ind)=>
        <video src={val['secure_url']} style={{width:'80%',height:'80%',objectFit:'contain'}} autoPlay muted loop></video>
        )}
       </div>
<div className="w-100 d-flex justify-content-center">
  <div className="d-flex w-75 h-50  my-5" style={{backgroundColor:'rgba(164,219,232,0.2)',borderRadius:'40px'}}>
  <div className='d-flex flex-column align-items-center justify-content-center'>
          {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="" style={{objectFit:'contain',width:'50%',height:'100%'}} />)}
</div>
        <div className='d-flex flex-column justify-content-center'>
           <p>{value['desc']}</p>
         <div className='  d-flex'>
          <h4 className=' text-success'>When : </h4>
          <h4 > &nbsp;{DateToDay(value['startdate'].slice(0,10)) }&nbsp;&nbsp;{value['startdate'].slice(11)} - {DateToDay(value['enddate'].slice(0,10)) }&nbsp;&nbsp;{value['enddate'].slice(11)} </h4>
         </div>
          <div className=' d-flex'>
          <h4 className=' text-success'>Where : </h4>
          <h4 > &nbsp;{value['venue']} </h4>
         </div>
        </div>
</div>
</div>
         {value['info'].map((val,ind)=>
        <div className='d-flex align-items-center'>
           <h4>Check Out</h4> - <a href={val['link']} target='_blank'>{val['name']}</a>
        </div>
         )}
       <div className="d-flex">
          {value['benefits'].map((val,ind)=>
         <div className='d-flex flex-column'>
           <h4>{ind}</h4><br />
          <p>{val}</p>
         </div>
         )
         }
           </div>
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} target="_blank">Register</a> <br />
      <button className='btn btn-danger' onClick={()=>{
         
         let response = window.confirm( value['title']+", event taking place on "+ value['startdate'].slice(0,10)+" Time : "+  value['startdate'].slice(11)+"\n"+"Confirm again to reject event !")
         if(response){
 axios.post("http://localhost:5000/rejectKCTLEEDevents",{
            id:value['_id']
          })
         }
         }}>REJECT</button>
         <button className='btn btn-success' onClick={()=>{
         
         let response = window.confirm( value['title']+", event taking place on "+ value['startdate'].slice(0,10)+" Time : "+  value['startdate'].slice(11)+"\n"+"Confirm again to accept event !")
         if(response){
 axios.post("http://localhost:5000/acceptKCTLEEDevents",{
            id:value['_id']
          })
         }
         }}>ACCEPT</button>
  
    </div>
}
    ):"No such event requests"}
    </div>
    
    }

    </div>
  )
}

export default Requests
