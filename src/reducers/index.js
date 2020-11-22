import { combineReducers } from 'redux'
import { movies } from './movies'
import { session } from './session'

export default combineReducers({
  movies,
  session,
})
