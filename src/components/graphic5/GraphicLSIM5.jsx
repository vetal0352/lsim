import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from "./GraphicLSIM5.module.css"

const data = [
  { name: 'Page A', uv: 400, pv: 240, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 240, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 240, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 240, amt: 2400 },
  { name: 'Page E', uv: 270, pv: 240, amt: 2400 },
  { name: 'Page F', uv: 225, pv: 240, amt: 2400 },
];

const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#880000+" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

const Graphic = () => {
    return (
      <div className={styles.graphic}>
        ЛСІИ5
        {renderLineChart}
      </div>
    );
  }
  
  export default Graphic;