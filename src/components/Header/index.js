import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {
  NavbarContainer,
  NavbarLogo,
  NavContent,
  ThemeButton,
  DarkThemeIcon,
  LightThemeIcon,
  ProfileImg,
  LogoutBtn,
  BarsIcon,
  ButtonsContainer,
  LogoutIcon,
  PopupContainer,
  PopupContent,
  PopupText,
  PopupButtons,
  PopupCancelBtn,
  PopUpLogoutBtn,
  PopupDetails,
} from './StyledComponents'
import NxtwatchContext from '../../context/NxtwatchContext'

class Header extends Component {
  onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <>
        <NxtwatchContext.Consumer>
          {value => {
            const {isDark, changeTheme} = value
            const websiteLogo = isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

            return (
              <>
                <NavbarContainer dark={isDark.toString()}>
                  <Link to="/">
                    <NavbarLogo src={websiteLogo} alt="website logo" />
                  </Link>
                  <NavContent>
                    <ThemeButton
                      data-testid="theme"
                      type="button"
                      onClick={changeTheme}
                    >
                      {isDark ? <DarkThemeIcon /> : <LightThemeIcon />}
                    </ThemeButton>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                    <BarsIcon dark={isDark.toString()} />
                    <PopupContainer>
                      <Popup
                        modal
                        trigger={
                          <ButtonsContainer>
                            <LogoutBtn dark={isDark.toString()} type="button">
                              Logout
                            </LogoutBtn>
                            <LogoutIcon dark={isDark.toString()} />
                          </ButtonsContainer>
                        }
                      >
                        {close => (
                          <PopupContent>
                            <PopupDetails dark={isDark.toString()}>
                              <PopupText dark={isDark.toString()}>
                                Are you sure, you want to logout
                              </PopupText>
                              <PopupButtons>
                                <PopupCancelBtn
                                  dark={isDark.toString()}
                                  onClick={() => close()}
                                >
                                  Cancel
                                </PopupCancelBtn>
                                <PopUpLogoutBtn onClick={this.onClickLogoutBtn}>
                                  Confirm
                                </PopUpLogoutBtn>
                              </PopupButtons>
                            </PopupDetails>
                          </PopupContent>
                        )}
                      </Popup>
                    </PopupContainer>
                  </NavContent>
                </NavbarContainer>
              </>
            )
          }}
        </NxtwatchContext.Consumer>
      </>
    )
  }
}

export default withRouter(Header)
