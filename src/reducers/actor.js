import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const actor = (state = {}, action) => {
  switch (action.type) {
    case types.ACTOR[SUCCESS]:
      return Object.assign({}, state, {
        person: action.payload,
      })

    case types.ACTOR[FAILURE]:
      return Object.assign({}, state, {
        person: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default actor
