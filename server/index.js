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
 linkedIn:String,
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
 User3.insertMany(user).then((result)=>{console.log("Added to users");res.send({id:result[0]["_id"]})}).catch((err)=>console.log(err))
          }
          else{
          console.log('useralready exists')
        res.send({id:docs[0]["_id"]})  
        }
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
app.post("/rejectKCTLEEDevents",async(req,res)=>{
  await EventModel.findOne({_id:req.body.id},function(err,docs){
     docs['video'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'],{resource_type:'video'})
      console.log(result)
    })
    docs['pic'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'])
      console.log(result)
    })
  })
 
       EventModel.deleteOne({_id:req.body.id}).then(console.log("removed from pending LEED events"))
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


//SHARKTANK-------->
const STPitch = new mongoose.Schema({
  userid:
  
  {type:String,
    unique:true,
  },
title:String,
content:String,
users:String,
impact:String,
barriers:String,
video:[],
image:[],
gdrive:[],
upvotes:[],
admin1:Boolean,
admin2:Boolean,
comment:{
  
  expert1:
  {type:String,
  unique:true
  },expert2: {type:String,
  unique:true
  },expert3: {type:String,
  unique:true
  }},
category:String,
  createdAt: {
    type: Date,
    default: Date.now // Set the default value to the current date
  },
report:{
  type:Array,
  unique:true
}
})
STPitch.index({report:1,userid:1,'comment.expert1':1,'comment.expert2':1,'comment.expert3':1})
const PitchST = mongoose.model('sharktankpitches',STPitch)
const pendingpitchST = mongoose.model('sharktankpendingpitches',STPitch)
app.post("/addpitchST",(req,res)=>{
let user={
  userid:req.body.userid,
  title:req.body.title,
  content:req.body.content,
  users:req.body.users,
  barriers:req.body.barriers,
  impact:req.body.impact,
  video:req.body.video,
  image:req.body.image,
  gdrive:req.body.gdrive,
  upvotes:[],
  category:req.body.category,
  comment:{expert1:"",expert2:"",expert3:""},
  admin1:false,
  admin2:false,
}
pendingpitchST.insertMany(user).then(()=>console.log("Added to pending pitchs"))
})
app.get("/pendingpitchST",async (req, res) => {
  try {
    const docs = await pendingpitchST.find({}).lean().exec();

    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.pic = docs2.pic;
    }
    res.send({docs:docs});
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error to send pitches ST");
  }
})
app.post("/requestacceptST",(req,res)=>{
pendingpitchST.findOne({_id:req.body.id},function(error,docs1){
  if(docs1&&req.body.admin=="admin1"){
  pendingpitchST.findOneAndUpdate({_id:req.body.id},{admin1:true},function(err,docs){
 if(docs.admin2==true){
  PitchST.insertMany(docs).then(()=>console.log("Added to SharkTank pitchs"))
  pendingpitchST.findOneAndRemove({_id:req.body.id}).then(()=>console.log("Removed from SharkTank pending pitchs"))
 }
  })
}
else if(docs1&&req.body.admin=="admin2"){
  pendingpitchST.findOneAndUpdate({_id:req.body.id},{admin2:true},function(err,docs){
 if(docs.admin1==true){
  PitchST.insertMany(docs).then(()=>console.log("Added to SharkTank pitchs"))
    pendingpitchST.findOneAndRemove({_id:req.body.id}).then(()=>console.log("Removed from SharkTank pending pitchs"))
 }
  })
}
})
})
app.post("/requestrejectST", async (req, res) => {
  try {

    const document = await pendingpitchST.findOne({ _id: req.body.id }).exec();

    if (document) {
           document['video'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'] ,{resource_type:'video'})
      console.log(result)

        
    })
     
  document['image'].map((val,ind)=>{ 
      const result = cloudinary.uploader.destroy(val['public_id'])
      console.log(result)
    })
      await pendingpitchST.deleteOne({ _id: req.body.id }).exec();
      console.log("Removed from SharkTank pending pitches");
      res.status(200).json({ message: "Document removed successfully" });
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/expertpitchesST", async (req, res) => {
  try {
      let expert=req.body.email=="kowshik.20ei@kct.ac.in"?0: req.body.email == "jeevankumar.20ei@kct.ac.in" ? 1 : 2
    const docs = await PitchST.find({report:{$not: { $elemMatch: {expert: expert}}}}).lean().exec();

    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
      val.email = docs2.email
    }console.log(req.body.email)
    res.send({docs:docs});
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error to send pitches ST");
  }
});
app.get("/pitchesST", async (req, res) => {
  try {
    const docs = await PitchST.find({}).lean().exec();

    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
    res.send({docs:docs});
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error to send pitches ST");
  }
});

app.post("/addreportST",(req,res)=>{
let user={
  expert:req.body.expertemail=="kowshik.20ei@kct.ac.in"?0: req.body.expertemail == "jeevankumar.20ei@kct.ac.in" ? 1 : 2,
  one:req.body.one,
  two:req.body.two,
  three:req.body.three,
  four:req.body.four,
  five:req.body.five,
  six:req.body.six,
  seven:req.body.seven,
  eight:req.body.eight,
  nine:req.body.nine,
  ten:req.body.ten,
}
PitchST.findOneAndUpdate(
  { _id: req.body.pitchid },
  {
    $set: {
      "report.$[elem].one": user.one,
      "report.$[elem].two": user.two,
      "report.$[elem].three": user.three,
      "report.$[elem].four": user.four,
      "report.$[elem].five": user.five,
      "report.$[elem].six": user.six,
      "report.$[elem].seven": user.seven,
      "report.$[elem].eight": user.eight,
      "report.$[elem].nine": user.nine,
      "report.$[elem].ten": user.ten
    }
  },
  {
    arrayFilters: [{ "elem.expert": user.expert }],
    new: true
  },
  function(err, doc) {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating report");
    } else if (!doc) {
      console.log("Document not found");
      res.status(404).send("Document not found");
    } else if (doc.report.length === 0||doc.report[doc.report.length-1]['expert']!==user.expert) {
      // If the report array is empty, push a new object
      doc.report.push(user);
      doc.save(function(err) {
        if (err) {
          console.error(err);
        } else {
          console.log("New report object added successfully");
        }
      });
    } else {
      console.log("Report updated successfully");
    }
  }
);
})
app.post("/likepitchST", (req, res) => {
  PitchST.findOne({_id: req.body.pitchid}).then((pitch) => {
    if (pitch.upvotes.includes(req.body.id)) {
    PitchST.findOneAndUpdate(
        {_id: req.body.pitchid},
        {$pull: {upvotes: req.body.id}}
      ).then(() => {
        console.log("UnLiked the pitch");
      });
    } else {
      PitchST.findOneAndUpdate(
        {_id: req.body.pitchid},
        {$push: {upvotes: req.body.id}}
      ).then(() => {
        console.log("Liked the pitch");
      });
    }
  });
});

app.post("/addcommentST",(req ,res)=>{
  const updateField = req.body.expertemail === "kowshik.20ei@kct.ac.in" ? "comment.expert1" : req.body.expertemail === "jeevankumar.20ei@kct.ac.in" ?"comment.expert2":"comment.expert3"
PitchST.findOneAndUpdate({_id:req.body.pitchid},{ $set: {
      [updateField]: req.body.comment 
    }}).then(()=>console.log("Commented the pitch"))
  
})
app.post("/savepitchST",(req,res)=>{
  
  User3.findOne({_id:req.body.id}).then((pitch)=>{
if(pitch.saved.includes(req.body.pitchid)){
  User3.findOneAndUpdate({_id:req.body.id},{$pull:{saved:req.body.pitchid}}).then(()=>console.log("Unsaved the pitch"))
}
else{
    User3.findOneAndUpdate({_id:req.body.id},{$push:{saved:req.body.pitchid}}).then(()=>console.log("Saved the pitch"))
}
  })
})

app.post("/yourpitchST",async (req,res)=>{

  


  const results = await PitchST.find({userid:req.body.id}).lean().exec();
       for (let i = 0; i < results.length; i++) {
      const val = results[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
  
      res.send({docs:results}); // Sending the results back as response
  

})
app.post("/addLinkedInST",(req,res)=>{
  User3.findOneAndUpdate({_id:req.body.id}, { linkedIn: req.body.linkedin }).then(()=>console.log("Added LinkedIn"))
})
app.post("/SavedPitchST",(req, res) => {
 User3.findOne({_id: req.body.id},async function(err,docs){
  
    const savedIds = docs.saved; // Array of saved pitch IDs

  const results = await PitchST.find({_id: { $in: savedIds }}).lean().exec();
       for (let i = 0; i < results.length; i++) {
      const val = results[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
      res.send({docs:results,savedId:savedIds}); // Sending the results back as response
  
  })
});
app.post("/commentSTexpert",async(req,res)=>{
if(req.body.email=="kowshik.20ei@kct.ac.in"){
 const docs = await PitchST.find({ $expr: { $gt: [{ $strLenCP: "$comment.expert1" }, 0] }}).lean().exec()
    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
        res.send({docs:docs});
}
else if(req.body.email=="jeevankumar.20ei@kct.ac.in"){
   const docs = await PitchST.find({ $expr: { $gt: [{ $strLenCP: "$comment.expert2" }, 0] }}).lean().exec()
    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
        res.send({docs:docs});
}
else if(req.body.email=="harihaaran.20ei@kct.ac.in"){
 const docs = await PitchST.find({ $expr: { $gt: [{ $strLenCP: "$comment.expert3" }, 0] }}).lean().exec()
    for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
        res.send({docs:docs});
}
})
app.post("/reportsexpertST",async (req,res)=>{
  let expert=req.body.email=="kowshik.20ei@kct.ac.in"?0: req.body.email == "jeevankumar.20ei@kct.ac.in" ? 1 : 2

const docs =await PitchST.find(  {report: { $elemMatch: {expert: expert}}}).lean().exec();
  for (let i = 0; i < docs.length; i++) {
      const val = docs[i];
      const docs2 = await User3.findOne({ _id: val.userid }).lean().exec();
      val.name = docs2.name;
      val.linkedin = docs2.linkedIn;
           val.email = docs2.email
    }
    res.send({docs:docs})
})