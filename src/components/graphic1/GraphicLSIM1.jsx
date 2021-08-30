import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, CartesianGrid } from 'recharts';
import styles from "./GraphicLSIM1.module.css"
import { acStart, acStop, tcStartAutomatic } from "../../store/reducers/reducer1";

const getDataValues = state => state.lsim1State.data
const getIntervalId = state => state.lsim1State.intervalId
const getRestrictHighValue = state => state.lsim1State.restrictHighValue
const getRestrictLowValue = state => state.lsim1State.restrictLowValue

const Graphic = (props) => {
  debugger
  return (
    <div className={styles.graphic}>
        <LineChart width={900} height={300} data={props.values} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine className={styles.refline} y={props.restrictLowValue} label="-1" stroke="red" ifOverflow="extendDomain" />
          <ReferenceLine className={styles.refline} y={props.restrictHighValue} label="+1" stroke="red" ifOverflow="extendDomain" />
          <Line type="monotone" dataKey="lsim1" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
        <p />
        {!props.isShifted && <button onClick={props.start}>Shift 1 step</button>}
        {!props.isShifted && <button onClick={props.startAutomatic}>Shift automatic</button>}
        {props.isShifted && <button onClick={props.stop}>Stop</button>}
    </div>
  )
}

const mapStateToProps = state => ({
  values: getDataValues(state),
  isShifted: getIntervalId(state),
  restrictHighValue: getRestrictHighValue(state),
  restrictLowValue: getRestrictLowValue(state)
})

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(acStart()),
  startAutomatic: () => dispatch(tcStartAutomatic()),
  stop: () => dispatch(acStop())
})

const GraphicConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Graphic)


export default GraphicConnected;