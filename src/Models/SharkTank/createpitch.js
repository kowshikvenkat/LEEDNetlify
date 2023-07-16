import React from 'react'
import axios from 'axios'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import plusimg from '../../Assets/plus.png'
import backimage from '../../Assets/sign-out.png'
import Modal from 'react-bootstrap/Modal'
const cryptojs = require("crypto-js")
function UserPitch() {
  const[disableBTN,setdisableBTN] = React.useState(false)
    const[open,setopen] = React.useState(true)
   const[Title,setTitle] = React.useState("")
   const[content,setcontent] = React.useState("")
   const[addvideo,setaddvideo] = React.useState(1)
   const[video,setvideo] = React.useState([])
   const[addimage,setaddimage] = React.useState(1)
   const[image,setimage] = React.useState([])
   const[addgdrive,setaddgdrive] = React.useState(1)
   const[gdrive, setgdrive] = React.useState([])
   const[categ,setcateg] = React.useState("")
   const[users,setusers] = React.useState("")
     const[impact,setimpact] = React.useState("")
       const[barriers,setbarriers] = React.useState("")
   let imageuploading = React.useRef(false)
   let videouploading = React.useRef(false)
   const[imguploaderr,setimguploaderr] = React.useState()
      const[videouploaderr,setvideouploaderr] = React.useState()
    const[userid,setuserid] = React.useState("")
       React.useEffect(()=>{
   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined&&sessionStorage.getItem('userid')!==null&&sessionStorage.getItem('userid')!==undefined){

var bytesuserid = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('userid')),'kowshik123')
setuserid(()=>bytesuserid.toString(cryptojs.enc.Utf8))
}
       },[])
      React.useEffect(()=>{
  console.log(image)
      })
    async function PitchSubmit(e){
        e.preventDefault()
            let videofile=[];
         let imagefile=[]
        if(categ.length>5){

                  setdisableBTN(true)
        if(video.length>0){
      

        const videoformdata = new FormData()
        for(let i=0;i<video.length;i++){  
             if(video[i]!=undefined&&video[i]!=null){
        videoformdata.append("file",video[i])
videoformdata.append("upload_preset", "axjn5pob")
        videouploading.current=true
const res = await axios.post("https://api.cloudinary.com/v1_1/ds27l3mqz/auto/upload",videoformdata,{
  headers:{
    "Content-Type":'multipart/form-data'
  }
})
if(res){
  videouploading.current=false
videofile.push({secure_url:res.data.secure_url,public_id:res.data.public_id})
}
             }
  }
        }
          if(image.length>0){
    
        const imageformdata = new FormData()
for(let i=0;i<image.length;i++){
if(image[i]!=undefined&&image[i]!=null){
        imageformdata.append("file",image[i])

imageformdata.append("upload_preset", "axjn5pob")
        imageuploading.current=true
    
const res =await axios.post("https://api.cloudinary.com/v1_1/ds27l3mqz/auto/upload",imageformdata,{
  headers:{
    "Content-Type":'multipart/form-data'
  }
})
if(res){
imageuploading.current=false
imagefile.push({secure_url:res.data.secure_url,public_id:res.data.public_id})
}
}
}
        }

if(videouploading.current==false&&imageuploading.current==false){

 axios.post("http://localhost:5000/addpitchST",{
    userid:userid,
    title:Title,
    content:content,
    category:categ,
 video:videofile,
 image:imagefile,
 users:users,
 barriers:barriers,
 impact:impact,
 gdrive:gdrive,
})
} 
setdisableBTN(false)
window.location.reload()
        }
 else{
  alert("Kindly Choose a category Do not leave empty!");
 }

    }

  return (
    <div className={window.innerWidth>500?'w-75 bg-light p-2':'w-100 bg-light p-2'}>
       <Modal  style={{textAlign:'center',fontFamily:'Inter',zIndex:10000000}} show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
<Modal.Header  closeButton>
<div className='w-100' style={{textAlign:'center'}}>
  <Modal.Title  className='text-primary text-center'>Instructions before creating pitch</Modal.Title> 
</div>

</Modal.Header>
<Modal.Body style={{paddingBottom:0}}>
   <ol type="I" style={{textAlign:'left'}}>
  <li>You can pour your startup ideas here with atmost detailing and get experts review !</li>
  <li>Make sure to pitch your problem statement and solution clearly.</li>
  <li>You can add documents , videos and images (if any) for precise explanation.</li>
    <li>You can pitch any creative idea of all domains.</li>
    <li>Make sure to explain your solution's use case, impact and inspiration under good research with clarity !</li>
  <li>You are requested to not pitch unparliamentary ideas , if in case<p className='text-danger' style={{display:'inline'}}> serious actions will be taken - can extend upto to ban user's account. </p></li>
</ol>
    
</Modal.Body>
     </Modal>
    <h2 className='d-flex align-items-center justify-content-center'>Create New Pitch &nbsp; <img src={plusimg} style={{width:30,height:30,borderRadius:'50%',boxShadow:'0 0 5px grey'}} alt="" /> </h2> <br />
    <div className="w-100 d-flex justify-content-end">    <Link to="/sharktank/" className='btn btn-primary d-flex align-items-center'> <img src={backimage} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(180deg)'}} alt="" /> &nbsp;BACK TO PITCHES</Link></div><br />
      <form action="" className='d-flex flex-column align-items-center' onSubmit={PitchSubmit}>
      <div className='w-100 d-flex flex-column align-items-start px-2'>
        <h4>Title</h4> <p className='text-secondary'>Enter your pitch subject / heading / problem statement</p> 
      </div> 
<textarea type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} placeholder='Ideation Title' required/> <br />
  <div className='w-100 d-flex flex-column align-items-start px-2'>
  <h4>Description</h4> <p className='text-secondary'>Enter your pitch Content / Solution</p> 
      </div>
<textarea className='form-control' style={{height:'200px'}} type="text" onChange={(e)=>setcontent(e.target.value)} placeholder='Ideation Content' required/> <br /> 
<div className='w-50 d-flex align-items-center'><label htmlFor="" className='d-flex'> <div className="text-danger">*</div> Category</label>&nbsp;<select className='form-select' name="" id="" onChange={(e)=>setcateg(e.target.value)} style={{width:'50%'}} required>
<option value=""></option>
  <option value="Retail">Retail and Consumer Goods</option>
    <option value="Finance">Financial Services</option>
      <option value="IT">Technology and Information Technology (IT)</option>
        <option value="Health">Healthcare and Pharmaceuticals</option>
         <option value="Manufacture">Manufacturing and Industrial</option>
          <option value="Energy">Energy and Utilities</option>
           <option value="Tourism">Hospitality and Tourism</option>
            <option value="Consultancy">Consultancies</option>
             <option value="Transportation">Transportation and Logistics</option>
              <option value="RealEstate">Real Estate and Construction</option>

</select></div> <br />
 <div className="d-flex" style={{flexWrap:'wrap'}}>
      <button type='button' className='btn btn-success'  onClick={()=>setaddvideo(prev=>prev+1)}>ADD MORE VIDEO+</button>
     <div className="d-flex flex-column">
     {[...Array(addvideo)].map((e,i)=>
 <>
      <div className="form-group d-flex ">
  <label htmlFor="">Upload Video</label>
<input id={`video${i}`} type="file" className='form-control'  accept="video/*" onChange={(e) => {
  const file = e.target.files[0];
  const fileSize = file.size / 1024 / 1024; // Convert file size to MB

  if (fileSize <= 100) {
    setvideo((prev) => {
      const updatedvideo = [...prev];
      updatedvideo[i] = file;
      return updatedvideo;
    });
      if(videouploaderr==i){
      setvideouploaderr()
 
      }
  } else {
    setvideouploaderr(i)
    e.target.value = null;
      setvideo((prev) => {
      const updatedvideo = [...prev];
      updatedvideo.splice(i,1) 
      return updatedvideo;
    });
  }
}}
 required={i>0} />
<button type='button'  className='btn btn-danger'  style={{borderRadius:'50%'}} onClick={()=>{setaddvideo(prev=>prev-1);
let value = document.getElementById(`video${addvideo-1}`).value;
setvideo(prev=>prev.filter(item=>!value.includes(item.name)))
}}>X</button>
</div>
{(videouploaderr!=undefined&&videouploaderr==i)&&<><br /><p className='text-danger'>File Size exceeds 100MB </p></>}
 </>
     )}

     </div>
 </div>
 <br />
<div className="d-flex" style={{flexWrap:'wrap'}}>
   <button type='button' className='btn btn-success'  onClick={()=>setaddimage(prev=>prev+1)}>ADD MORE IMAGE+</button>
<div className="d-flex flex-column">

  {[...Array(addimage)].map((e,i)=>
<>
    <div className="d-flex " >
  <label htmlFor="" className=''>Upload Image</label>
<input id={`image${i}`} type="file" className='form-control' accept="image/*"   onChange={(e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024; // Convert file size to MB

    if (fileSize <= 10) {
      setimage((prev) => {
        const updatedimage = [...prev];
        updatedimage[i] = file;
        return updatedimage;
      });
      if(imguploaderr==i){
      setimguploaderr()
 
      }
      
    } else {
setimguploaderr(i)
      e.target.value = null;
       setimage((prev) => {
        const updatedimage = [...prev];
        updatedimage.splice(i,1)
        return updatedimage;
      });
    }
  }} required={i>0}/>
<button type='button'  className='btn btn-danger'  style={{borderRadius:'50%'}} onClick={()=>{setaddimage(prev=>prev-1);
let value = document.getElementById(`image${addimage-1}`).value;
setimage(prev=>prev.filter(item=>!value.includes(item.name)))
}}>X</button>

</div>
{(imguploaderr!=undefined&&imguploaderr==i)&&<><br /><p className='text-danger'>File Size exceeds 10MB </p></>}
</>
  )}
</div>
</div> <br />
<div className="d-flex" style={{flexWrap:'wrap'}}>
   <button type='button' className='btn btn-success'  onClick={()=>setaddgdrive(prev=>prev+1)}>ADD MORE DOC+</button>
<div className="d-flex flex-column">

  {[...Array(addgdrive)].map((e,i)=>
  <div className="d-flex ">
  <label htmlFor="" className=''>Upload Document</label>
<input type="text" id={`gdrive${i}`} placeholder='Paste Only Gdrive Link' className='form-control'  onChange={(e)=>setgdrive( (prev)=>{ 
  const updatedGdrive = [...prev];
  updatedGdrive[i] = e.target.value;
  return updatedGdrive;})} required={i>0}/>
<button type='button'  className='btn btn-danger'  style={{borderRadius:'50%'}} onClick={()=>{setaddgdrive(prev=>prev-1)
let value = document.getElementById(`gdrive${addgdrive-1}`).value;
setgdrive(prev=>prev.filter(item=>!value.includes(item.name)))
}}>X</button>
</div>
  )}
  <p className='text-secondary'>Any Document can be uploaded only with Google Drive link Enable 'anyone with link' option</p>
</div>
</div> <br />
<div className='w-100 d-flex flex-column align-items-start px-2'>
        <h4>Target Users</h4> <p className='text-secondary'>Enter your target users / customers / beneficiaries of your problem statement</p> 
      </div>
      <textarea className='form-control' style={{height:'100px'}} type="text" onChange={(e)=>setusers(e.target.value)} placeholder='Target users' /> <br />
      <div className='w-100 d-flex flex-column align-items-start px-2'>
        <h4>Adoption Barriers</h4> <p className='text-secondary'>Enter your current adoption barriers / constraints , explain why it is still not implemented , if any</p> 
      </div>
      <textarea className='form-control' style={{height:'200px'}} type="text" onChange={(e)=>setbarriers(e.target.value)} placeholder='Adoption Barriers if any' /> <br />
      <div className='w-100 d-flex flex-column align-items-start px-2'>
        <h4>Results </h4> <p className='text-secondary'>Enter your impact / expected outcomes / benefits of your solution</p> 
      </div>
      <textarea className='form-control' style={{height:'100px'}} type="text" onChange={(e)=>setimpact(e.target.value)} placeholder='Impact of your solution' /> <br />

<br /><br />
<div className="border border-secondary text-secondary">
     <ol type="I" style={{textAlign:'left',lineHeight:'30px'}}>
  <li>You can pour your startup ideas here with atmost detailing and get experts review !</li>
  <li>Make sure to pitch your problem statement and solution clearly.</li>
  <li>You can add documents , videos and images (if any) for precise explanation.</li>
    <li>You can pitch any creative idea of all domains.</li>
    <li>Make sure to explain your solution's use case, impact and inspiration under good research with clarity and gain more points!</li>
  <li>You are requested to not pitch unparliamentary ideas , if in case<p className='text-danger' style={{display:'inline'}}> serious actions will be taken - can extend upto to blocking user's account. </p></li>
</ol>
<h5 className='text-secondary'> - Kindly follow the above points -</h5>
</div> <br />
<input type="submit" value="CREATE" className='btn btn-success' disabled={disableBTN} />
<p className='text-secondary'>Press Create to create new pitch </p>
      </form> <br />
      <p className='text-dark border border-dark'>Once you have created a pitch it will be evaluated and added to global pitches . </p>
    </div>
  )
}

export default UserPitch
