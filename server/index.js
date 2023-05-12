const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");


const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name:'ds27l3mqz',
  api_key:'923962345786594',
  api_secret:'BBRNeWpiaS_HxjLgz9frkcO0oFg'
})
const mongoose = require("mongoose")


mongoose.set('strictQuery',false)
const database = module.exports =()=>{
  const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
  try{
    mongoose.connect('mongodb+srv://Kowshik:Kowshik333*@cluster0.wkdkeir.mongodb.net/KCT-LEED?retryWrites=true&w=majority',connectionParams)
    console.log("database connected successfully")
  }catch(err){
console.log(err)
console.log("couldn't connect database")
  }
}



database()
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb"}))
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));


const Loginschema = new mongoose.Schema({
 email:String,
  title:String,
  desc:String,
  createdAt:String,
  admin1:Boolean,
  admin2:Boolean,
  upvotes:{
  count:Number,
  ids:[String]
},
comments:[Object]
})

const Userschema = new mongoose.Schema({
  name:String,
  email:String,
 pic:String,
 saved:[]
})
const User = mongoose.model('pendingpitches',Loginschema)
const User2 = mongoose.model('verifiedpitches',Loginschema)
const User3 =mongoose.model('users',Userschema)


app.post('/createuser',(req,res)=>{
  var user={
    name:req.body.name,
     email:req.body.email,
      pic:req.body.pic,
      saved:[]
  }
  User3.find({email:user.email},function(err,docs){
          if(docs.length==0){
 User3.insertMany(user).then(()=>console.log("Added to users")).catch((err)=>console.log(err))
          }
          console.log('useralready exists')
  })
  
})

app.post('/addpendingrequest',(req,res)=>{
  let s = new Date().toISOString().slice(0,10)
  var user={
    email:req.body.email,
title:req.body.title,
desc:req.body.desc,
createdAt:s,
admin1:false,
admin2:false,

  }

 User.insertMany(user).then(()=>console.log("Added to pendingpitches")).catch((err)=>console.log(err))
})



app.get("/pendingdata",(req,res)=>{
    let user=[];
User.find({},function(err,docs){
  docs.map((val,index)=>{

  User3.find({email:docs[index]['email']},function(err,userdocs){

  var newuser=
  {
    name:userdocs[0].name,
    pic:userdocs[0].pic,
    title:docs[index]['title'],
    desc:docs[index]['desc'],
    createdAt:docs[index]['createdAt'],
    _id:docs[index]['_id'],
     admin1:docs[index]['admin1'],
          admin2:docs[index]['admin2'],
  }
  user.push(newuser)

if(user.length==docs.length)
res.send({pendingdata:user})
})

})
 
// res.send({pendingdata:user})
})
})



app.post("/requestaccept",(req,res)=>{
 User.countDocuments({_id:req.body.id},function(err,docs){
 if(docs>0){
  
  if(req.body.admin=="admin1"){
    User.findOneAndUpdate({_id:req.body.id},{admin1:true}).then(()=>console.log("updated")).catch((err)=>console.log(err))
    User.find({_id:req.body.id},function(err,docs){
   if(docs[0]['admin2']==true){
   var user={
    _id:docs[0]['_id'],
    email:docs[0]['email'],
    desc:docs[0]['desc'],
    title:docs[0]['title'],
    createdAt:docs[0]['createdAt'],
    upvotes:{
  count:0,
  ids:[]
},
comments:[]
   }
    User2.insertMany(user).then(()=>console.log("Added to verifiedpitches")).catch((err)=>console.log(err))
      User.findOneAndDelete({_id:req.body.id},function(err,docs){
        console.log("deleted from pending requests")
      })
    }


    })
  }
    if(req.body.admin=="admin2"){
        User.findOneAndUpdate({_id:req.body.id},{admin2:true}).then((res)=>console.log("updated"))
      User.find({_id:req.body.id},function(err,docs){
    
   if(docs[0]['admin1']==true){
   var user={
    _id:docs[0]['_id'],
    email:docs[0]['email'],
    desc:docs[0]['desc'],
    title:docs[0]['title'],
    createdAt:docs[0]['createdAt'],
        upvotes:{
  count:0,
  ids:[]
},
comments:[]
   }
    User2.insertMany(user).then(()=>console.log("Added to verifiedpitches")).catch((err)=>console.log(err))
      User.findOneAndDelete({_id:req.body.id},function(err,docs){
        console.log("deleted from pending requests")
      })
    }

    })
      }
  }
 })
 
  
})
app.post("/requestreject",(req,res)=>{
      User.findOneAndDelete({_id:req.body.id},function(err,docs){
        console.log("deleted from pending requests")
      })
})
app.get("/verifiedpitches",(req,res)=>{
  let user=[] 
  User2.find({},function(err,docs){

     docs.map((val,index)=>{
        let cmtuser=[]
  User3.find({email:docs[index]['email']},function(err,userdocs){
    if(val['comments'].length>0){
     
    docs[index]['comments'].map((cmtval,cmtindex)=>{
    User3.find({email:cmtval['commentedemail']},function(err,commentdocs){
var commentuser={
commntedname:commentdocs[0].name,
commentedpic:commentdocs[0].pic,
commenttext:cmtval['comment']
}
cmtuser.push(commentuser)
if(docs[index]['comments'].length==cmtindex+1){
    let newuser=
  {
    name:userdocs[0].name,
    pic:userdocs[0].pic,
    title:docs[index]['title'],
    desc:docs[index]['desc'],
    createdAt:docs[index]['createdAt'],
    _id:docs[index]['_id'],
    count:docs[index]['upvotes']['count'],
    ids:docs[index]['upvotes']['ids'],
     comments:cmtuser
    
  }
  if(user.length==0){
   user.push(newuser) 
  }
if(user.length>0){
 
// for(let i=0;i<user.length;i++)
// if( user[i]['_id']!=newuser['_id']){
//   user.push(newuser)
// console.log(user.length)
// }
const duplicatevalue = user.filter(ele=>ele==newuser)
if(duplicatevalue.length==0)
  user.push(newuser)
}

if(user.length==docs.length)
{
   res.send({verifieddata:user})
}
}
       })   
  })
}else{
   let newuser=
  {
    name:userdocs[0].name,
    pic:userdocs[0].pic,
    title:docs[index]['title'],
    desc:docs[index]['desc'],
    createdAt:docs[index]['createdAt'],
    _id:docs[index]['_id'],
    count:docs[index]['upvotes']['count'],
    ids:docs[index]['upvotes']['ids'],
       comments:[]
    
  }
        if(user.length==0){
   user.push(newuser) 
  }
if(user.length>0&& user[0]['_id']!=newuser['_id']){

  user.push(newuser)}


if(user.length==docs.length)
   res.send({verifieddata:user})}
})
})
  })
})
app.post('/updatecommentverifiedpitch',(req,res)=>{
User2.update({_id:req.body.peerid},{
 $push:{ comments:{commentedemail:req.body.expertid,comment:req.body.updatecomment}}
}).then((res)=>console.log("updated"))
})

app.post('/updateupvotesverifiedpitch',(req,res)=>{
  User2.findOne({_id:req.body.verifiedpitchid},function(err,docs){
    
if(!docs['upvotes']['ids'].includes(req.body.peerid)){
User2.update({_id:req.body.verifiedpitchid},{
  "upvotes.count":docs['upvotes']['count']+1,
  $push:{"upvotes.ids":req.body.peerid}
  
}).then((res)=>console.log("updated"))
}else{
  console.log("included")
  User2.update({_id:req.body.verifiedpitchid},{
      "upvotes.count":docs['upvotes']['count']-1,
      $pull:{"upvotes.ids":req.body.peerid}
  }).then((res)=>console.log("updated"))
}
  })

})
app.post("/updatesavedpitch",(req,res)=>{
  User3.findOne({email:req.body.email},function(err,docs){
    let exists = false
   console.log( docs['saved'])
   if(docs['saved'].length==0){
  User3.update({email:req.body.email},{ $push:{saved:req.body.savedid} }).then(()=>"saved the pitch")
   }
   else{
     docs['saved'].map((value,index)=>{
if(value==req.body.savedid){
  User3.update({email:req.body.email},{ $pull:{saved:req.body.savedid}}).then(()=>"saved the pitch")
  exists = true;
}else if(value!=req.body.savedid&&index+1==docs['saved'].length &&exists==false){
  User3.update({email:req.body.email},{ $push:{saved:req.body.savedid}}).then(()=>"saved the pitch")
}
    })
   }
  })
})
app.post("/getuser",(req,res)=>{
User3.find({email:req.body.email},function(err,docs){
console.log(docs)
  res.send({user:docs})
})
})
app.post("/getuser",(req,res)=>{
  req.body.saved.map((value,index)=>{
User2.find({_id:value},)
  })

})
const RegisterSchema = new mongoose.Schema({
 Institution:String,
       Email:String,
       Title:String,
       Desc:String,
       Link:String,
       Date:String,
       endDate:String ,
       admin:String
})
const RegisterUser = mongoose.model('pendingregisters',RegisterSchema)
const AcceptRegisterUser = mongoose.model('verifiedeventregisters',RegisterSchema)
app.post("/requestevent",(req,res)=>{
  let user = {
     Institution:req.body.Institution,
       Email:req.body.Email,
       Title:req.body.Title,
       Desc:req.body.Desc,
       Link:req.body.Link,
       Date:req.body.startDate ,
       endDate:req.body.endDate,
  }
RegisterUser.insertMany(user).then((res)=>console.log("added to pending registers"))

})
app.get("/getpendingregisters",(req,res)=>{
  RegisterUser.find({},function(err,docs){
    res.send({docs:docs})
  })
})
app.post("/accepteventrequest",(req,res)=>{
RegisterUser.findOne({_id:req.body.id},function(err,docs){

if(docs){
    if(docs.admin&&docs.admin!=req.body.email){
      AcceptRegisterUser.insertMany(docs).then(res=>console.log("added to verified events"))
  RegisterUser.findOneAndDelete({_id:req.body.id},function(err,docs){
        console.log("deleted from pending registers")
      })
  }else{
RegisterUser.findOneAndUpdate({_id:req.body.id}, {$set:{admin:req.body.email}}).then((res)=>console.log("1 admin accepted"))
  }
}else if(!docs){
  console.log("no document found")
}
})
})
app.post("/rejecteventrequest",(req,res)=>{
  RegisterUser.findOneAndDelete({_id:req.body.id},function(err,docs){
    if(err){
      console.log(err)
    }else if(!docs){
      console.log("no document found")
    }else{
        console.log("deleted from pending registers")
}})
})
app.get("/verifiedevents",(req,res)=>{
  AcceptRegisterUser.find({},function(err,docs){
    res.send({docs:docs})
  })
})
const EventSchema = new mongoose.Schema({
  title:String,
  desc:String,
  startdate:String,
  enddate:String,
  venue:String,
  link:String,
  quotes:String,
  info:[],
  benefits:[],
  email:String,
  video:[],
  pic:[],
  pdf:[]
})
const EventModel = mongoose.model('pendingKCTLEEDevents',EventSchema)
const VerifiedEventModel = mongoose.model('verifiedKCTLEEDevents',EventSchema)
let LEEDEVENTobj = {
  title:"",
  desc:"",
  startdate:"",
  enddate:"",
  venue:"",
  quotes:"",
  link:"",
  email:"",
  
}
app.post("/pendingLEEDevent",(req,res)=>{

 
      LEEDEVENTobj.title = req.body.title
    LEEDEVENTobj.desc = req.body.desc
      LEEDEVENTobj.startdate = req.body.startdate
        LEEDEVENTobj.enddate = req.body.enddate
        LEEDEVENTobj.link = req.body.link
        LEEDEVENTobj.venue = req.body.venue
LEEDEVENTobj.quotes = req.body.quotes
  LEEDEVENTobj.info = req.body.info
    LEEDEVENTobj.benefits = req.body.benefits
              LEEDEVENTobj.email = req.body.email 
   LEEDEVENTobj.pic = req.body.pic
   LEEDEVENTobj.pdf = req.body.pdf
     LEEDEVENTobj.video = req.body.video

console.log(req.body.pic.length)
   EventModel.create(LEEDEVENTobj).then(console.log("Added to pendingLEEDevents"))
})


app.post("/getpendingKCTLEEDevents",(req,res)=>{
     let arr = []
  EventModel.find({},function(err,docs){
    docs.map((val,ind)=>{
      if(req.body.email){
      if(val['email']!=req.body.email){
      arr.push(val)    
      }  
     }    
    })
    if(arr.length>0)

      res.send({docs:arr})
  })

})
app.post("/acceptKCTLEEDevents",(req,res)=>{
EventModel.find({_id:req.body.id},function(err,docs){
EventModel.deleteOne({_id:req.body.id}).then(console.log("removed from pending LEED evsnts"))
 VerifiedEventModel.insertMany(docs).then(console.log("added to verified KCTLEED events"))
})
})
app.post("/rejectKCTLEEDevents",(req,res)=>{
  EventModel.findOne({_id:req.body.id},function(err,docs){
     docs['video'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'])
      console.log(result)
    })
    docs['pic'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'])
      console.log(result)
    })
  })
 
       EventModel.deleteOne({_id:req.body.id}).then(console.log("removed from pending LEED evsnts"))
})
app.get("/getverifiedLEEDevents",(req,res)=>{
  VerifiedEventModel.find({},function(err,docs){
    res.send({docs:docs})
  })
})
const BlockSchema = new mongoose.Schema({
  admin:String,
Useremail:String,
BlockedUsers:[String]
})
const PendingBlockModel = mongoose.model('pendingblockuser',BlockSchema)
const BlockModel = mongoose.model('verifiedblockedusers',BlockSchema)
app.post("/requestblockuser",(req,res)=>{
  console.log("hhihiobjhdsfjvdsjcvdskjbdskvcbdsk")
  let obj = {
    admin:req.body.email,
    Useremail:req.body.UserEmail
  }

PendingBlockModel.insertMany(obj).then(console.log("block request added to pending")).catch(err=>console.log(err))
})
app.get("/getpendingblockedusers",(req,res)=>{
    PendingBlockModel.find({},function(err,docs){
    res.send({docs:docs})
  })
})
app.post("/acceptblockuser",(req,res)=>{
  PendingBlockModel.findOne({_id:req.body.id},function(err,docs){
if(docs){
  PendingBlockModel.findOneAndDelete({_id:req.body.id}).then(console.log("User removed from pending block"))
  BlockModel.findOneAndUpdate({_id:'645d2634357536481927cf39'},{$push:{BlockedUsers:docs.Useremail}}).then(console.log("User Blocked"))
}
  })
})
app.get("/getverifiedblockedusers",(req,res)=>{
    BlockModel.find({},function(err,docs){
    res.send({docs:docs})
  })
})