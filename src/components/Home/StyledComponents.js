import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const HomeContent = styled.div`
  height: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const HomeNavContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HomeMainContent = styled.div`
  width: 80%;
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SearchLoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchLoaderContent = styled.div``
// failure view
export const SearchFailureContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchFailureHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  line-height: 20px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : ' #1e293b')};
`

export const SearchFailureImg = styled.img`
  height: 250px;
  width: 280px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 230px;
  }
`

export const SearchFailureDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
  width: 480px;
  text-align: center;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SearchFailureRetryBtn = styled.button`
  font-family: roboto;
  font-weight: 500;
  color: #ffffff;
  height: 43px;
  width: 100px;
  background-color: #4f46e5;
  border: none;
  outline: none;
  line-height: 21px;
  border-radius: 4px;
`

// home videos details

export const SearchWidthList = styled.div`
  padding: 20px;
  height: 100%;
`

export const HomeVideosList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: 1px solid ${props => (props.dark === 'true' ? '#909090' : '#cccccc')};
  outline: none;
  padding: 5px 15px;
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  background-color: ${props => props.dark === 'true' && 'transparent'};
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#000')};
`

export const SearchButton = styled.button`
  width: 50px;
  border: 1px solid ${props => (props.dark === 'true' ? '#909090' : '#cccccc')};
  outline: none;
  background-color: ${props => props.dark === 'true' && '#313131'};
`

export const SearchIcon = styled(AiOutlineSearch)`
  outline: none;
  height: 18px;
  width: 18px;
  color: ${props => props.dark === 'true' && '#909090'};
`
// no search videos details

export const NoSearchVideosContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchVideosImg = styled.img`
  height: 240px;
  width: 300px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 260px;
  }
`

export const NoSearchVideosHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`

export const NoSearchVideosDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 15px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const NoSearchVideosRetryBtn = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-family: roboto;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #ffffff;
  background-color: #4f46e5;

  @media screen and (max-width: 767px) {
    height: 35px;
    width: 80px;
    font-size: 14px;
  }
`

// banner Details

export const BannerContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: row;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BannerCloseIcon = styled(GrClose)`
  height: 20px;
  width: 20px;
`

export const BannerContent = styled.div`
  flex-grow: 1;
`

export const BannerLogo = styled.img`
  width: 120px;
`

export const BannerDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1e293b;
  width: 320px;
`

export const BannerButton = styled.button`
  border: 1px solid #1e293b;
  color: #1e293b;
  background-color: transparent;
  outline: none;
  padding: 0px 20px;
  height: 40px;
  text-transform: uppercase;
  font-family: roboto;
  font-size: 16px;
  font-weight: 400px;
`
