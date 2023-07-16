import React from 'react'
import axios from 'axios'
function Createevents({Email}) {
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
  return (
    <div className='border border-warning p-3 '>
       
      
      <form name="myform" className='d-flex flex-column align-items-center' action="" onSubmit={Eventhandler}>

    <label htmlFor="" style={{fontSize:30}}>TITLE </label><input className='form-control' style={{width:'75%',height:'50px',fontSize:25}} type="text" onChange={(e)=>setTitle(e.target.value)} required/> <br />
  <label htmlFor="" style={{fontSize:30}}>QUOTES </label><textarea className='form-control' style={{width:'75%',fontSize:20}} type="text" onChange={(e)=>setQuotes(e.target.value)} required/> <br />

      <div className="d-flex w-75 justify-content-start">
         <button type='button' className='btn btn-success'  onClick={()=>setaddvideo(prev=>prev+1)}>ADD+</button>
     <div className="d-flex flex-column ">
       {[...Array(addvideo)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',height:'100%',display:'flex',alignItems:'center',padding:'1px',fontFamily:'Inter'}}>        <label htmlFor="" style={{fontSize:20}}>UPLOAD VIDEO(max 100 MB) :&nbsp;</label><input type="file" accept='video/*' onChange={(e)=>setvideofile((prev)=>prev.concat(e.target.files[0]))} />
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddvideo(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
      <div className="d-flex w-75 justify-content-start">
         <button type='button' className='btn btn-success' onClick={()=>setaddimage(prev=>prev+1)}>ADD+</button>
     <div className="d-flex flex-column">
       {[...Array(addimage)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',height:'100%',display:'flex',alignItems:'center',padding:'1px',fontFamily:'Inter'}}>        <label style={{fontSize:20}}  htmlFor="">UPLOAD IMAGE(max 10 MB) :&nbsp;</label><input type="file" accept='image/*' onChange={(e)=>setimagefile((prev)=>prev.concat(e.target.files[0]))} required/>
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddimage(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
   
  
     <label htmlFor="" style={{fontSize:30}}>DESCRIPTION</label><textarea style={{width:'75%',fontSize:20}} type="text" className='form-control' onChange={(e)=>setDesc(e.target.value)} required/> <br />
     <label style={{fontSize:30}} htmlFor="">VENUE</label><input style={{width:'75%',fontSize:20,height:'50px'}} className='form-control' type="text" onChange={(e)=>setVenue(e.target.value)} required/> <br />
        <label style={{fontSize:30}} htmlFor="">START DATE</label><input style={{width:'75%',fontSize:20,height:'50px'}} onChange={(e)=>setstartDate(e.target.value)} type="datetime-local" className='form-control' required/> <br />
          <label style={{fontSize:30}} htmlFor="">END DATE</label><input style={{width:'75%',fontSize:20,height:'50px'}}  onChange={(e)=>setenddate(e.target.value)} type="datetime-local" className='form-control' required/> <br />
           <label style={{fontSize:30}}  htmlFor="">REGISTERATION FORM(Upload Link) </label>
<input style={{width:'75%',fontSize:20,height:'50px'}} className='form-control' onChange={(e)=>setLink(e.target.value)} type="text" required/> <br />
    
         <div className="d-flex w-75 justify-content-start">
         <button type='button' className='btn btn-success' onClick={()=>setaddinfo(prev=>prev+1)}>ADD+</button>
     <div className="d-flex flex-column">
       {[...Array(addinfo)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',height:'100%',display:'flex',alignItems:'center',padding:'1px',fontFamily:'Inter'}}>        <label style={{fontSize:20}}htmlFor="" className='text-nowrap'>ADDITIONAL INFO :&nbsp;</label><input name={"info_name"+i} placeholder={"name"} type="text" className='form-control'/>&nbsp;:&nbsp;<input name={"info_link"+i} placeholder={"link"} type="text" className='form-control'/>
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddinfo(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
     <div className="d-flex w-75 justify-content-start">
         <button type='button' className='btn btn-success' onClick={()=>setaddbenefits(prev=>prev+1)}>ADD+</button>
     <div className="d-flex flex-column w-100">
       {[...Array(addbenefits)].map((e,i)=>
<div style={{backgroundColor:'rgba(200,200,200,0.5)',height:'100%',display:'flex',alignItems:'center',padding:'1px',fontFamily:'Inter',width:'100%'}}>        <label className='text-nowrap' style={{fontSize:20,}} htmlFor="">BENEFITS :&nbsp;</label><textarea style={{width:'90%',height:'50px'}} name={"benefits"+i} placeholder={'Add Benefits'} type="text" className='form-control'/>
<button type='button'  className='bg-danger'  style={{borderRadius:'50%',border:'none',color:'white'}} onClick={()=>setaddbenefits(prev=>prev-1)}>X</button>
</div> 
      )}
     </div>
    </div><br />
                       <div className="d-flex w-75 justify-content-start">
                          <button type='button' className='btn btn-success' onClick={()=>setaddpdf(prev=>prev+1)}>ADD+</button>
<div className="d-flex flex-column">
        {[...Array(addpdf)].map((e,i)=>
<div style={{height:'100%',display:'flex',alignItems:'center',padding:'1px',fontFamily:'Inter',backgroundColor:'rgba(200,200,200,0.5)'}}>        <label style={{fontSize:20,}}htmlFor="">UPLOAD PDF(Only Paste google drive link and enable <i>` anyone can view`</i>) :</label><input className='form-control' type="text" onChange={(e)=>setpdffile(prev=>prev.concat(e.target.value))} />
<button type='button' style={{borderRadius:'50%',border:'none',color:'white'}} className='bg-danger'  onClick={()=>setaddpdf(prev=>prev-1)}>X</button>
</div>
      )}
</div>
                       </div> <br /><br />
                <input type="submit"  className='btn btn-primary w-25' style={{fontSize:20,boxShadow:'0 0 5px grey'}} value="Add Event" />
      </form>
    </div>
  )
}

export default Createevents
