export const SET_SELECT_ITEM_ACTIVE = 'SET_SELECT_ITEM_ACTIVE'

export function setSelectItemActive(selectItemActive) {
  return (dispatch) => {
    dispatch({
      type: SET_SELECT_ITEM_ACTIVE,
      payload: selectItemActive,
    })
  }
}
