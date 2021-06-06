import React from 'react'

export const appMode = {
  appCourse: '',
  appModule: '',
}

export const AppModeContext = React.createContext({
  appMode: appMode,
  toggleAppMode: () => {},
})
