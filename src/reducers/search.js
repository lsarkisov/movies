import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const search = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIE[SUCCESS]:
      return Object.assign({}, state, {
        searchedMovie: action.payload,
      })

    case types.SEARCH_MOVIE[FAILURE]:
      return Object.assign({}, state, {
        searchedMovie: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default search
