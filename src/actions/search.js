import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const searchMovieAction = (payload) => ({
  type: types.SEARCH_MOVIE[REQUEST],
  payload,
})
