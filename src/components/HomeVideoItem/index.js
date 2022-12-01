import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {
  VideoItem,
  VideoItemImg,
  VideoItemContent,
  VideoItemProfileImg,
  ItemDetails,
  ItemTitle,
  ItemChannelName,
  ItemViewWithPublishedAt,
  ItemViews,
  ItemPublishAt,
  HomeLink,
} from './StyledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

const HomeVideoItem = props => {
  const {videoItem} = props
  const {thumbnailUrl, id, channel, publishedAt, title, viewCount} = videoItem

  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItem>
            <HomeLink to={`/videos/${id}`}>
              <VideoItemImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemContent>
                <VideoItemProfileImg
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ItemDetails>
                  <ItemTitle dark={isDark.toString()}>{title}</ItemTitle>
                  <ItemChannelName dark={isDark.toString()}>
                    {channel.name}
                  </ItemChannelName>
                  <ItemViewWithPublishedAt>
                    <ItemViews dark={isDark.toString()}>
                      {viewCount} views &#x2022;
                    </ItemViews>
                    <ItemPublishAt dark={isDark.toString()}>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })}
                    </ItemPublishAt>
                  </ItemViewWithPublishedAt>
                </ItemDetails>
              </VideoItemContent>
            </HomeLink>
          </VideoItem>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default HomeVideoItem
