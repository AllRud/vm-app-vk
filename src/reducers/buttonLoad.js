import {
  GET_INFO_REQUEST,
  GET_INFO_SUCCESS,
  GET_INFO_FAIL,
} from '../actions/ButtonLoadActions'

const initialState = {
  error: '',
  isFetching: false,
  requestInfo: '',
}

export function buttonLoadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return { ...state, isFetching: true }

    case GET_INFO_SUCCESS:
      return { ...state, isFetching: false, requestInfo: action.payload }

    case GET_INFO_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
