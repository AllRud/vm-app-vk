import {
  GET_CREATE_SUCCESS,
  GET_CREATE_FAIL,
} from '../actions/ButtonCreateActions'

const initialState = {
  error: '',
  requestInfo: false,
}

export function buttonCreateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CREATE_SUCCESS:
      return { ...state, requestInfo: action.payload }

    case GET_CREATE_FAIL:
      return { ...state, error: action.payload.message }

    default:
      return state
  }
}
