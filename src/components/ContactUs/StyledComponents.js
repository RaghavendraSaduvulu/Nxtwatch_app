import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  padding-left: 15px;
`

export const ContactUsHeading = styled.p`
  font-family: roboto;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#1e293b')};

  @media (min-width: 767px) and (max-width: 1000px) {
    font-size: 14px;
  }
`

export const ContactUsImagesList = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContactUsImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`

export const ContactUsDescription = styled.p`
  font-family: roboto;
  padding-right: 40px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#475569')};

  @media (min-width: 767px) and (max-width: 1000px) {
    font-size: 15px;
  }
`
