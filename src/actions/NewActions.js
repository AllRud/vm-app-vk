export const SET_IS_NEW = 'SET_IS_NEW'

export function create(isNew) {
  return (dispatch) => {
    dispatch({
      type: SET_IS_NEW,
      payload: isNew,
    })
  }
}
