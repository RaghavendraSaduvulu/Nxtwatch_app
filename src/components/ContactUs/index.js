import {
  ContactUsContainer,
  ContactUsHeading,
  ContactUsImagesList,
  ContactUsImg,
  ContactUsDescription,
} from './StyledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const ContactUs = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <ContactUsContainer>
          <ContactUsHeading dark={isDark.toString()}>
            contact us
          </ContactUsHeading>
          <ContactUsImagesList>
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <ContactUsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </ContactUsImagesList>
          <ContactUsDescription dark={isDark.toString()}>
            Enjoy! Now to see your channels and recommendations!
          </ContactUsDescription>
        </ContactUsContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default ContactUs
