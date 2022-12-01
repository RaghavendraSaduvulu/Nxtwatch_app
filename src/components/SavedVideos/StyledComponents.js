import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

export const SavedVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const SavedVideosContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const SavedVideosNavContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SavedVideosMainContent = styled.div`
  width: 80%;
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

// no saved videos details

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const NoSavedVideosImg = styled.img`
  width: 330px;
  height: 220px;

  @media screen and (max-width: 767px) {
    width: 300px;
    height: 200px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
`

export const NoSavedVideosDescription = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 22px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
`

export const SavedVideosListContainer = styled.div``

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark === 'true' ? '#212121' : '#f1f1f1')};
  padding: 15px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const SavedVideosHeadingIconContainer = styled.div`
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

export const SavedVideosHeadingIcon = styled(HiFire)`
  height: 45px;
  width: 45px;
  color: #ff0000;

  @media screen and (max-width: 768px) {
    height: 35px;
    width: 35px;
  }
`

export const SavedVideosHeading = styled.h1`
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

export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const SavedVideosListItem = styled.li``

export const SavedLink = styled(Link)`
  text-decoration: none;
`

export const SavedVideosListItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const SavedVideosListItemImg = styled.img`
  width: 40%;
  align-self: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SavedVideosListItemContent = styled.div`
  padding-left: 10px;
`

export const SavedVideosListItemHeading = styled.p`
  font-size: 18px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`

export const SavedVideosListItemChannelName = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  line-height: 21px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const SavedVideosListItemViewWithPublish = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosListItemViewCount = styled.p`
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

export const SavedVideosListItemPublishedAt = styled.p`
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
