import { SET_IS_NEW } from '../actions/NewActions'

const initialState = {
  isNew: false,
}

export function newReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_NEW:
      return {
        ...state,
        isNew: action.payload,
      }
    default:
      return state
  }
}
