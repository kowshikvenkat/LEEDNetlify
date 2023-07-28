import React from 'react'
import axios from 'axios'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import backimage from '../../Assets/sign-out.png'
import uparrow from '../../Assets/arrow-up.png'
import DateToDay from '../DateToDay';
import PitchSaveTemplate from './PitchSaveTemplate';
import { useSelector ,useDispatch} from 'react-redux';
import { setsaved ,setsavedpitch} from '../../Controllers/redux'
import '../../Views/ST.css'
const cryptojs = require("crypto-js")
function Savedpitch() {
const dispatch = useDispatch()
         const saved = useSelector((state)=>state.saved.value)
      const[clickedID,setclickedID] = React.useState("")
             const[userid,setuserid] = React.useState("")
    // React.useEffect(()=>{
    //    if(userid){
    
    //   axios.post("http://localhost:5000/SavedPitchST",{
    //     id:userid
    //   }).then((res)=>{    setSaved(res.data.savedId);setsavedpitch(res.data.docs)})
    // }
    // },[userid])
           React.useEffect(()=>{
   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined&&sessionStorage.getItem('userid')!==null&&sessionStorage.getItem('userid')!==undefined){

var bytesuserid = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('userid')),'kowshik123')
setuserid(()=>bytesuserid.toString(cryptojs.enc.Utf8))
}
       },[])
  React.useEffect(()=>{
if(userid){
    axios.post("https://leednetlifybackend.onrender.com/SavedPitchST",{
    id:userid
   } ).then((res)=>{
    dispatch(setsaved(res.data.savedId))
  dispatch(setsavedpitch(res.data.docs))
  })
}
  },[userid])
     const savedpitch = useSelector((state)=>state.savedpitch.value)
  
  return (
    <div className={'w-100 d-flex flex-column align-items-center'}>
    <br />
      <><h3 className='text-success bg-light'>YOUR SAVED PITCHES</h3></>
    <div className="w-75 d-flex justify-content-end my-3">    <Link to="/sharktank/" className='btn btn-primary d-flex align-items-center'> <img src={backimage} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(180deg)'}} alt="" /> &nbsp;BACK TO PITCHES</Link></div>
   <div className="w-100">
       {
        savedpitch.map((val,ind)=>{


    
  
return <>
<div className={window.innerWidth>500?'savedbox w-75 d-flex justify-content-around align-items-center':'savedbox d-flex justify-content-around align-items-center'} style={{height:'80px',borderBottomRightRadius:'20px',borderTopRightRadius:'20px',width:window.innerWidth<500&&'95%'}} onClick={()=>{
  if(!clickedID.includes(val['_id']))
    setclickedID(val['_id'])
    else
    setclickedID("")
    }}>
<div className={window.innerWidth>500?'d-flex justify-content-between align-items-center w-50':'d-flex justify-content-between align-items-center w-100'}> <b className='text-success'>{val['title']}</b> <div className='text-success'>{val['name']}</div> </div>
<div className='d-flex justify-content-between align-items-center w-25'> <div className='text-secondary'>
  {DateToDay(val['createdAt'].slice(0,10))}
</div>
<img src={uparrow} style={{width:20,height:20,transition:'0.2s ease',transform:clickedID.includes(val['_id'])&&'rotate(180deg)'}} alt="" />
 </div>
</div>
<div className="w-100 d-flex justify-content-center">
  {clickedID ==val["_id"] && <PitchSaveTemplate  val={val} userid={userid}/>}
</div><br />
         </>
         
    
       } )
      }
   </div>
    </div>
  )
}

export default Savedpitch
