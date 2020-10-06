import { all } from 'redux-saga/effects'
import { searchMovieRequest } from 'middleware/saga/search'
import {
  getAllMoviesRequest,
  getMovieDetailsRequest,
} from 'middleware/saga/movies'
import { getActorRequest } from 'middleware/saga/actor'

export default function* rootSaga() {
  yield all([
    searchMovieRequest(),
    getAllMoviesRequest(),
    getMovieDetailsRequest(),
    getActorRequest(),
  ])
}
