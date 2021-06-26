import { combineReducers } from 'redux'
//import { pageReducer } from './page'
import { userReducer } from './user'
import { selectReducer } from './select'
//import { buttonCreateReducer } from './buttonCreate'
//import { buttonLoadReducer } from './buttonLoad'
import { newReducer } from './new'

export const rootReducer = combineReducers({
  //page: pageReducer,
  user: userReducer,
  select: selectReducer,
  creatNew: newReducer,
  //buttonLoad: buttonLoadReducer,
})
