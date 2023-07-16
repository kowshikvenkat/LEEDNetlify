import React from 'react'

function DateToDay(a) {
    let s = new Date();
const months = ["January" , "February", "March","April","May","June","July","August","September","October","November","December"]
 const wordArray = a.split("-");
 if(wordArray[0]==s.getFullYear()){
  if(wordArray[1]==s.getMonth()+1&&wordArray[2]==s.getDate()){//getmonth+1 gives current month
    return "Today";
  }

   else if(wordArray[2]%10==1){
    
   let day = <>{wordArray[2]}<sup>st</sup> {months[wordArray[1]-1]}</>
   return day
    }
    else  if(wordArray[2]%10==2){
   let day = <>{wordArray[2]}<sup>nd</sup> {months[wordArray[1]-1]}</>
   return day
    }
    else  if(wordArray[2]%10==3){
       
   let day = <>{wordArray[2]}<sup>rd</sup> {months[wordArray[1]-1]}</>
   return day
    }
    else  if(wordArray[2]%10>3||wordArray[2]%10==0){
     
   let day = <>{wordArray[2]}<sup>th</sup> {months[wordArray[1]-1]}</>
   return day
    }
}
if(wordArray[0]!=s.getFullYear()){
     if(wordArray[2]%10==1){
   let day = <>{wordArray[2]}<sup>st</sup> {months[wordArray[1]-1]} {wordArray[0]}</>
   return day
    }
    else  if(wordArray[2]%10==2){
   let day = <>{wordArray[2]}<sup>nd</sup> {months[wordArray[1]-1]} {wordArray[0]}</>
   return day
    }
      else if(wordArray[2]%10==3){
   let day = <>{wordArray[2]}<sup>rd</sup> {months[wordArray[1]-1]} {wordArray[0]}</>
   return day
    }
      else if(wordArray[2]%10>3||wordArray[2]%10==0){
     
   let day = <>{wordArray[2]}<sup>th</sup> {months[wordArray[1]-1]} {wordArray[0]}</>
   return day
    }
     
}
}

export default DateToDay
