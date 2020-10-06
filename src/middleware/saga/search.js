import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* searchMovieSuccess(data) {
  const payload = yield call(() => services.searchMovie(data.payload.title))

  try {
    yield put({ type: types.SEARCH_MOVIE[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.SEARCH_MOVIE[FAILURE], error })
  }
}

export function* searchMovieRequest() {
  yield takeEvery(types.SEARCH_MOVIE[REQUEST], searchMovieSuccess)
}
