import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const getMoviesAction = (payload) => ({
  type: types.MOVIES[REQUEST],
  payload,
})

export const getMovieDetailsAction = (payload) => ({
  type: types.MOVIE_DETAILS[REQUEST],
  payload,
})
