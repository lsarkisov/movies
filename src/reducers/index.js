import { combineReducers } from 'redux'
import search from './search'
import actor from './actor'
import movies from './movies'

const reducers = combineReducers({
  search,
  actor,
  movies,
})

export default reducers