import React from 'react'
import '../Views/sharktank.css'
import Modalpopup from '../Models/modal'
import axios from 'axios'
import DateToDay from '../Models/DateToDay'
import Mail from '../Controllers/mail'
import uparrow from '../Views/up-arrow.png'
import uparrow1 from '../Views/up-arrow (1).png'
import commentpic from '../Views/comment.png'
import "react-chat-elements/dist/main.css"
import { MessageBox } from 'react-chat-elements'
import { ModalComment } from '../Models/modal'
const cryptojs = require("crypto-js")
function Sharktankexpert() {
const [userName,setuserName] = React.useState("")
const [Email,setEmail] = React.useState("")
const [userProfilePic,setUserProfilePic] = React.useState("")
   const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
   const[imgloaded,setimgloaded] = React.useState(false);
    const[Verifieddata,setverifieddata] = React.useState([])
      const[Upvoted,setupvote] = React.useState({})
  const[commentopen,setcommentopen] = React.useState({})
  
   React.useEffect(()=>{
         axios({
    method: "GET",
    url: "http://localhost:5000/verifiedpitches",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
   setverifieddata(res.data.verifieddata)
  });
   },[])
React.useEffect(()=>{
  //decrypting  
  if(sessionStorage.getItem('pic')!==null&&sessionStorage.getItem('pic')!==undefined){
 
var bytes = cryptojs.AES.decrypt(sessionStorage.getItem('name'),'kowshik123')
setuserName(()=> bytes.toString(cryptojs.enc.Utf8))
var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
var bytesimage = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('pic')),'kowshik123')
setUserProfilePic(()=>bytesimage.toString(cryptojs.enc.Utf8))

}

})

  return (
    <div>
      <h3>EXPERT'S SESSION</h3>
    <div className='Sharktank'>
  
      <div id='User_profile' className='User_profile'>
        <img width={200} height={200} src={userProfilePic} style={{borderRadius:"50%"}} alt="Profile Pic" onLoad={
          ()=>setimgloaded(true)
        }/>
        <h4>{userName}</h4>
          <div className='maila' style={{position:'relative'}}>
               <a href="mailto:kowshikvenkat26@gmail.com" target="_blank">User's mail</a>
<p className="mailid" style={{bottom:15,left:-20,display:'flex',position:'absolute',backgroundColor:'white',borderRadius:'10px',border:'1px solid black'}}>
In case couldnt open link, <br />
Go to Gmail, On right side of URL's address bar, <br />
click double Diamond ICON ,<br />
select "Allow to open all links"<br />
</p>
           </div>
            
            
                 <p>User Name</p>
                    <p>User Name</p>
      </div>
      <div id='pitch_container' className="pitch_container">

    <div className="pitch"> {Verifieddata.map((value,index)=>
 <div>
   <div className="d-flex pitch_profile justify-content-between align-items-center">
     <div className="d-flex">
       <img src={value['pic']} style={{borderRadius:"50%",width:40,height:40}} alt="" />&nbsp;&nbsp;
        <i><h4 className='text-muted'>{value['name']}</h4></i>
     </div>
     <div className=''>   <i className='text-muted '>{DateToDay(value['createdAt'])}</i></div>
   </div>
   
        <h4>{value['title']}</h4> 
    <p><pre style={{fontFamily:"inherit"}}>    {value['desc']}</pre> </p>
       <div className='taskbar d-flex justify-content-around' style={{boxShadow:'0 0 4px grey'}}>
      <div className='d-flex align-items-center'>

     <button className='btn btn-light' onClick={()=>{if(Upvoted.id!=value['_id'])
      {
        setupvote({});setupvote({id:value['_id']})
      }else{
        setupvote({})
      }}} >   <img width={10} height={10} src={Upvoted.id==value['_id']? uparrow1:uparrow} alt="" /></button>
           <div>{value['count']}</div>
      </div>
      <div  onClick={()=>{if(commentopen.id!=value['_id'])
      {
        setcommentopen({});setcommentopen({id:value['_id']})
      }else{
        setcommentopen({})
      }
      }} className='commentsbtn d-flex align-items-center'>
     <img src={commentpic} width={30} height={30} alt="" />
        <button className='btn btn-light'>Comments</button>
      </div>
    </div>
    {commentopen.id==value['_id']&&<div className='d-flex flex-column justify-content-center align-items-center'>
   <div className="w-100 ">
     {value['comments'].length>0 ?value['comments'].map((val,ind)=>
<MessageBox 
  position={'left'}
  type={'text'}
  styles={{width:'90%'}}
  title={<div><img src={val['commentedpic']} width={20} height={20} style={{borderRadius:"50%"}} />
  {val['commntedname']}
  </div>}
  text={val['commenttext']}
  
/>
    ):<i>No comments yet !</i>}
   </div>
    <br />

<ModalComment title={value['title']} desc={value['desc']} name={value['name']} pic={value['pic']} peerid={value['_id']} expertid={Email}/>
    </div>}
    </div>
    )} </div>
    
      </div>
      <div id='Other_profile' className="Other_profile">
         <div style={{fontStyle:'italic'}} className='d-flex flex-column justify-content-around align-items-center h-100 bg-success'>
       <p> ``Get through all business pitches <br />
        from other peers </p>
        <ul  style={{textAlign:'left'}}>
          <li>Add Pitch</li>
          <li>Connect</li>
          <li>Validate your pitch</li>
          <li>Get experts advice</li>
        </ul>
 <div  >
       <q>
        The best startups generally come from somebody needing to scratch an itch.
      </q> <br />
      <p style={{textAlign:'right'}}>-Michael Arrington, TechCrunch founder``</p>
 </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sharktankexpert;

