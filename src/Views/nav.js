import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logopic from '../Assets/logo.png'
import signoutpic from "../Assets/sign-out.png"
import './nav.css';
const cryptojs = require("crypto-js")

function NavInApp() {
  let location = useLocation()
    const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
  const [userName,setuserName] = React.useState("")
const [Email,setEmail] = React.useState("")
const [userProfilePic,setUserProfilePic] = React.useState("")

  React.useEffect(()=>{
  //decrypting  
  if(sessionStorage.getItem('name')!==null&&sessionStorage.getItem('email')!==undefined&&sessionStorage.getItem('pic')!==null){
 
var bytes = cryptojs.AES.decrypt(sessionStorage.getItem('name'),'kowshik123')
setuserName(()=> bytes.toString(cryptojs.enc.Utf8))
var bytesemail =  cryptojs.AES.decrypt(sessionStorage.getItem('email'),'kowshik123')
setEmail(()=>bytesemail.toString(cryptojs.enc.Utf8))
var bytesimage = cryptojs.AES.decrypt(JSON.parse(sessionStorage.getItem('pic')),'kowshik123')
setUserProfilePic(()=>bytesimage.toString(cryptojs.enc.Utf8))

}else{
  setuserName("")
  setUserProfilePic("")
  setEmail("")
}


})

    const nav={
        listStyleType:"none",
       width:"100vw",
       position:'fixed',
       zIndex:10000000,
    }
  
  return (
    <div style={nav}>
    {/* <ul className='d-flex bg-info justify-content-evenly align-items-center' style={nav}>
        <Link to="/" >HOME</Link></li>
        <li>About Us</li>
        <li>Events</li>
        <li>Contact</li>
           <li>   <Link to="/sharktank" >SHARKTANK</Link> </li>
        <li >{userName.length>0?<Link to="/login" >
        <div className="d-flex align-items-center ">
          <img src={userProfilePic} style={{borderRadius:"50%",width:40,height:40}} alt=""  />&nbsp;
          <div className=''>{userName}</div></div>
        </Link>:<Link to="/login">Login</Link>} </li>
  
    </ul> */}
<Navbar style={{backgroundColor:'rgba(38, 194, 129, 1)',boxShadow:'0 0 20px grey'}} expand="md">
      <Container fluid>
        <Navbar.Brand className='logo' style={{width:'20%',height:'70px'}} href="#home"><img src={logopic} style={{width:"100%",height:"100%",backgroundColor:'white',margin:0,objectFit:'contain'}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-around w-100">
            <Nav.Link  className='navitemscontainer'> <Link className='navitems' to="/" >HOME</Link></Nav.Link>
            <Nav.Link  className='navitemscontainer'>     <Link className='navitems'>ABOUT US</Link></Nav.Link>
             <Nav.Link className='navitemscontainer'>       <Link className='navitems' to='/events'>EVENTS</Link></Nav.Link>
              <Nav.Link  className='navitemscontainer'>     <Link className='navitems'>  CONTACT</Link></Nav.Link>
               
               <Nav.Link className='navitemscontainer'>           <Link className='navitems' to={(Email=="kowshik.20ei@kct.ac.in"||Email=="jeevankumar.20ei@kct.ac.in"||Email=="harihaaran.20ei@kct.ac.in")?"/sharktankexpert":Email.length>0? "/sharktank":"/login" }>SHARKTANK</Link> </Nav.Link>
                
          <Nav.Link className={!userName.length>0&& 'navitemscontainer'}>           <li >{userName.length>0?
                   <NavDropdown style={{marginRight:40,marginTop:-10}} title={<i style={{color:'white',textDecoration:'underline'}}>{userName}</i>} id="basic-nav-dropdown">
           
              <NavDropdown.Item  href="#action/3.2">
           <div className="d-flex">   <img src={userProfilePic} style={{borderRadius:"50%",width:30,height:30}} alt=""  /><div className='mx-1'>{userName}</div></div>
              </NavDropdown.Item>
     <NavDropdown.Item href="#action/3.1">  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               <div className="d-flex"><img src={signoutpic}className='my-1' width="20" height="20" alt="" /> <Link  className='mx-1 ' to="/login" >SIGN OUT</Link></div>
              </NavDropdown.Item>
            </NavDropdown>
       
       :<Link className='navitems'   to="/login">LOGIN</Link>} </li></Nav.Link>
          </Nav>
        </Navbar.Collapse>
   </Container>
    </Navbar>
   </div> 
  )
}

export default NavInApp
