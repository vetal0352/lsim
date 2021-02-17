import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import styles from "./GraphicLSIM1.module.css"

const data = [
  { name: '10', uv: 28 },
  { name: '20', uv: 30 },
  { name: '30', uv: 35 },
  { name: '40', uv: 41 },
  { name: '50', uv: 42 },
  { name: '60', uv: 45 },
  { name: '70', uv: 57 },
  { name: '80', uv: 78 },
  { name: '90', uv: 76 },
  { name: '100', uv: 50 },
  { name: '110', uv: 25 },
  { name: '120', uv: 27 },
  { name: '130', uv: 45 },
  { name: '140', uv: 78 },
  { name: '150', uv: 98 },
  { name: '160', uv: 105 },
  { name: '170', uv: 125 },
  { name: '180', uv: 130 }
];

const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <ReferenceLine y={32} label="-1" stroke="red" />
    <ReferenceLine y={128} label="+1" stroke="red" />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

const Graphic = () => {
    return (
      <div className={styles.graphic}>
        ЛСІМ1
        {renderLineChart}
      </div>
    );
  }
  
  export default Graphic;