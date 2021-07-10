import React from 'react';
import { connect } from 'react-redux'
import { acSetRestrictHighValue, acSetRestrictLowValue } from '../../store/store';
import styles from "./Options1.module.css"

const getRestrictHighValue = state => state.restictHighValue
const getRestrictLowValue = state => state.restictLowValue

const Options1 = ({restictHighValue, restrictLowValue, setRestrictHighValue, setRestrictLowValue}) => {
    debugger
    return (
      <div className={styles.options}>
        <p>Options (high and low values level):</p>
        <div>
            <input type="range" value={restictHighValue} min = {restrictLowValue} max = {restictHighValue+10} 
            onChange={setRestrictHighValue}/> 
            <label for="hValue">high value:</label>
        </div>

        <div>
            <input type="range" value={restrictLowValue} min = {restrictLowValue-10} max = {restictHighValue} 
            onChange={setRestrictLowValue}/> 
            <label for="lValue">low value:</label>
        </div>

      </div>
    );
  }

  const mapsStateToProps = state => ({
    restrictHighValue: getRestrictHighValue(state),
    restrictLowValue: getRestrictLowValue(state),
  })

  const mapsDispatchToProps = dispatch => ({
    setRestrictHighValue : (e) => dispatch(acSetRestrictHighValue(e.target.value)),
    setRestrictLowValue : (e) => dispatch(acSetRestrictLowValue(e.target.value))
  })

  const Options1Connected = connect(mapsStateToProps, mapsDispatchToProps)(Options1)
  
  export default Options1Connected;