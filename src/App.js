import React from 'react';
import './App.css';
import Login from './Views/login';
import Sharktank from './Views/sharktank';
import NavInApp from './Views/nav';
import { Routes,Route,useLocation,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Requests from './Admin/Requests';
import Sharktankexpert from './Experts/sharktankexpert';
import Home from './Views/home';
import Events from './Views/events';
import Eventregister from './Views/eventregister';
import LEEDevents from './Views/LEEDevents';


const cryptojs = require("crypto-js")





function App() {
   const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
  const[Email,setEmail] = React.useState("")
    let location = useLocation()
    let navigate = useNavigate()



 React.useEffect(()=>{
  if(location.pathname=="/sharktank"){
   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined){
    var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
 if(Email=="kowshik.20ei@kct.ac.in"){
//Useeffect cant return a component
 }
   }
  else{
    navigate("/login")
  }
  }
//   if(location.pathname=="/Kct/Leed/Admin"){
//      if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined){
//    var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
// setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))}
//   }

 })

// function ValidateLoginForSharkTank(a,b,c){
//   console.log("validating login")
//   if(sessionStorage.getItem('email')!==null&&sessionStorage.getItem('email')!==undefined){
//     console.log("email present")
//     var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
// setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
// if(Email=="kowshik.20ei@kct.ac.in")
// return a
// else
// return b
//    }
//   else{
//     console.log("no email present")

//   }
// }


  return (
  
    <div className="App ">
     <NavInApp />
     <Routes>
    <Route exact path="/" element={  <Home />} />
<Route exact path="/login" element={<Login />}/>
    <Route exact path="/sharktank" element={Email=="kowshik.20ei@kct.ac.in"?<Sharktankexpert />:<Sharktank />} /> 
    <Route exact path="/Kct/Leed/Admin" element={<Requests />} />
<Route exact path="/events" element={<Events />}></Route>
<Route path="/allevents" element={<LEEDevents />} />
  <Route path="/eventregister" element={<Eventregister /> }/>
</Routes>
    </div>
  );
}

export default App;
