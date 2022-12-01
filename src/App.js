import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import './App.css'
import Home from './components/Home'
import Trending from './components/Trending'
import NxtwatchContext from './context/NxtwatchContext'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here

const defaultCategories = [
  {id: 'HOME', displayText: 'Home'},
  {id: 'TRENDING', displayText: 'Trending'},
  {id: 'GAMING', displayText: 'Gaming'},
  {id: 'VIDEOS', displayText: 'Saved Videos'},
]

class App extends Component {
  state = {
    isDark: false,
    categories: defaultCategories,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  addToSavedVideo = video => {
    const {savedVideos} = this.state
    this.setState({savedVideos: [...savedVideos, video]})
  }

  render() {
    const {categories, isDark, savedVideos} = this.state
    return (
      <NxtwatchContext.Provider
        value={{
          isDark,
          categories,
          savedVideos,
          changeTheme: this.changeTheme,
          addToSavedVideo: this.addToSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
