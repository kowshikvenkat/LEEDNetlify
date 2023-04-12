import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
const cryptojs = require("crypto-js")
function NavInApp() {
  let location = useLocation()
    const[ignored,forceUpdate] = React.useReducer(x=>x+1,0)
  const [userName,setuserName] = React.useState("")
const [Email,setEmail] = React.useState("")
const [userProfilePic,setUserProfilePic] = React.useState("")

  React.useEffect(()=>{
  //decrypting  
  if(sessionStorage.getItem('name')!==null&&sessionStorage.getItem('name')!==undefined){
 
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
       width:"100%"
    }
  return (
    <div style={nav}>
    {/* <ul className='d-flex bg-info justify-content-evenly align-items-center' style={nav}>
        <li><Link to="/" >HOME</Link></li>
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
<Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">KCT-LEED</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-around w-100">
            <Nav.Link > <li><Link to="/" >HOME</Link></li></Nav.Link>
            <Nav.Link >     <li>About Us</li></Nav.Link>
             <Nav.Link >       <li><Link to='/events'>EVENTS</Link></li></Nav.Link>
              <Nav.Link >      <li>Contact</li></Nav.Link>
               <Nav.Link >        <li>   <Link to="/sharktank" >SHARKTANK</Link> </li></Nav.Link>
                  <Nav.Link >           <li >{userName.length>0?<Link to="/login" >
        <div className="d-flex align-items-center ">
          <img src={userProfilePic} style={{borderRadius:"50%",width:40,height:40}} alt=""  />&nbsp;
          <div className=''>{userName}</div></div>
        </Link>:<Link to="/login">Login</Link>} </li></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item n/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            
   
      
       
        
  
          </Nav>
        </Navbar.Collapse>
   </Container>
    </Navbar>
   </div> 
  )
}

export default NavInApp
