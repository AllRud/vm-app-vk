import {
  GET_CREATE_REQUEST,
  GET_CREATE_SUCCESS,
  GET_CREATE_FAIL,
} from '../actions/ButtonCreateActions'

const initialState = {
  error: '',
  isFetching: false,
  requestInfo: '',
}

export function buttonCreateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CREATE_REQUEST:
      return { ...state, isFetching: true }

    case GET_CREATE_SUCCESS:
      return { ...state, isFetching: false, requestInfo: action.payload }

    case GET_CREATE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
