import React from 'react'
import { ModalHeader } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Spinner } from "react-bootstrap";
import Addpitch from '../Controllers/addpitch';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Button from 'react-bootstrap/Button';
import { AddComment } from '../Controllers/addpitch';
function Modalpopup({profileEmail}) {
    const[open,setopen] = React.useState(false)
        const[loader,setloader] = React.useState(false)
        const[header,setheader] = React.useState("")
        const[desc,setdesc] = React.useState("")
    
           let form = React.useRef()
           React.useEffect(()=>{
             
           })
           function submitform(e){
   
            setloader(true)
   if(Addpitch(e,header,desc,profileEmail)==true){

                    setloader(false)
                     toast.success('Success! Message sent',{autoClose:3000,className:'toast-message'})
                }
           }
  return (
    <div>
                <button onClick={()=>setopen(true)} className='btn btn-primary'>Add Pitch</button>
      <Modal  show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
      <ModalHeader closeButton>
        <Modal.Title>Your New Pitch</Modal.Title>
        </ModalHeader>
        <Modal.Body>

      
        <form ref={form} onSubmit={submitform} style={{display:"flex",justifyContent:'center',width:"100%",flexDirection:'column',alignItems:'flex-start'}} action="">
       
            <label htmlFor="">Header : &nbsp;</label><input onChange={(e)=>setheader(e.target.value)} name="subject" type="text" minLength={10} className="w-100"  required />
            <label htmlFor="">Description :</label><textarea onChange={(e)=>setdesc(e.target.value)} className="w-100" width={200} minLength={20} name="message" id="" cols="30" rows="10" required ></textarea>
           
       
            {loader? (<Spinner style={{alignSelf:'flex-end',marginTop:10}} animation="border" variant="danger" />) :      <input className="m-1 btn btn-primary" style={{alignSelf:'flex-end',marginTop:10}} type="submit" value="send"/>}
        </form>
       </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export function ModalComment({title,desc,name,pic,peerid,expertid}){
    const [show, setShow] = React.useState(false);
    const[commentupdate,setcommentupdate] = React.useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handlesubmit(e){

AddComment(e,peerid,expertid,commentupdate)
  }
return (
    <>
      <div className="w-75 d-flex justify-content-end ">
        <Button className='' variant="primary" onClick={handleShow}>
       Add Comment
      </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
          <img src={pic} style={{height:40,width:40,borderRadius:"50%"}} alt="" />
          {name}</Modal.Title>
        </Modal.Header>
         <form action="" className='' onSubmit={handlesubmit}>
        <Modal.Body>
          <h3>{title}</h3>
          {desc}
         
            <textarea type="text" minLength="20" maxLength="100" style={{width:'100%'}} onChange={(e)=>setcommentupdate(e.target.value)}/>
            
    
        </Modal.Body>
        <Modal.Footer>
      <div className=" w-100 text-center"  >
         <i><u>"Expected to comment only on this pitch of the client"</u></i> <br />
         <i><u>"Please do not deviate and maintain professionalism"</u></i>
      </div>
         <div className="d-flex">
           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         <input type="submit" className='btn btn-success' value="Add Comment" />
         </div>
        </Modal.Footer>
              </form>
      </Modal>
    </>
  );
}
export default Modalpopup
