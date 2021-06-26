export const GET_CREATE_SUCCESS = 'GET_CREATE_SUCCESS'
export const GET_CREATE_FAIL = 'GET_CREATE_FAIL'

export function getCreate(create) {
  return function (dispatch) {
    //eslint-disable-next-line no-undef
    if (create) {
      // результат загрузки модуля редактирования - ок
      dispatch({
        type: GET_CREATE_SUCCESS,
        payload: true,
      })
    } else {
      dispatch({
        type: GET_CREATE_FAIL,
        error: true,
        payload: false,
      })
    }
  }
}
