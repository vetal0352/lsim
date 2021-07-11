import React from 'react';
import { connect } from 'react-redux'
import { acSetRestrictHighValue, acSetRestrictLowValue, MAX_VALUE, MIN_VALUE } from '../../store/store';
import styles from "./Options1.module.css"

const getRestrictHighValue = state => state.restrictHighValue
const getRestrictLowValue = state => state.restrictLowValue

const Options1 = (props) => {
    //debugger
    return (
      <div className={styles.options}>
        <p>Options (high and low values level):</p>
        <div>
            <input id = "hValue" type="range" value={props.restrictHighValue} min = {MIN_VALUE} max = {MAX_VALUE} 
            onChange={props.setRestrictHighValue}/> 
            <label htmlFor="hValue">high value:</label>
        </div>

        <div>
            <input id = "lValue" type="range" value={props.restrictLowValue} min = {MIN_VALUE} max = {MAX_VALUE} 
            onChange={props.setRestrictLowValue}/> 
            <label htmlFor="lValue">low value:</label>
        </div>

      </div>
    );
  }

  const mapStateToProps = state => ({
    restrictHighValue: getRestrictHighValue(state),
    restrictLowValue: getRestrictLowValue(state)    
  })

  const mapDispatchToProps = dispatch => ({
    setRestrictHighValue : (e) => dispatch(acSetRestrictHighValue(e.target.value)),
    setRestrictLowValue : (e) => dispatch(acSetRestrictLowValue(e.target.value))
  })

  const Options1Connected = connect(mapStateToProps, mapDispatchToProps)(Options1)
  
  export default Options1Connected;