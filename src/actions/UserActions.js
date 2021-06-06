export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export function handleLogout() {
  return function (dispatch) {
    //eslint-disable-next-line no-undef
    VK.Auth.logout((r) => {
      if (r.session == null) {
        dispatch({
          type: LOGOUT_SUCCESS,
          name: '',
          payload: 'You are not logged in.',
        })
      } else {
        dispatch({
          type: LOGOUT_FAIL,
          error: true,
          payload: new Error('Выход не удался'),
        })
      }
    })
  }
}

export function handleLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login((r) => {
      if (r.session) {
        let username = r.session.user.first_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}
