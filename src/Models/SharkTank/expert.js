import axios from 'axios'
import React from 'react'
import './expert.css'
function ExpertReportST({email,pitchid}) {
  //THIS COMPONENT MUST POPUP
  const[clarity,setclarity] = React.useState(0)
  const[research,setresearch] = React.useState(0)
  const[solution,setsolution] = React.useState(0)
  const[usecase,setusecase] = React.useState(0) 
  const[barriers , setbarriers] = React.useState(0)
    const[problem , setproblem] = React.useState(0)
    const[unique,setunique ] = React.useState(0)
    const[inspiration,setinspiration] = React.useState(0)
    const[future,setfuture] = React.useState(0)
    const[impact,setimpact] = React.useState(0)
  const[comment,setcomment] = React.useState("")
function Submitted(e){
  e.preventDefault()
axios.post("http://localhost:5000/addreportST",{
  expertemail:email,
  pitchid:pitchid,
  one:problem,
  two:inspiration,
  three:usecase,
  four:solution,
  five:unique,
  six:barriers,
  seven:research,
  eight:impact,
  nine:clarity,
  ten:future
})
  }
  function CommentSubmitted(e){
    e.preventDefault()
axios.post("http://localhost:5000/addcommentST",{
    expertemail:email,
      pitchid:pitchid,
      comment:comment
})
  }
  return (
    <div  className='w-100 d-flex flex-column align-items-center' >
    <hr style={{width:'100%'}}/>
    <h3 style={{fontWeight:700}}>ADD REPORT</h3>
      <form action="" style={{overflowX:window.innerWidth<500&&'scroll'}} className='w-100 d-flex justify-content-center' onSubmit={Submitted}>
      <table className=' ' style={{width:'90%',boxShadow:'0 0 5px grey',overflowX:window.innerWidth<500&&'scroll'}}>
        <tr><th style={{width:'25%'}}>Details</th>
        <th style={{width:'15%'}}>1 Point</th>
             <th style={{width:'15%'}}>2 Points</th>
                  <th style={{width:'15%'}}>3 Points</th>
                      <th style={{width:'15%'}}>4 Points</th>
                          <th style={{width:'15%'}}>5 Points</th>
        </tr>
       
            <tr>
          <td >Problem Statement</td>
          <td><input type="radio"   name='problem' value='1' onChange={(e)=>setproblem(e.target.value)} required/></td>
           <td><input type="radio" name='problem' value='2' onChange={(e)=>setproblem(e.target.value)}/></td>
            <td><input type="radio" name='problem' value='3' onChange={(e)=>setproblem(e.target.value)}/></td>
            <td><input type="radio" name='problem' value='4' onChange={(e)=>setproblem(e.target.value)}/></td>
            <td><input type="radio" name='problem' value='5' onChange={(e)=>setproblem(e.target.value)}/></td>
        </tr>
           <tr>
          <td>Inspiration</td>
          <td><input type="radio"  name='inspiration' onChange={(e)=>setinspiration(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='inspiration' onChange={(e)=>setinspiration(e.target.value)} value='2'/></td>
            <td><input type="radio" name='inspiration' onChange={(e)=>setinspiration(e.target.value)} value='3'/></td>
              <td><input type="radio" name='inspiration' onChange={(e)=>setinspiration(e.target.value)} value='4'/></td>
                <td><input type="radio" name='inspiration' onChange={(e)=>setinspiration(e.target.value)} value='5'/></td>
        </tr>
             <tr>
          <td>Use Case & Beneficiaries</td>
          <td><input type="radio"   name='usecase' value='1' onChange={(e)=>setusecase(e.target.value)} required/></td>
           <td><input type="radio" name='usecase' value='2' onChange={(e)=>setusecase(e.target.value)}/></td>
            <td><input type="radio" name='usecase' value='3' onChange={(e)=>setusecase(e.target.value)}/></td>
                <td><input type="radio" name='usecase' value='4' onChange={(e)=>setusecase(e.target.value)}/></td>
                    <td><input type="radio" name='usecase' value='5' onChange={(e)=>setusecase(e.target.value)}/></td>
        </tr>
           <tr>
          <td>Solution</td>
          <td><input type="radio"  name='solution' onChange={(e)=>setsolution(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='solution' onChange={(e)=>setsolution(e.target.value)} value='2'/></td>
            <td><input type="radio" name='solution' onChange={(e)=>setsolution(e.target.value)} value='3'/></td>
                <td><input type="radio" name='solution' onChange={(e)=>setsolution(e.target.value)} value='4'/></td>
                    <td><input type="radio" name='solution' onChange={(e)=>setsolution(e.target.value)} value='5'/></td>
        </tr>
           <tr>
          <td>Uniqueness</td>
          <td><input type="radio"  name='unique' onChange={(e)=>setunique(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='unique' onChange={(e)=>setunique(e.target.value)} value='2'/></td>
            <td><input type="radio" name='unique' onChange={(e)=>setunique(e.target.value)} value='3'/></td>
               <td><input type="radio" name='unique' onChange={(e)=>setunique(e.target.value)} value='4'/></td>
                  <td><input type="radio" name='unique' onChange={(e)=>setunique(e.target.value)} value='5'/></td>
        </tr>
           <tr>
          <td>Barriers & constraints</td>
          <td><input type="radio"  name='barriers' onChange={(e)=>setbarriers(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='barriers' onChange={(e)=>setbarriers(e.target.value)} value='2'/></td>
            <td><input type="radio" name='barriers' onChange={(e)=>setbarriers(e.target.value)} value='3'/></td>
              <td><input type="radio" name='barriers' onChange={(e)=>setbarriers(e.target.value)} value='4'/></td>
                <td><input type="radio" name='barriers' onChange={(e)=>setbarriers(e.target.value)} value='5'/></td>
        </tr>
          <tr>
          <td>Research</td>
          <td><input type="radio"  name='research' onChange={(e)=>setresearch(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='research' onChange={(e)=>setresearch(e.target.value)} value='2'/></td>
            <td><input type="radio" name='research' onChange={(e)=>setresearch(e.target.value)} value='3'/></td>
               <td><input type="radio" name='research' onChange={(e)=>setresearch(e.target.value)} value='4'/></td>
                  <td><input type="radio" name='research' onChange={(e)=>setresearch(e.target.value)} value='5'/></td>
        </tr>
          <tr>
          <td>Solution Impact</td>
          <td><input type="radio"  name='impact' onChange={(e)=>setimpact(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='impact' onChange={(e)=>setimpact(e.target.value)} value='2'/></td>
            <td><input type="radio" name='impact' onChange={(e)=>setimpact(e.target.value)} value='3'/></td>
                  <td><input type="radio" name='impact' onChange={(e)=>setimpact(e.target.value)} value='4'/></td>
                        <td><input type="radio" name='impact' onChange={(e)=>setimpact(e.target.value)} value='5'/></td>
        </tr>
        <tr>
          <td>Overall Clarity</td>
          <td><input type="radio"   name='clarity' value='1' onChange={(e)=>setclarity(e.target.value)} required/></td>
           <td><input type="radio" name='clarity' value='2' onChange={(e)=>setclarity(e.target.value)}/></td>
            <td><input type="radio" name='clarity' value='3' onChange={(e)=>setclarity(e.target.value)}/></td>
             <td><input type="radio" name='clarity' value='4' onChange={(e)=>setclarity(e.target.value)}/></td>
              <td><input type="radio" name='clarity' value='5' onChange={(e)=>setclarity(e.target.value)}/></td>
        </tr>
           
             <tr>
          <td>Next Step</td>
          <td><input type="radio"  name='future' onChange={(e)=>setfuture(e.target.value)} value='1' required/></td>
           <td><input type="radio" name='future' onChange={(e)=>setfuture(e.target.value)} value='2'/></td>
            <td><input type="radio" name='future' onChange={(e)=>setfuture(e.target.value)} value='3'/></td>
                 <td><input type="radio" name='future' onChange={(e)=>setfuture(e.target.value)} value='4'/></td>
                      <td><input type="radio" name='future' onChange={(e)=>setfuture(e.target.value)} value='5'/></td>
        </tr>
        <tr>
         <td colSpan={6} style={{padding:5}}><button className='btn btn-primary'>ADD REPORT</button></td>

     
        </tr>
      </table>
   
      </form>
      <hr style={{width:'100%'}}/>
          <h3 style={{fontWeight:700}}>ADD COMMENT</h3>
      <form action="" className=' my-4 w-100 d-flex flex-column align-items-center' onSubmit={CommentSubmitted}>
        <textarea type="text" rows={4} placeholder='Experts Comments come here ..' className='form-control w-75' onChange={(e)=>setcomment(e.target.value)} />
        <input type="submit" className='btn btn-primary' value="SUBMIT" name="" id="" />
      </form>
    </div>
  )
}

export default ExpertReportST
