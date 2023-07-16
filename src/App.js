import React from 'react';
import './App.css';
import Login from './Views/login';
import NavInApp from './Views/nav';
import { Routes,Route,useLocation,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Requests from './Admin/Requests';
import axios from 'axios';
import Home from './Views/home';
import Events from './Views/events';
import Eventregister from './Views/eventregister';
import Comments from './Experts/Comments';
import Reports from './Experts/reports';
import LEEDevents from './Views/LEEDevents';
import logo from './Assets/logo.png'
import { Line, Circle } from 'rc-progress';
import "react-sweet-progress/lib/style.css";
import ST from './Views/ST';
import UserPitch from './Models/SharkTank/createpitch';
import HomeST from './Models/SharkTank/homeST';
import YourPitch from './Models/SharkTank/YourPitch';
import Savedpitch from './Models/SharkTank/savedpitch';
import STexpert from './Experts/sharktankexpert';
import Pitches from './Models/SharkTank/pitches';
import { useDispatch } from 'react-redux';
import { setGenEvents ,setLEEDEvents} from './Controllers/redux';
const cryptojs = require("crypto-js")


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
   const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
     const [isLoading, setIsLoading] = React.useState(true);
  const[timer,settimer] = React.useState(0)

     React.useEffect(()=>{
    
axios({
    method: "GET",
    url: "http://localhost:5000/verifiedevents",
  
  }).then(res=>{
dispatch(setGenEvents(res.data.docs))
  })

      axios.get("http://localhost:5000/getverifiedLEEDevents").then((res)=>{
dispatch(setLEEDEvents(res.data.docs))

})
  },[])


React.useEffect(() => {
    // Simulate loading time
    if(sessionStorage.getItem('isloading')==undefined||sessionStorage.getItem('isloading')==null){
 let x =setTimeout(() => {
      setIsLoading(false);
    sessionStorage.setItem('isloading',false)
    }, 3000);
    let y = setInterval(()=>{
settimer((prev)=>prev+30)

      },900)
      setTimeout(() => {
     clearTimeout(x);
     clearInterval(y);
    }, 3500);
    }
  },[]);
  // React.useEffect(()=>{
  //   if(location.pathname=="/sharktank"||location.pathname=="/sharktankexpert"){
  //     if(sessionStorage.getItem('userid')==null||sessionStorage.getItem('userid')==undefined){
  //       navigate('/login')
  //     }
  //   }
  // })
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
     <div className='ContentApp' style={{    backgroundColor: 'rgba(237, 239, 236, 0.8)',width:'100%'}}>
      <NavInApp />
  <div style={{marginTop:'70px',width:'100%'}}>
       <Routes>
    <Route exact path="/" element={  <Home />} />
<Route exact path="/login" element={<Login />}/>
    <Route exact path="/sharktankexpert" element={<STexpert />} >
    <Route exact path="/sharktankexpert/" element={<Pitches expert={true}/>} />
    <Route exact path="reports" element={<Reports/>}></Route>
        <Route  path="comments" element={<Comments />}></Route>
       </Route> 
    <Route exact path="/sharktank" element={<ST />}>
       <Route exact path="/sharktank/" element={<HomeST />} />
<Route path="createpitchST" element={<UserPitch />} />
                   <Route path="savedST" element={<Savedpitch />} />

                            <Route path="yourpitchST" element={<YourPitch/>} />                       
</Route>
 
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
