import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* getActorSuccess(data) {
  const payload = yield call(() => services.actor(data.payload.actorId))

  try {
    yield put({ type: types.ACTOR[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.ACTOR[FAILURE], error })
  }
}

export function* getActorRequest() {
  yield takeEvery(types.ACTOR[REQUEST], getActorSuccess)
}
