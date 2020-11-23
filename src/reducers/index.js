import { combineReducers } from 'redux'
import { movies } from './movies'
import { session } from './session'
import { database } from './database'

export default combineReducers({
  movies,
  session,
  database,
})
