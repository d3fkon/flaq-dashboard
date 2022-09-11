import * as ACTION_TYPES from '../actions/action-types'

const initialState = {
  userInfo: {},
}

export const userReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.SET_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      }

    default:
      return state
  }
}
