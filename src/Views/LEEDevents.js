import React from 'react'
import axios from 'axios'
import { Document,Page,pdfjs } from 'react-pdf'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Menu,SubMenu,Sidebar,MenuItem } from 'react-pro-sidebar'
import DateToDay from '../Models/DateToDay'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function LEEDevents() {
    const[verifiedLEEDevents,setverifiedLEEDevents] = React.useState([])
    const[renderevents,setrenderevents] = React.useState("")
    const s = new Date()
    const[today,nothing]=React.useState(s.toDateString())

   React.useEffect(()=>{
        axios.get("http://localhost:5000/getverifiedLEEDevents").then((res)=>{
setverifiedLEEDevents(res.data.docs)
console.log(res.data.docs)
        })
    },[])
  
    function ReturnAllEvents(){
      return <div>
        {verifiedLEEDevents.map((value,ind)=>{

     return <div>

        <h2>{value['title']}</h2>
        {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="Events Gallery" />)}
         <p>{value['desc']}</p>
         <h4 className='text-muted'>{DateToDay(value['date'].slice(0,10)) }&nbsp;&nbsp;{value['date'].slice(11)}</h4>
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} target="_blank">Register</a> <br />
                 </div>}
    )}
      </div>
    }
       function ReturnTodayEvents(){

      return <div>
        {verifiedLEEDevents.map((value,ind)=>{
     
          if(DateToDay(value['date'].slice(0,10)).split(" ")[0]=="Today"){
return  <div>

        <h2>{value['title']}</h2>
        {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="Events Gallery" />)}
         <p>{value['desc']}</p>
         <h4 className='text-muted'>{DateToDay(value['date'].slice(0,10)) }&nbsp;&nbsp;{value['date'].slice(11)}</h4>
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} target="_blank">Register</a> <br />
                 </div>
          }
    }
    )}
      </div>
    }
    function ReturnFutureEvents(){
      
      return <div>
        {verifiedLEEDevents.map((value,ind)=>{
if(value['date'].split("-")[0]>s.getFullYear() ||(value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]>s.getMonth()+1) || (value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]==s.getMonth()&&value['date'].split("-")[2].slice(0,2)>s.getDate())){
     return <div>

        <h2>{value['title']}</h2>
        {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="Events Gallery" />)}
         <p>{value['desc']}</p>
         <h4 className='text-muted'>{DateToDay(value['date'].slice(0,10)) }&nbsp;&nbsp;{value['date'].slice(11)}</h4>
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} target="_blank">Register</a> <br />
                 </div>}}
    )}
      </div>
    }
        function ReturnCompletedEvents(){
      
      return <div>
        {verifiedLEEDevents.map((value,ind)=>{
if(value['date'].split("-")[0]<s.getFullYear() ||(value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]<s.getMonth()+1) || (value['date'].split("-")[0]==s.getFullYear()&&value['date'].split("-")[1]==s.getMonth()&&value['date'].split("-")[2].slice(0,2)<s.getDate())){
     return <div>

        <h2>{value['title']}</h2>
        {value['pic'].map((val,ind)=>
        <img src={val['secure_url']} alt="Events Gallery" />)}
         <p>{value['desc']}</p>
         <h4 className='text-muted'>{DateToDay(value['date'].slice(0,10)) }&nbsp;&nbsp;{value['date'].slice(11)}</h4>
         <br />
         {value['pdf'].map((val,ind)=>{
         
          return         <div>
            <embed src={val.replace("/view?usp=sharing","/preview")} width="640" height="480" >          
          </embed> <br /><a href={val} target="_blank">DOWNLOAD PDF</a>
          </div>
         })}                  
          <br />
                 <a href={value['link']} target="_blank">Register</a> <br />
                 </div>}}
    )}
      </div>
    }
  return (
   <div>
   <Sidebar>
    <Menu>
     <MenuItem onClick={()=>setrenderevents("returnallevents")}>All</MenuItem>
      <MenuItem onClick={()=>setrenderevents("returntodayevents")}>Today</MenuItem>
       <MenuItem onClick={()=>setrenderevents("returncompletedevents")}>Completed</MenuItem>
        <MenuItem onClick={()=>setrenderevents("returnfutureevents")}>Future</MenuItem>
    </Menu>
   </Sidebar>
    {renderevents=="returnallevents"&&<ReturnAllEvents />}
       {renderevents=="returntodayevents"&&<ReturnTodayEvents />}
          {renderevents=="returncompletedevents"&&<ReturnCompletedEvents />}
             {renderevents=="returnfutureevents"&&<ReturnFutureEvents />}
   </div>
  )
}

export default LEEDevents
