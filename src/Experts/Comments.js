import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import moment from 'moment';
import backimage from '../Assets/sign-out.png'
import backimage1 from '../Assets/arrow-up.png'
import globepic from '../Assets/globe.png'
import PitchCommentTemplate from './pitchCommentTemplate';
import { useSelector } from 'react-redux';

const cryptojs = require("crypto-js")
function Comments() {

        const comments = useSelector((state)=>state.expertcomment.value)
          const sortedPitches = [...comments];
  const[email,setEmail]=React.useState("")
      const[userid,setuserid] = React.useState("")
    const[startSearch,setStartSearch] = React.useState("")
        const containerRef = React.useRef(null);
           const[noofpitch,setnoofpitch] = React.useState(5)
    const[search,setsearch] = React.useState("")
    const[sortPitch,setsortPitch] = React.useState("")
   
       React.useEffect(()=>{
   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined&&sessionStorage.getItem('userid')!==null&&sessionStorage.getItem('userid')!==undefined){
    var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
var bytesuserid = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('userid')),'kowshik123')
setuserid(()=>bytesuserid.toString(cryptojs.enc.Utf8))
}

       },[])


  
  return (
    <div className=' d-flex flex-column align-items-center bg-light my-2 ' style={{width:'95%',boxShadow:' 0 0 10px rgba(3, 201, 169, 0.2)'}}>
       <br />
      <><h3 className='text-success bg-light'>YOUR COMMENTED PITCHES</h3></>
         <div className="w-100 d-flex justify-content-end">    <Link to="/sharktankexpert/" className='btn btn-primary d-flex align-items-center'> <img src={backimage} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(180deg)'}} alt="" /> &nbsp;BACK TO PITCHES</Link></div> <br />
   <div style={{background:'rgba(38, 194, 129, 1)'}} className='d-flex  flex-column align-items-center w-100 border border-dark'><div className='text-light d-flex align-items-center' style={{fontSize:'30px',fontFamily:'Nunito',fontWeight:200}}>StartUp Ideas From Students Across The Globe &nbsp; <img src={globepic} style={{width:30,height:30}} alt="" /> </div>
    <div className='w-50 d-flex justify-content-end'> <hr  style={{width:'15%',background:'white',border:'0.5px solid brown'}} size="15"   /> </div>
 
    </div>
    <div ref={containerRef} style={{height:'800px',overflowY:'scroll',width:'100%'}} className='pitchscroll d-flex flex-column align-items-center'> {comments.length>0?!startSearch?
      sortPitch=="Latest"?  sortedPitches.sort((a, b) => moment(a.createdAt).diff(moment(b.createdAt))).reverse().map((val,ind)=>{

return <PitchCommentTemplate val={val} userid={userid} email={email} />
       } ):(sortPitch!="Latest"&&sortPitch.length>0)?(comments.filter((val) => val.category.toLowerCase().includes(sortPitch.toLowerCase())).map((val,ind)=>{

return <PitchCommentTemplate val={val} userid={userid} email={email} />
       } )):
       <>
         {comments.slice(noofpitch-5,noofpitch).map((val,ind)=>{

return <PitchCommentTemplate val={val} userid={userid} email={email} />


       } )}
       
        {(sortPitch.length==0&&!startSearch)&& <button  onClick={()=>{
if(noofpitch>comments.length)
setnoofpitch(5)
else
setnoofpitch(prev=>prev+5)

  containerRef.current.scrollTop = 0;
}} className='btn btn-primary my-2 d-flex align-items-center'>
 <h4>N E X T <img src={backimage1} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(90deg)'}} alt="" /> </h4>
</button> }
       </>
      :      comments.filter((val) => val.title.toLowerCase().includes(search.toLowerCase())).map((val,ind)=>{

return <PitchCommentTemplate val={val} userid={userid} email={email} />
       } )
      : <b className='text-danger'>Could not find any commented pitch !</b>}
         
      </div>
    <div style={{background:'rgba(38, 194, 129, 1)'}}  className={window.innerWidth>500?'w-100 d-flex justify-content-evenly border border-dark p-3 text-light':'w-100 d-flex flex-column align-items-center border border-dark text-light'}>
       <div className={window.innerWidth>500?'d-flex align-items-center':'d-flex flex-column align-items-center'}>
           {window.innerWidth<500&& <>&nbsp;</>}
         <label htmlFor="">SEARCH</label>    {window.innerWidth>500&& <>&nbsp;</>}<input className='form-control' type="text" onChange={(e)=>{
        if(!e.target.value.length>0){
          setStartSearch(false)
        }else{
          setsearch(e.target.value);setStartSearch(true)
        } containerRef.current.scrollTop = 0;
        }} placeholder='Enter Pitch Title' />
       </div>
      <div className={window.innerWidth>500?'d-flex align-items-center':'d-flex flex-column align-items-center'}>  <label htmlFor="">SORT </label>    {window.innerWidth>500&& <>&nbsp;</>}<select className='form-select' name="" onChange={(e)=>{setsortPitch(e.target.value); containerRef.current.scrollTop = 0;}} id="">
        <option value=""></option>
          <option value="Latest">Latest</option>
           <option value="Retail">Retail and Consumer Goods</option>
    <option value="Finance">Financial Services</option>
      <option value="IT">Technology and Information Technology (IT)</option>
        <option value="Health">Healthcare and Pharmaceuticals</option>
         <option value="Manufacture">Manufacturing and Industrial</option>
          <option value="Energy">Energy and Utilities</option>
           <option value="Tourism&Hospitality">Hospitality and Tourism</option>
            <option value="Consultancy">Consultancies</option>
             <option value="Transportation">Transportation and Logistics</option>
              <option value="RealEstate">Real Estate and Construction</option>
        </select></div>
      </div>
    </div>
  )
}

export default Comments
