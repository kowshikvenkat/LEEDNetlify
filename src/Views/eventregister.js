import React from 'react'
import mobiscroll from '@mobiscroll/react-lite'
import axios from 'axios'
function Eventregister() {
  React.useEffect(()=>
  {
    console.log("sldcnoidsc")
  })
    const[Institution,setInstitution] = React.useState("")
    const[Email,setEmail] = React.useState("")
    const[Title,setTitle] = React.useState("")
    const[Desc,setDesc] = React.useState("")
    const[Date,setDate] = React.useState(null)
    function HandleSubmit(e){
        e.preventDefault()
    axios.post("http://localhost:5000/requestevent",{
       Institution:Institution,
       Email:Email,
       Title:Title,
       Desc:Desc,
       Date:Date 
    })
    }
  return (
    <div>
    <h1>  Welcome ! We are gald to invite you ,</h1>
    <h3>You can register your upcoming events to KCTLEED.com</h3>
    <form action="" onSubmit={HandleSubmit}>
        Your Institution : <input type="text" onChange={(e)=>setInstitution(e.target.value)} required/> <br />
        Your Contact Mail Id : <input type="email" onChange={(e)=>setEmail(e.target.value)}  required/> <br />
        Your Event Title : <input type="text" onChange={(e)=>setTitle(e.target.value)} required/> <br />
        Your Event Description : <input type="text" onChange={(e)=>setDesc(e.target.value)}  required/> <br />
        Your Date Of Event : <input type="date" onChange={(e)=>setDate(e.target.value)} name="" id=""  required/> <br />
        <input type="submit" className='btn btn-warning' value="Apply" />
    </form>

    </div>
  )
}

export default Eventregister
