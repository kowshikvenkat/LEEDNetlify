import React from 'react'
import axios from 'axios'
function Addpitch(e, header,desc,profileEmail) {

   e.preventDefault()
      try{
   axios.post("https://leednetlifybackend.onrender.com/addpendingrequest",{
 email:profileEmail,
  title :header,
  desc:desc,
 
})
return true;
      }catch(err){
console.log(err)
return false
      }

}
export function AddComment(e,peerid,expertid,commentupdate){
      e.preventDefault()
     
      axios.post("https://leednetlifybackend.onrender.com/updatecommentverifiedpitch",{
peerid:peerid,
expertid:expertid,
updatecomment:commentupdate
      })
}
export default Addpitch
