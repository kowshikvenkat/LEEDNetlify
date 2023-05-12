import React from 'react';
import axios from 'axios';
import './login.css';
import { app } from '../Models/firebase';
import {OAuthProvider,getAuth,GoogleAuthProvider,signInWithPopup,signOut,deleteUser} from 'firebase/auth';
import googlepic from "../Assets/google.png"
import microsoftpic from "../Assets/microsoft.png" 
import signoutpic from "../Assets/sign-out.png"
import { Link ,useNavigate} from 'react-router-dom';
import logo from '../Assets/logo2.png'
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
var cryptojs = require("crypto-js")
function Login() {
  let navigate = useNavigate()
         const[signedIn,setsignedIn] = React.useState(false)
      const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
const[blockedusers,setblockedusers] = React.useState([])
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
  console.log(blockedusers)
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
})

navigate('/')
}
else if(blockedusers.includes(result.user.email)){
  console.log("jijij")
          toast.error('Your account is Blocked !',{
            autoClose:5000,
            position:toast.POSITION.BOTTOM_CENTER
          })
}
}).catch((error)=>{
console.log(error)
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
    const credential = OAuthProvider.credentialFromResult(result);

    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

let name = cryptojs.AES.encrypt(result.user.displayName,'kowshik123').toString()
sessionStorage.setItem('name',name)
let email = cryptojs.AES.encrypt(result.user.email,'kowshik123').toString()  
sessionStorage.setItem('email',email);
     const lookupMsAzureProfilePhoto = (accessToken) => {
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
      reader.onload=()=>{
        const base64data = reader.result;
      let profilePic = cryptojs.AES.encrypt(base64data,'kowshik123').toString()
sessionStorage.setItem('pic',JSON.stringify(profilePic))
axios.post("http://localhost:5000/createuser",{
  name:result.user.displayName,
  email:result.user.email,
  pic:base64data,
})
  navigate('/') 
      }
      
      // const imageObjectURL = URL.createObjectURL(blob);
      // imageObjectURL will be e.g. blob:http://localhost:3000/f123c12a-1234-4e30-4321-af32f2c5e5bc
      // so updating the <img scr=""> will present the image correctly after
      // setProfilePicUrl(imageObjectURL);
      
    })
    .catch(e => console.log('error injecting photo'));
};   
    lookupMsAzureProfilePhoto(accessToken)  
  
  })
  .catch((error) => {
    // Handle error.
    console.log(error)
  });

}
const SignOutMember =()=>{
  deleteUser(auth.currentUser).then(() => {
  
  // Sign-out successful.
sessionStorage.removeItem('name');
sessionStorage.removeItem('email');
sessionStorage.removeItem('pic')

navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error)
});
}

  return (
  <div className="login_container">
  <ToastContainer />
    <div className="login">
    <img style={{width:200,height:100,objectFit:'contain'}} src={logo}  alt="" />
   <h4 className='text-light' style={{textShadow:'0 0 10px black'}}>LOGIN </h4> <br />
     {(sessionStorage.getItem('name')==null||sessionStorage.getItem('name')==undefined) &&<button className='button' onClick={signInWithGoogle}> <span><img src={googlepic} alt="" /></span> <p className='bg-primary text-light'>Sign In With Google</p></button>}
 <br />
       {(sessionStorage.getItem('name')==null||sessionStorage.getItem('name')==undefined) &&<button className='button' onClick={signInWithMicrosoft}><span><img src={microsoftpic} alt="" /></span> <p className='bg-primary text-light'>Sign In With Microsoft</p></button>} <br />
       {(sessionStorage.getItem('name')!==null&&sessionStorage.getItem('name')!==undefined) &&<button className='button' onClick={SignOutMember}><span><img id="signoutimg" src={signoutpic} alt="" /></span> <p className='bg-primary text-light'>Sign Out</p></button>} <br />
       <p className='text-light'><u>Your Data Is Secured</u></p>
       <p className='text-light'><u>Your Data Will Not Be Shared</u></p>
        
    </div>

    </div>
  );
}

export default Login;
