import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/* Movie
----------------------------------------*/
export const MOVIES = createRequestTypes('MOVIES')
export const MOVIE = createRequestTypes('MOVIE')
export const MOVIE_DETAILS = createRequestTypes('MOVIE_DETAILS')

/* Actor
----------------------------------------*/
export const ACTOR = createRequestTypes('ACTOR')

/* Search
----------------------------------------*/
export const SEARCH_MOVIE = createRequestTypes('SEARCH_MOVIE')
