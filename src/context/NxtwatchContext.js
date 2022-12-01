import React from 'react'

const NxtwatchContext = React.createContext({
  isDark: '',
  categories: [],
  savedVideos: [],
  changeTheme: () => {},
  addToSavedVideo: () => {},
})

export default NxtwatchContext
