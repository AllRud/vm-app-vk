import {
  SET_SELECT_COURSE_ACTIVE,
  SET_SELECT_MODULE_ACTIVE,
} from '../actions/SelectActions'

const initialState = {
  selectCourseActive: '',
  selectModuleActive: '',
}

export function selectReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECT_COURSE_ACTIVE:
      return {
        ...state,
        selectCourseActive: action.payload,
      }
    case SET_SELECT_MODULE_ACTIVE:
      return {
        ...state,
        selectModuleActive: action.payload,
      }
    default:
      return state
  }
}
