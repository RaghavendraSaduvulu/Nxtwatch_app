import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundNavContent,
  NotFoundMainContent,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './StyledComponents'
import NxtwatchContext from '../../context/NxtwatchContext'
import Header from '../Header'
import NavItemsList from '../NavItemsList'
import ContactUs from '../ContactUs'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundContainer dark={isDark.toString()}>
          <Header />
          <NotFoundContent>
            <NotFoundNavContent dark={isDark.toString()}>
              <NavItemsList />
              <ContactUs />
            </NotFoundNavContent>
            <NotFoundMainContent>
              <NotFoundImg src={notFoundImage} alt="not found" />
              <NotFoundHeading dark={isDark.toString()}>
                Page Not found
              </NotFoundHeading>
              <NotFoundDescription dark={isDark.toString()}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundMainContent>
          </NotFoundContent>
        </NotFoundContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound
