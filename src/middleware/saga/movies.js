import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* getAllMoviesSuccess(data) {
  const payload = yield call(services.movies)

  try {
    yield put({ type: types.MOVIES[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.MOVIES[FAILURE], error })
  }
}

export function* getAllMoviesRequest() {
  yield takeEvery(types.MOVIES[REQUEST], getAllMoviesSuccess)
}

function* getMovieDetailsSuccess(data) {
  const payload = yield call(() => services.movieDetails(data.payload.id))

  try {
    yield put({ type: types.MOVIE_DETAILS[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.MOVIE_DETAILS[FAILURE], error })
  }
}

export function* getMovieDetailsRequest() {
  yield takeEvery(types.MOVIE_DETAILS[REQUEST], getMovieDetailsSuccess)
}
