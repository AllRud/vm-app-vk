import { SET_SELECT_ITEM_ACTIVE } from '../actions/SelectActions'

const initialState = {
  selectItemActive: '',
  selectList: '',
}

export function selectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECT_ITEM_ACTIVE:
      return { ...state, selectItemActive: action.payload }
    default:
      return state
  }
}
