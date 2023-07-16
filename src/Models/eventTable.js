import React from 'react'
import DateToDay from './DateToDay'
import './eventTable.css'
function EventTable({val}) {
  return (
<div className='d-flex justify-content-center' style={{width:'95vw'}}>
      <table className='bg-light ' style={{display:"block",width:'100%',overflowX:'scroll',fontFamily:'Inter',borderCollapse:'collapse'}}>
     <thead>
       <tr>
      <th>Event</th>
      <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
     </thead>
      <tbody>
        {val.map((value,index)=>
     <tr key={index}>
      <td style={{padding:'10px'}}><a href={value['Link']}>{value['Title']}</a></td>
            <td style={{padding:'10px'}}>{value['Desc']}</td>
                  <td style={{padding:'10px'}}>{DateToDay(value['Date'].slice(0,10)) }&nbsp;{value['Date'].slice(11)}</td>
                        <td style={{padding:'10px'}}>{value['endDate']&& DateToDay(value['Date'].slice(0,10)) }&nbsp;{value['Date'].slice(11)}</td>
     </tr>
      )}
      </tbody>
    </table>
</div>
  )
}

export default EventTable
