import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import {
  SavedVideosContainer,
  SavedVideosContent,
  SavedVideosNavContent,
  SavedVideosMainContent,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedVideosListContainer,
  SavedVideosHeading,
  SavedVideosHeadingContainer,
  SavedVideosHeadingIconContainer,
  SavedVideosHeadingIcon,
  SavedVideosList,
  SavedVideosListItem,
  SavedVideosListItemDetails,
  SavedVideosListItemImg,
  SavedVideosListItemContent,
  SavedVideosListItemHeading,
  SavedVideosListItemChannelName,
  SavedVideosListItemViewWithPublish,
  SavedVideosListItemViewCount,
  SavedVideosListItemPublishedAt,
  SavedLink,
} from './StyledComponents'
import NavItemsList from '../NavItemsList'
import ContactUs from '../ContactUs'
import Header from '../Header'
import NxtwatchContext from '../../context/NxtwatchContext'

class SavedVideos extends Component {
  state = {activeId: 'VIDEOS'}

  renderNoSavedVideos = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading dark={isDark.toString()}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosDescription dark={isDark.toString()}>
              You can save your videos while watching them
            </NoSavedVideosDescription>
          </NoSavedVideosContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderSavedVideos = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {savedVideos, isDark} = value
        console.log(savedVideos)
        return (
          <SavedVideosListContainer>
            <SavedVideosHeadingContainer dark={isDark.toString()}>
              <SavedVideosHeadingIconContainer dark={isDark.toString()}>
                <SavedVideosHeadingIcon />
              </SavedVideosHeadingIconContainer>
              <SavedVideosHeading dark={isDark.toString()}>
                Saved Videos
              </SavedVideosHeading>
            </SavedVideosHeadingContainer>
            <SavedVideosList>
              {savedVideos.map(eachItem => (
                <SavedVideosListItem key={eachItem.id}>
                  <SavedLink to={`/videos/${eachItem.id}`}>
                    <SavedVideosListItemDetails>
                      <SavedVideosListItemImg
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <SavedVideosListItemContent>
                        <SavedVideosListItemHeading dark={isDark.toString()}>
                          {eachItem.title}
                        </SavedVideosListItemHeading>
                        <SavedVideosListItemChannelName
                          dark={isDark.toString()}
                        >
                          {eachItem.channel.name}
                        </SavedVideosListItemChannelName>
                        <SavedVideosListItemViewWithPublish>
                          <SavedVideosListItemViewCount
                            dark={isDark.toString()}
                          >
                            {eachItem.viewCount} views
                          </SavedVideosListItemViewCount>
                          <SavedVideosListItemPublishedAt
                            dark={isDark.toString()}
                          >
                            {formatDistanceToNow(
                              new Date(eachItem.publishedAt),
                              {
                                addSuffix: true,
                              },
                            )}
                          </SavedVideosListItemPublishedAt>
                        </SavedVideosListItemViewWithPublish>
                      </SavedVideosListItemContent>
                    </SavedVideosListItemDetails>
                  </SavedLink>
                </SavedVideosListItem>
              ))}
            </SavedVideosList>
          </SavedVideosListContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          const {activeId} = this.state

          return (
            <SavedVideosContainer
              data-testid="savedVideos"
              dark={isDark.toString()}
            >
              <Header />
              <SavedVideosContent>
                <SavedVideosNavContent dark={isDark.toString()}>
                  <NavItemsList activeId={activeId} />
                  <ContactUs />
                </SavedVideosNavContent>
                <SavedVideosMainContent>
                  {savedVideos.length === 0
                    ? this.renderNoSavedVideos()
                    : this.renderSavedVideos()}
                </SavedVideosMainContent>
              </SavedVideosContent>
            </SavedVideosContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default SavedVideos
