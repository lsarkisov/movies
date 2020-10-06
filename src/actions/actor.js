import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const getActorAction = (payload) => ({
  type: types.ACTOR[REQUEST],
  payload,
})
