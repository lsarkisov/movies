import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const movies = (state = {}, action) => {
  switch (action.type) {
    case types.MOVIES[SUCCESS]:
      return Object.assign({}, state, {
        allMovies: action.payload,
      })

    case types.MOVIES[FAILURE]:
      return Object.assign({}, state, {
        allMovies: null,
      })

    case types.MOVIE_DETAILS[SUCCESS]:
      return Object.assign({}, state, {
        details: action.payload,
      })

    case types.MOVIE_DETAILS[FAILURE]:
      return Object.assign({}, state, {
        details: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default movies
