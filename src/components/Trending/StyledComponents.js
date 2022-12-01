import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const TrendingContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const TrendingNavContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const TrendingMainContent = styled.div`
  width: 80%;
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
// loading details

export const TrendingLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const TrendingLoader = styled.div``

// failure details

export const TrendingFailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const TrendingFailureImg = styled.img`
  height: 250px;
  width: 280px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 230px;
  }
`

export const TrendingFailureHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
`

export const TrendingFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  width: 480px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 100%;
  }
`

export const TrendingFailureRetryButton = styled.button`
  background-color: #4f46e5;
  height: 40px;
  width: 100px;
  cursor: pointer;
  border: none;
  color: #ffffff;
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;

  @media screen and (min-width: 767px) {
    height: 35px;
    width: 80px;
    font-size: 14px;
  }
`

// success details

export const TrendingLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const TrendingHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark === 'true' ? '#212121' : '#f1f1f1')};
  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const TrendingHeading = styled.h1`
  font-family: roboto;
  padding-left: 20px;
  font-weight: 700;
  font-size: 25px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 10px;
  }
`

export const TrendingIconContainer = styled.div`
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

export const TrendingIcon = styled(HiFire)`
  height: 45px;
  width: 45px;
  color: #ff0000;

  @media screen and (max-width: 768px) {
    height: 35px;
    width: 35px;
  }
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const TrendingVideoItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const TrendingVideoItemImg = styled.img`
  width: 40%;
  align-self: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const TrendingVideoItemContent = styled.div`
  padding-left: 10px;
`

export const TrendingVideoItemTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`

export const TrendingVideoItemChannel = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  line-height: 21px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TrendingVideoViewsWithPublished = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingVideoItemViewCount = styled.p`
  margin: 0px;
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  align-self: center;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TrendingVideoItemPublishedAt = styled.p`
  margin: 0px;
  align-self: center;
  font-family: roboto;
  font-size: 16px;
  font-weight: 400;
  padding-left: 5px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TrendingMobileVideoItemContent = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingDesktopVideoContent = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
