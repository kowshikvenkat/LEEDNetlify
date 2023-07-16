import React from 'react';
import axios from 'axios';
import './login.css';
import LoadingScreen from 'react-loading-screen'
import { app } from '../Models/firebase';
import {OAuthProvider,getAuth,GoogleAuthProvider,signInWithPopup,signOut,deleteUser} from 'firebase/auth';
import googlepic from "../Assets/google.png"
import microsoftpic from "../Assets/microsoft.png" 
import signoutpic from "../Assets/logout.png"
import { Link ,useNavigate} from 'react-router-dom';
import logo from '../Assets/logo.png'
import { toast,ToastContainer } from "react-toastify";
import loginImage from '../Assets/loginuserimg.png'
import trophyImage from '../Assets/trophy.png'
import 'react-toastify/dist/ReactToastify.css'
var cryptojs = require("crypto-js")
function Login() {
  let navigate = useNavigate()
      const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
const[blockedusers,setblockedusers] = React.useState([])
  const[loading,setloading] = React.useState(false)
  const[loadinglogoff,setloadinglogoff] = React.useState(false)
React.useEffect(()=>{
      axios({
    method: "GET",
    url: "http://localhost:5000/getverifiedblockedusers",
  
  }).then((res)=>{
    res.data.docs.map((value,index)=>{
      setblockedusers(prev=>prev.concat(value['BlockedUsers']))
    })

  })

},[])
React.useEffect(()=>{

})
     const auth = getAuth(app)
      const provider = new GoogleAuthProvider()
       provider.setCustomParameters({
      prompt:'select_account'
       })
      const signInWithGoogle = ()=>{
      signInWithPopup(auth,provider).then((result)=>{
if(!blockedusers.includes(result.user.email)){
  let name = cryptojs.AES.encrypt(result.user.displayName,'kowshik123').toString()
sessionStorage.setItem('name',name)
let email = cryptojs.AES.encrypt(result.user.email,'kowshik123').toString()  
sessionStorage.setItem('email',email);
let profilePic = cryptojs.AES.encrypt(result.user.photoURL,'kowshik123').toString()
sessionStorage.setItem('pic',JSON.stringify(profilePic))

axios.post("http://localhost:5000/createuser",{
  name:result.user.displayName,
  email:result.user.email,
  pic:result.user.photoURL,
}).then((res)=>{
let userid = cryptojs.AES.encrypt(res.data.id,'kowshik123').toString()
sessionStorage.setItem('userid',JSON.stringify(userid))
})

navigate('/')
}
else if(blockedusers.includes(result.user.email)){
          toast.error('Your account is Blocked !',{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
}
}).catch((error)=>{
   toast.error(error.message.split(/[()]/)[1]?.replace('auth/', ''),{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
})
}
 const microsoftProvider = new OAuthProvider('microsoft.com');
microsoftProvider.setCustomParameters({
  // Optional "tenant" parameter in case you are using an Azure AD tenant.
  // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
  // or "common" for tenant-independent tokens.
  // The default value is "common".
  tenant: '6b8b8296-bdff-4ad8-93ad-84bcbf3842f5',
    prompt: 'consent',
});
const signInWithMicrosoft=()=>{
  signInWithPopup(auth, microsoftProvider)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.
    
    // Get the OAuth access token and ID Token
    if(!blockedusers.includes(result.user.email)){

    const credential = OAuthProvider.credentialFromResult(result);

    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

let name = cryptojs.AES.encrypt(result.user.displayName,'kowshik123').toString()
sessionStorage.setItem('name',name)
let email = cryptojs.AES.encrypt(result.user.email,'kowshik123').toString()  
sessionStorage.setItem('email',email);
     const lookupMsAzureProfilePhoto = (accessToken) => {
         setloading(true)
     fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'image/jpg'
    }
    })
    .then(function(response) {
    
      return response.blob();   
    })
    .then(function(blob) {
     
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload=async()=>{
        const base64data = reader.result;
      let profilePic = cryptojs.AES.encrypt(base64data,'kowshik123').toString()
sessionStorage.setItem('pic',JSON.stringify(profilePic))

await axios.post("http://localhost:5000/createuser",{
  name:result.user.displayName,
  email:result.user.email,
  pic:base64data,
}).then((res)=>{
let userid = cryptojs.AES.encrypt(res.data.id,'kowshik123').toString()
sessionStorage.setItem('userid',JSON.stringify(userid))
})
setloading(false)
  navigate('/') 
      }    
    })
    .catch(e => console.log('error injecting photo'));
};   
    lookupMsAzureProfilePhoto(accessToken)  }
  else if(blockedusers.includes(result.user.email)){
          toast.error('Your account is Blocked !',{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
}
  })
  .catch((error) => {
    // Handle error.
     toast.error(error.message.split(/[()]/)[1]?.replace('auth/', ''),{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
  });

}
const SignOutMember =()=>{
 setloadinglogoff(true)
  deleteUser(auth.currentUser).then(() => {
   
  // Sign-out successful.
sessionStorage.removeItem('name');
sessionStorage.removeItem('email');
sessionStorage.removeItem('pic')
setloadinglogoff(false)
navigate('/')
}).catch((error) => {
  // An error happened.
       toast.error(error.message.split(/[()]/)[1]?.replace('auth/', ''),{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
});
}

  return (
  <div className="login_container">
   <LoadingScreen
    loading={loading}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    text='Hang On logging In'
  > 
  </LoadingScreen>
    <LoadingScreen
    loading={loadinglogoff}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    text='Hang On logging Out'
  > 
  </LoadingScreen>
  <ToastContainer />
    <div className="login " style={{width:window.innerWidth>800?'30%':'90%'}}>
    <img style={{width:200,height:100,objectFit:'contain'}} src={logo}  alt="" />
 <div className="d-flex align-items-center w-100 justify-content-center p-2 " style={{background:'rgba(200,200,200,0.2)'}}> <img src={loginImage}  style={{width:20,height:20,objectFit:'contain',marginBottom:8}} alt="" />&nbsp; <h4 className=' ' style={{fontWeight:700,color:'#50d050'}}>LOGIN / SIGN UP</h4></div> <br />
     {(sessionStorage.getItem('name')==null||sessionStorage.getItem('name')==undefined) &&<button className='button' onClick={signInWithGoogle}> <span><img src={googlepic} alt="" /></span> <p className='bg-primary text-light'>Sign In With Google</p></button>}
 <br />
       {(sessionStorage.getItem('name')==null||sessionStorage.getItem('name')==undefined) &&<button className='button' onClick={signInWithMicrosoft}><span><img src={microsoftpic} alt="" /></span> <p className='bg-primary text-light'>Sign In With Microsoft</p></button>} <br />
       {(sessionStorage.getItem('name')!==null&&sessionStorage.getItem('name')!==undefined) &&<button className='button' onClick={SignOutMember}><span><img style={{height:30,width:30}} src={signoutpic} alt="" /></span> <p className='bg-primary text-light'>Sign Out</p></button>} <br />
  <div className='StartJourney text-light'><h4>Start Your Journey <br /> With Us ! <img src={trophyImage} style={{height:20,width:20,marginBottom:5}} alt="" />
  
  </h4>
  <div className='text-muted copyrights_footer' style={{fontSize:12}} >2023 &#169; KCT LEED . All Right Reserved</div>
  </div>
        
    </div>

    </div>
  );
}

export default Login;
