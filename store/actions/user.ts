import * as ACTION_TYPES from '../actions/action-types'

export const setUserInfo = (data: any) => {
  return {
    type: ACTION_TYPES.SET_USER_INFO,
    payload: data,
  }
}
