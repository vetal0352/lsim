import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import styles from "./GraphicLSIM1.module.css"
import store from "../../store/store";

const ELAPSED_TIME = 1000
const restrictHigh = 128
const restrictLow = 32

const renderLineChart = (
  <LineChart width={900} height={300} data={store.getState().data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <ReferenceLine y={restrictLow} label="-1" stroke="red" />
      <ReferenceLine y={restrictHigh} label="+1" stroke="red" />
      <Line type="monotone" dataKey="lsim1" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
  </LineChart>
);

class Graphic extends React.Component {
  
  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), ELAPSED_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    //const { baseTime, startedAt, stoppedAt } = this.props;
    
    return (
      <div className={styles.graphic}>
        ЛСІМ1
        <div>Time: {ELAPSED_TIME}</div>
        <div>
          {renderLineChart}
        </div>
        <div>
          <button onClick={() => this.props.startShift(ELAPSED_TIME)}>Start</button>
          <button onClick={() => this.props.stopShift()}>Stop</button>
          <button onClick={() => this.props.resetShift()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Graphic;