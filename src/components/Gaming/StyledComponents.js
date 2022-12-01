import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const GamingContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

export const GamingNavContent = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GamingMainContent = styled.div`
  width: 80%;
  overflow-y: auto;
  height: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const GamingLoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const GamingLoading = styled.div``

// gaming api success details

export const GamingHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark === 'true' ? '#212121' : '#f1f1f1')};
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const GamingHeading = styled.h1`
  font-family: roboto;
  padding-left: 20px;
  font-weight: 700;
  font-size: 28px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 10px;
  }
`

export const GamingIconContainer = styled.div`
  align-self: center;
  margin-left: 40px;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.dark === 'true' ? '#181818' : ' #e2e8f0'};
  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-left: 20px;
  }
`

export const GamingIcon = styled(SiYoutubegaming)`
  height: 45px;
  width: 45px;
  color: #ff0000;

  @media screen and (max-width: 768px) {
    height: 35px;
    width: 35px;
  }
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  height: 100%;
  padding: 10px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GamingVideoItem = styled.li`
  flex-grow: 1;
  margin: 5px;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`

export const GamingVideoItemImg = styled.img`
  width: 100%;
`

export const GamingVideoItemTitle = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: 25px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const GamingVideoItemViewCount = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

// gaming failure api details

export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const GamingFailureImg = styled.img`
  height: 250px;
  width: 280px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 230px;
  }
`

export const GamingFailureHeading = styled.h1`
  font-size: 20px;
  font-family: roboto;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
`

export const GamingFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  width: 450px;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 100%;
  }
`

export const GamingFailureRetryBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 4px;
  font-family: roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    height: 35px;
    width: 80px;
  }
`
export const GameLinkItem = styled(Link)`
  text-decoration: none;
  color: inherit;
`
