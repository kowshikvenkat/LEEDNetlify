import React from 'react'
import moment from 'moment';
import '../../Views/ST.css'
import discussionpic from '../../Assets/discussion.png'
import { useSelector } from 'react-redux';
import globepic from '../../Assets/globe.png'
import PitchTemplate from './pitchTemplate';
import backimage from '../../Assets/arrow-up.png'
const cryptojs = require("crypto-js")

function Pitches({expert}) {
   const pitches = useSelector((state) => {
    if (!expert) {
      return state.pitch.value;
    } else {
      return state.expertpitch.value;
    }
  });
  const sortedPitches = [...pitches];
    const[noofpitch,setnoofpitch] = React.useState(5)
    const[email,setEmail] = React.useState("")
    const[userid,setuserid] = React.useState("")
    const[startSearch,setStartSearch] = React.useState("")
    const containerRef = React.useRef(null);
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
     
//     React.useEffect(()=>{
  
// if(email){
    
//   if(!expert){

//    axios({
//     method: "GET",
//     url: "http://localhost:5000/pitchesST",
  
//   }).then((res)=>{
//     setPitches(res.data.docs)

//   })
// }
// else{
//     axios.post("http://localhost:5000/expertpitchesST",{
//       email:email
//     }).then((res)=>{
//     setPitches(res.data.docs)

//   })
// }
// }
   
//     },[email])




  return (
    <div  className=' d-flex flex-column align-items-center bg-light my-2 ' style={{width:'95%',boxShadow:' 0 0 10px rgba(3, 201, 169, 0.2)'}}>
    {expert&&<h2 style={{background:'rgba(3, 201, 169, 0.2)',padding:5,borderRadius:5,fontWeight:700,color:'white',textShadow:'0 1px 3px black'}}>SHARKTANK <img src={discussionpic} style={{width:80,height:80}} alt="" /> PITCHES </h2>}
   <div style={{background:'rgba(38, 194, 129, 1)'}} className='d-flex  flex-column align-items-center w-100 border border-dark'><div className='text-light d-flex align-items-center' style={{fontSize:'30px',fontFamily:'Nunito',fontWeight:200}}>StartUp Ideas From Students Across The Globe &nbsp; <img src={globepic} style={{width:30,height:30}} alt="" /> </div>
    <div className='w-50 d-flex justify-content-end'> <hr  style={{width:'15%',background:'white',border:'0.5px solid brown'}} size="15"   /> </div>
    </div>
     
  <div ref={containerRef} style={{height:'800px',overflowY:'scroll',width:'100%'}} className='pitchscroll d-flex flex-column align-items-center  '> 
       {pitches.length>0? !startSearch?
      sortPitch=="Latest"?  sortedPitches.sort((a, b) => moment(a.createdAt).diff(moment(b.createdAt))).reverse().map((val,ind)=>{

return <PitchTemplate val={val} userid={userid} expert={expert} email={email}/>
       } ):(sortPitch!="Latest"&&sortPitch.length>0)?(pitches.filter((val) => val.category.toLowerCase().includes(sortPitch.toLowerCase())).map((val,ind)=>{

return <PitchTemplate val={val} userid={userid} expert={expert} email={email}/>
       } )):
       <>
       {pitches.slice(noofpitch-5,noofpitch).map((val,ind)=>{
return<PitchTemplate val={val} userid={userid} expert={expert}  email={email}/>
       } )}
        {(sortPitch.length==0&&!startSearch)&& <button  onClick={()=>{
if(noofpitch>pitches.length)
setnoofpitch(5)
else
setnoofpitch(prev=>prev+5)

  containerRef.current.scrollTop = 0;
}} className='btn btn-primary my-2 d-flex align-items-center'>
 <h4>N E X T <img src={backimage} style={{width:20,height:20,filter:'invert(100%)',transform:'rotate(90deg)'}} alt="" /> </h4>
</button> }
       </>:      pitches.filter((val) => val.title.toLowerCase().includes(search.toLowerCase())).map((val,ind)=>{

return <PitchTemplate val={val} userid={userid } expert={expert} email={email} />
       } )
      : <b className='text-danger'>No Pitch to Report !</b> }
     
  </div>
     <div style={{background:'rgba(38, 194, 129, 1)'}}  className={window.innerWidth>500?'w-100 d-flex justify-content-evenly border border-dark p-3 text-light':'w-100 d-flex flex-column align-items-center border border-dark text-light'}>
       <div className={window.innerWidth>500?'d-flex align-items-center':'d-flex flex-column align-items-center'}>
         {window.innerWidth<500&& <>&nbsp;</>}
         <label htmlFor="">SEARCH</label>  {window.innerWidth>500&& <>&nbsp;</>}<input className='form-control' type="text" onChange={(e)=>{
        if(!e.target.value.length>0){
          setStartSearch(false)
        }else{
          setsearch(e.target.value);setStartSearch(true)
        }
          containerRef.current.scrollTop = 0;
        }} placeholder='Enter Pitch Title' />
       </div>
    
      <div className={window.innerWidth>500?'d-flex align-items-center':'d-flex flex-column align-items-center'}>  <label htmlFor="">SORT </label>  {window.innerWidth>500&& <>&nbsp;</>}<select className='form-select' name="" onChange={(e)=>{setsortPitch(e.target.value);  containerRef.current.scrollTop = 0;}} id="">
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

export default Pitches;
