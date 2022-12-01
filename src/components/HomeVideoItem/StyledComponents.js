import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  margin: 5px;
  width: 25%;
  flex-grow: 1;
  margin-bottom: 30px;

  @media (min-width: 567px) and (max-width: 1100px) {
    width: 40%;
  }

  @media screen and (max-width: 566px) {
    width: 100%;
  }
`

export const VideoItemImg = styled.img`
  width: 100%;
`
export const VideoItemContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemProfileImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
`
export const ItemDetails = styled.div`
  padding: 0px 10px 10px 10px;
`

export const ItemTitle = styled.h1`
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.dark === 'true' ? '#ccc' : '#1e293b')};

  @media (min-width: 567px) and (max-width: 767px) {
    font-size: 16px;
  }
`

export const ItemChannelName = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};

  @media (min-width: 567px) and (max-width: 767px) {
    font-size: 15px;
  }
`

export const ItemViewWithPublishedAt = styled.div`
  display: flex;
  flex-direction: row;
`

export const ItemViews = styled.p`
  margin: 0px;
  font-family: roboto;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  font-weight: 400;
  @media (min-width: 567px) and (max-width: 767px) {
    font-size: 14px;
  }
`

export const ItemPublishAt = styled.p`
  margin: 0px;
  padding-left: 5px;
  font-family: roboto;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
  font-weight: 400;
  @media (min-width: 567px) and (max-width: 767px) {
    font-size: 14px;
  }
`
