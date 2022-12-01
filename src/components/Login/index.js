import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtwatchContext from '../../context/NxtwatchContext'

import {
  LoginContainer,
  LoginFormContent,
  LoginImg,
  InputElement,
  Label,
  ShowPasswordContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    showPassword: false,
  }

  onSubmitFormSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFormFailure = err => {
    this.setState({errMsg: err})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitFormSuccess(data.jwt_token)
    } else {
      this.onSubmitFormFailure(data.error_msg)
    }
  }

  onChangeUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {username, password, showPassword, errMsg} = this.state

    const passwordType = showPassword ? 'text' : 'password'

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          const loginImage = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const token = Cookies.get('jwt_token')
          if (token !== undefined) {
            const {history} = this.props
            history.replace('/')
          }

          return (
            <LoginContainer dark={isDark.toString()}>
              <LoginFormContent
                dark={isDark.toString()}
                onSubmit={this.onSubmitForm}
              >
                <LoginImg src={loginImage} alt="website logo" />
                <Label dark={isDark.toString()} htmlFor="username">
                  username
                </Label>
                <InputElement
                  dark={isDark.toString()}
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUsernameInput}
                  placeholder="Username"
                />
                <Label dark={isDark.toString()} htmlFor="password">
                  password
                </Label>
                <InputElement
                  dark={isDark.toString()}
                  id="password"
                  type={passwordType}
                  value={password}
                  onChange={this.onChangePasswordInput}
                  placeholder="Password"
                />
                <ShowPasswordContainer>
                  <ShowPasswordInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeCheckbox}
                  />
                  <ShowPasswordLabel
                    dark={isDark.toString()}
                    htmlFor="checkbox"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                <ErrorMessage>{errMsg}</ErrorMessage>
              </LoginFormContent>
            </LoginContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Login
