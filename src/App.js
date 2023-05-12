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
import logo from './Assets/logo.png'
import { Line, Circle } from 'rc-progress';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import ImageHolderHome from './Models/imageHolderHome';
const cryptojs = require("crypto-js")





function App() {
   const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
     const [isLoading, setIsLoading] = React.useState(true);
  const[Email,setEmail] = React.useState("")
  const[timer,settimer] = React.useState(0)
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
  
 })
React.useEffect(() => {
    // Simulate loading time
    if(sessionStorage.getItem('isloading')==undefined||sessionStorage.getItem('isloading')==null){
 setTimeout(() => {
      setIsLoading(false);
    sessionStorage.setItem('isloading',false)
    }, 3000);
    setInterval(()=>{
settimer((prev)=>prev+30)

      },900)
    }
  },[]);



  return (
  
    <div className="App ">
    {(sessionStorage.getItem('isloading')==undefined||sessionStorage.getItem('isloading')==null)?<div className='LoadingImageContainer'>
     <img src={logo} className='LoadingImage' alt="" /> <br />
    <div class="loading">
    
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div> <br />

      <Line  style={{width:'60%'}} percent={timer} strokeWidth={1} strokeColor="green" />
    </div>:
     <div style={{    backgroundColor: 'rgba(237, 239, 236, 0.8)',width:'100%'}}>
      <NavInApp />
      
  <div style={{marginTop:'70px',width:'100%'}}>
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
     </div>}
    </div>
  );
}

export default App;
