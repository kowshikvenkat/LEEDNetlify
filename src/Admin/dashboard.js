import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip ,PieChart, Pie,Legend,Cell} from 'recharts';
function Dashboard() {
        const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
   const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const piedata = [
  {name: 'LEED events', value: 14.7},
  {name: 'Daily users', value: 45},
  {name: 'Revenue', value:33},
  {name: 'Web Traffic', value: 11.45}
];
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 400, pv: 2600, amt: 2600},{name: 'Page C', uv: 600, pv: 2800, amt: 2800},{name: 'Page D', uv: 400, pv: 3000, amt: 3000}];
  return (
    <div>
      <div style={{height:'fit-content'}} className=' w-100 d-flex flex-column align-items-center justify-content-center'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart> <br />
  <a className='btn btn-primary' href="https://analytics.google.com/analytics/web/#/p356046420/reports/intelligenthome" target="_blank">Get More Analytics</a>
  <div className='d-flex justify-content-evenly my-5 w-100' >
    <div className='p-3' style={{boxShadow:'0 0 5px grey',borderRadius:'10px',backgroundImage:'linear-gradient(to right,#ecffe6,white,white,#ecffe6)'}}>
      <h5 className='text-success'>Website Viewers</h5>
      <p className='text-muted'>Last 7 days</p>
      <b className='text-danger h2'>16</b>
    </div>
      <div className='p-3' style={{boxShadow:'0 0 5px grey',borderRadius:'10px',backgroundImage:'linear-gradient(to right,#ecffe6,white,white,#ecffe6)'}}>
      <h5 className='text-success'>Ideation Pitched</h5>
      <p className='text-muted' style={{fontSize:'12px'}}>From Day 1</p>
      <b className='text-danger h2'>100</b>
    </div>
     <div className='p-3' style={{boxShadow:'0 0 5px grey',borderRadius:'10px',backgroundImage:'linear-gradient(to right,#ecffe6,white,white,#ecffe6)'}}>
      <h5 className='text-success'>LEED Event Enrollments</h5>
      <p className='text-muted' style={{fontSize:'12px'}}>Last 30 days</p>
      <b className='text-danger h2'>50</b>
    </div>
  </div>
<PieChart width={730} height={300}>
      <Pie
         data={piedata}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {piedata.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
          </div>
    </div>
  )
}

export default Dashboard
