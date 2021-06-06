export const GET_INFO_REQUEST = 'GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS'
export const GET_INFO_FAIL = 'GET_INFO_FAIL'

export function getInfo(querry) {
  return function (dispatch) {
    dispatch({
      type: GET_INFO_REQUEST,
    })

    //eslint-disable-next-line no-undef
    if (querry) {
      dispatch({
        type: GET_INFO_SUCCESS,
        payload: 'Some info'
      })
    } else {
      dispatch({
        type: GET_INFO_FAIL,
        error: true,
        payload: new Error('Load error'),
      })
    }
  }
}
