import { combineReducers } from 'redux'
import activities from './activities'

const appReducer = combineReducers({
  activities,
})

export default appReducer