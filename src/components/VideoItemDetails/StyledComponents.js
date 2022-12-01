import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const VideoItemDetailsContent = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsNavContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const VideoItemDetailsMainContent = styled.div`
  width: 80%;
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const VideoItemDetailsFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`

export const VideoItemDetailsFailureImg = styled.img`
  height: 250px;
  width: 280px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 230px;
  }
`

export const VideoItemDetailsFailureHeading = styled.h1`
  font-family: roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
`

export const VideoItemDetailsFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  width: 450px;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? ' #64748b' : '#475569')};

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 100%;
  }
`

export const VideoItemDetailsFailureRetryBtn = styled.button`
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

  @media screen and (min-width: 767px) {
    height: 35px;
    width: 80px;
    font-size: 14px;
  }
`

// video item details loading view

export const VideoItemDetailsLoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VideoItemDetailsLoading = styled.div``

// video item details loading success view details

export const VideoItemDetailsCard = styled.div`
  padding: 30px 20px;
  @media (min-width: 768px) and (max-width: 1100px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0px;
  }
`

export const VideoItemDetailsReactPlayerContainer = styled.div`
  height: 500px;

  @media (min-width: 768px) and (max-width: 1100px) {
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    height: 260px;
  }
`

export const VideoItemDetailsTitle = styled.h1`
  font-family: roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  text-align: left;
  padding: 15px 0px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 16px;
    padding-left: 10px;
  }
`

export const VideoItemDetailsVideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 10px;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const VideoItemDetailsViewWithPublishAt = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsViewCount = styled.p`
  font-family: roboto;
  margin: 0px;
  font-weight: 400px;
  font-size: 18px;
  align-self: center;
  color: ${props => (props.dark === 'true' ? ' #94a3b8' : '#64748b')};
`

export const VideoItemDetailsPublishAt = styled.p`
  font-family: roboto;
  margin: 0px;
  font-weight: 400px;
  font-size: 18px;
  align-self: center;
  color: ${props => (props.dark === 'true' ? ' #94a3b8' : '#64748b')};
`

export const VideoItemDetailsLikeWithSave = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsLike = styled.button`
  font-family: roboto;
  margin: 0px;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0px 10px;
  font-weight: 500px;
  font-size: 18px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active === 'true' ? '#2563eb' : '#64748b')};

  @media screen and (max-width: 767px) {
    padding-left: 0px;
  }
`

export const VideoItemDetailsLikeIcon = styled(AiOutlineLike)`
  padding-right: 5px;
  align-self: center;
  height: 28px;
  width: 28px;
`

export const VideoItemDetailsDisLike = styled.button`
  font-family: roboto;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0px 10px;
  font-weight: 500px;
  font-size: 18px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active === 'true' ? '#2563eb' : '#64748b')};
`

export const VideoItemDetailsDislikeIcon = styled(AiOutlineDislike)`
  padding-right: 5px;
  align-self: center;
  height: 28px;
  width: 28px;
`

export const VideoItemDetailsSave = styled.p`
  font-family: roboto;
  margin: 0px;
  padding: 0px 10px;
  font-weight: 500px;
  font-size: 18px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active === 'true' ? '#2563eb' : '#64748b')};
`

export const VideoItemDetailsSaveIcon = styled(BiListPlus)`
  padding-right: 5px;
  align-self: center;
  height: 28px;
  width: 28px;
`

export const VideoItemDetailsLine = styled.hr`
  color: ${props => (props.active === 'true' ? '#2563eb' : '#64748b')};
  margin: 0px;

  @media screen and (max-width: 767px) {
    margin: 0px 10px;
  }
`

export const VideoItemDetailsProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

export const VideoItemDetailsProfileImg = styled.img`
  height: 60px;
  width: 60px;
  align-self: center;
`

export const VideoItemDetailsProfileNameWithSubscribes = styled.div`
  margin-left: 20px;
  align-self: center;
`

export const VideoItemDetailsProfileName = styled.h1`
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? ' #f4f4f4' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const VideoItemDetailsProfileSubscribesCount = styled.p`
  font-family: roboto;
  font-weight: 400px;
  font-size: 16px;
  align-self: center;
  color: ${props => (props.dark === 'true' ? ' #94a3b8' : '#64748b')};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const VideoItemDetailsDescription = styled.p`
  margin-left: 100px;
  font-family: roboto;
  font-weight: 500px;
  font-size: 18px;
  align-self: center;
  color: ${props => (props.dark === 'true' ? ' #f4f4f4' : '#475569')};

  @media screen and (max-width: 767px) {
    margin-left: 10px;
    font-size: 16px;
  }
`
