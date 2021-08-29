
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk"
import reducer1 from './reducers/reducer1'

const mainReducer = combineReducers({
  lsim1State: reducer1
})

let store = createStore(mainReducer, applyMiddleware(thunk))
//console.log(store.getState())

export default store