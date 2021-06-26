export const SET_SELECT_COURSE_ACTIVE = 'SET_SELECT_COURSE_ACTIVE'
export const SET_SELECT_MODULE_ACTIVE = 'SET_SELECT_MODULE_ACTIVE'

export function setSelectItemActive(selectItemActive, selectType) {
  return (dispatch) => {
    switch (selectType) {
      case 'course':
        dispatch({
          type: SET_SELECT_COURSE_ACTIVE,
          payload: selectItemActive,
        })
        break
      case 'module':
        dispatch({
          type: SET_SELECT_MODULE_ACTIVE,
          payload: selectItemActive,
        })
        break
      default:
        break
    }
  }
}
