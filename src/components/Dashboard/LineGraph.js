import { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../../index.css';

function LineGraph({uid}) {
  const data = [{date: '5/6/2023', total: 2.5, goal: 7.3, amt: 2400}, {date: '5/7/2023', total: 3.5, goal: 7.3, amt: 2400}, {date: '5/8/2023', total: 6.8, goal: 7.3, amt: 2400},  {date: '5/9/2023', total: 9.0, goal: 7.3, amt: 2400}];
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [emissions, setEmission] = useState({});

  useEffect(() => {
    // This code will only run once when the component is mounted
    fetch('api/custcreate', {
      method: 'POST',
      body: JSON.stringify({ key: 'some value' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      console.log("useEffect");
    return () => {
      // This code will run when the component is unmounted
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div style={{ margin: '0 auto' }}>
      <ResponsiveContainer width='98%' aspect={4.0/2.0}>
        <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <Line type="monotone" dataKey="goal" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>


 )
}

export default LineGraph;