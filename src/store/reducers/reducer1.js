
const vals = [
    { name: '0', lsim1: 0 },
    { name: '1', lsim1: 28 },
    { name: '2', lsim1: 30 },
    { name: '3', lsim1: 35 },
    { name: '4', lsim1: 41 },
    { name: '5', lsim1: 42 },
    { name: '6', lsim1: 45 },
    { name: '7', lsim1: 57 },
    { name: '8', lsim1: 78 },
    { name: '9', lsim1: 76 },
    { name: '10', lsim1: 50 },
    { name: '11', lsim1: 25 },
    { name: '12', lsim1: 27 },
    { name: '13', lsim1: 45 },
    { name: '14', lsim1: 78 },
    { name: '15', lsim1: 98 },
    { name: '16', lsim1: 105 },
    { name: '17', lsim1: 125 },
    { name: '18', lsim1: 130 },
    { name: '19', lsim1: 110 },
    { name: '20', lsim1: 128 },
    { name: '21', lsim1: 30 },
    { name: '22', lsim1: 35 },
    { name: '23', lsim1: 41 },
    { name: '24', lsim1: 42 },
    { name: '25', lsim1: 45 },
    { name: '26', lsim1: 57 },
    { name: '27', lsim1: 78 },
    { name: '28', lsim1: 76 },
    { name: '29', lsim1: 50 },
    { name: '30', lsim1: 25 },
    { name: '31', lsim1: 27 },
    { name: '32', lsim1: 45 },
    { name: '33', lsim1: 78 },
    { name: '34', lsim1: 98 },
    { name: '35', lsim1: 105 },
    { name: '36', lsim1: 125 },
    { name: '37', lsim1: 130 },
    { name: '38', lsim1: 0 },
    { name: '39', lsim1: 28 },
    { name: '40', lsim1: 30 },
    { name: '41', lsim1: 35 },
    { name: '42', lsim1: 41 },
    { name: '43', lsim1: 42 },
    { name: '44', lsim1: 45 },
    { name: '45', lsim1: 57 },
    { name: '46', lsim1: 78 },
    { name: '47', lsim1: 76 },
    { name: '48', lsim1: 50 },
    { name: '49', lsim1: 25 },
    { name: '50', lsim1: 27 },
    { name: '51', lsim1: 45 },
    { name: '52', lsim1: 78 },
    { name: '53', lsim1: 98 },
    { name: '54', lsim1: 105 },
    { name: '55', lsim1: 125 },
    { name: '56', lsim1: 130 },
    { name: '57', lsim1: 0 },
    { name: '58', lsim1: 28 },
    { name: '59', lsim1: 30 },
    { name: '60', lsim1: 35 },
    { name: '61', lsim1: 41 },
    { name: '62', lsim1: 42 },
    { name: '63', lsim1: 45 },
    { name: '64', lsim1: 57 },
    { name: '65', lsim1: 78 },
    { name: '66', lsim1: 76 },
    { name: '67', lsim1: 50 },
    { name: '68', lsim1: 25 },
    { name: '69', lsim1: 27 },
    { name: '70', lsim1: 45 },
    { name: '71', lsim1: 78 },
    { name: '72', lsim1: 98 },
    { name: '73', lsim1: 105 },
    { name: '74', lsim1: 125 },
    { name: '75', lsim1: 130 }
];

export const MAX_VALUE = 200
export const MIN_VALUE = -50
const ELAPSED_TIME = 1000

// modelling actions
const START_SHIFT = "START_SHIFT"
const START_SHIFT_AUTOMATIC = "START_SHIFT_AUTOMATIC"
const STOP_SHIFT = "STOP_SHIFT"
const SET_RESTRICT_HIGH_VALUE = "SET_RESTRICT_HIGH_VALUE"
const SET_RESTRICT_LOW_VALUE = "SET_RESTRICT_LOW_VALUE"

let lsim1State = {
    data: vals,
    intervalId: undefined,
    restrictHighValue: MAX_VALUE,
    restrictLowValue: MIN_VALUE,
    lsim1: 0,
    lsim2: 0,
    lsim3: 0,
    lsim4: 0,
    lsim5: 0
}

export const acStart = () => ({type: START_SHIFT})
export const acStartAutomatic = (intervalId) => ({type: START_SHIFT_AUTOMATIC, intervalId})
export const acStop = () => ({type: STOP_SHIFT})
export const acSetRestrictHighValue = hValue => ({type: SET_RESTRICT_HIGH_VALUE, hValue})
export const acSetRestrictLowValue = lValue => ({type: SET_RESTRICT_LOW_VALUE, lValue})

// thunk creator
export function tcStartAutomatic() {
  return function(dispatch) {
    let intervalId = setInterval(() => dispatch(acStart()), ELAPSED_TIME)
    dispatch(acStartAutomatic(intervalId))
  }
}

const reducer1 = (state = lsim1State, action) => {
  debugger
  const outOfBounds = (elem) => elem.lsim1 > state.restrictHighValue || elem.lsim1 < state.restrictLowValue  

  switch (action.type) {

      case START_SHIFT:
        let newData = [...state.data]
        newData.unshift(newData.pop())
        let lsim1ValueForSmile = newData.some(outOfBounds) ? 1 : 0
        return Object.assign({}, state, { data: newData, lsim1: lsim1ValueForSmile })
  
      case START_SHIFT_AUTOMATIC:
        return Object.assign({}, state, { intervalId: action.intervalId })
  
      case STOP_SHIFT:
        clearInterval(state.intervalId);
        return Object.assign({}, state, { intervalId: undefined })

      case SET_RESTRICT_HIGH_VALUE:
        return Object.assign({}, state, {restrictHighValue: action.hValue})

      case SET_RESTRICT_LOW_VALUE:
        return Object.assign({}, state, {restrictLowValue: action.lValue})
          
      default:
        return state
    }
}

export default reducer1