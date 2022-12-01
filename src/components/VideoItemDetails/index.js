import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsContent,
  VideoItemDetailsNavContent,
  VideoItemDetailsMainContent,
  VideoItemDetailsLoadingContainer,
  VideoItemDetailsLoading,
  VideoItemDetailsFailureContainer,
  VideoItemDetailsFailureImg,
  VideoItemDetailsFailureHeading,
  VideoItemDetailsFailureDescription,
  VideoItemDetailsFailureRetryBtn,
  VideoItemDetailsCard,
  VideoItemDetailsReactPlayerContainer,
  VideoItemDetailsVideoDetails,
  VideoItemDetailsViewWithPublishAt,
  VideoItemDetailsViewCount,
  VideoItemDetailsPublishAt,
  VideoItemDetailsLikeWithSave,
  VideoItemDetailsLike,
  VideoItemDetailsLikeIcon,
  VideoItemDetailsDisLike,
  VideoItemDetailsDislikeIcon,
  VideoItemDetailsSave,
  VideoItemDetailsSaveIcon,
  VideoItemDetailsLine,
  VideoItemDetailsProfileContainer,
  VideoItemDetailsProfileImg,
  VideoItemDetailsProfileNameWithSubscribes,
  VideoItemDetailsProfileName,
  VideoItemDetailsProfileSubscribesCount,
  VideoItemDetailsDescription,
  VideoItemDetailsTitle,
} from './StyledComponents'
import Header from '../Header'
import NavItemsList from '../NavItemsList'
import ContactUs from '../ContactUs'
import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetailsApiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    likeIsActive: false,
    unLikeIsActive: false,
    saveIsActive: false,
  }

  componentDidMount() {
    this.getVideoItemDetailsApi()
  }

  getVideoItemDetailsApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({videoItemDetailsApiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const video = data.video_details
      const updatedData = {
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
        description: video.description,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        videoUrl: video.video_url,
        viewCount: video.view_count,
      }

      this.setState({
        videoItemDetailsApiStatus: apiStatusConstants.success,
        videoItemDetails: updatedData,
      })
    } else {
      this.setState({videoItemDetailsApiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemDetailsLoadingView = () => (
    <VideoItemDetailsLoadingContainer>
      <VideoItemDetailsLoading>
        <Loader type="ThreeDots" color="#000" height="50" width="50" />
      </VideoItemDetailsLoading>
    </VideoItemDetailsLoadingContainer>
  )

  onClickRetryBtn = () => {
    this.setState(
      {videoItemDetailsApiStatus: apiStatusConstants.initial},
      this.getVideoItemDetailsApi,
    )
  }

  renderVideoItemDetailsApiFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <VideoItemDetailsFailureContainer>
            <VideoItemDetailsFailureImg scr={failureImg} alt="failure view" />
            <VideoItemDetailsFailureHeading dark={isDark.toString()}>
              Oops! Something Went Wrong
            </VideoItemDetailsFailureHeading>
            <VideoItemDetailsFailureDescription dark={isDark.toString()}>
              We are having some trouble to complete your request. Please try
              again.
            </VideoItemDetailsFailureDescription>
            <VideoItemDetailsFailureRetryBtn
              type="button"
              onClick={this.onClickRetryBtn()}
            >
              Retry
            </VideoItemDetailsFailureRetryBtn>
          </VideoItemDetailsFailureContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  onClickLike = () => {
    this.setState({likeIsActive: true, unLikeIsActive: false})
  }

  onClickUnLike = () => {
    this.setState({likeIsActive: false, unLikeIsActive: true})
  }

  onClickSave = (addToSavedVideo, deleteSavedVideo) => {
    const {videoItemDetails, saveIsActive} = this.state
    if (saveIsActive === false) {
      addToSavedVideo(videoItemDetails)
    } else {
      deleteSavedVideo(videoItemDetails)
    }
    this.setState(prevState => ({saveIsActive: !prevState.saveIsActive}))
  }

  renderVideoItemDetailsSuccessView = () => {
    const {
      videoItemDetails,
      likeIsActive,
      unLikeIsActive,
      saveIsActive,
    } = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoItemDetails

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark, addToSavedVideo, deleteSavedVideo} = value

          const onClickSaveIcon = () => {
            this.onClickSave(addToSavedVideo, deleteSavedVideo)
          }

          return (
            <VideoItemDetailsCard>
              <VideoItemDetailsReactPlayerContainer>
                <ReactPlayer url={videoUrl} height="100%" width="100%" />
              </VideoItemDetailsReactPlayerContainer>
              <VideoItemDetailsTitle dark={isDark.toString()}>
                {title}
              </VideoItemDetailsTitle>
              <VideoItemDetailsVideoDetails>
                <VideoItemDetailsViewWithPublishAt>
                  <VideoItemDetailsViewCount dark={isDark.toString()}>
                    {viewCount} views &#x2022; &nbsp;
                  </VideoItemDetailsViewCount>
                  <VideoItemDetailsPublishAt dark={isDark.toString()}>
                    {formatDistanceToNow(new Date(publishedAt), {
                      addSuffix: true,
                    })}
                  </VideoItemDetailsPublishAt>
                </VideoItemDetailsViewWithPublishAt>
                <VideoItemDetailsLikeWithSave>
                  <VideoItemDetailsLike
                    onClick={this.onClickLike}
                    active={likeIsActive.toString()}
                  >
                    <VideoItemDetailsLikeIcon />
                    Like
                  </VideoItemDetailsLike>
                  <VideoItemDetailsDisLike
                    onClick={this.onClickUnLike}
                    active={unLikeIsActive.toString()}
                  >
                    <VideoItemDetailsDislikeIcon />
                    DisLike
                  </VideoItemDetailsDisLike>
                  <VideoItemDetailsSave
                    onClick={onClickSaveIcon}
                    active={saveIsActive.toString()}
                  >
                    <VideoItemDetailsSaveIcon />
                    {saveIsActive ? 'Saved' : 'save'}
                  </VideoItemDetailsSave>
                </VideoItemDetailsLikeWithSave>
              </VideoItemDetailsVideoDetails>
              <VideoItemDetailsLine dark={isDark.toString()} />
              <VideoItemDetailsProfileContainer>
                <VideoItemDetailsProfileImg src={channel.profileImageUrl} />
                <VideoItemDetailsProfileNameWithSubscribes>
                  <VideoItemDetailsProfileName dark={isDark.toString()}>
                    {channel.name}
                  </VideoItemDetailsProfileName>
                  <VideoItemDetailsProfileSubscribesCount
                    dark={isDark.toString()}
                  >
                    {channel.subscriberCount} subscribers
                  </VideoItemDetailsProfileSubscribesCount>
                </VideoItemDetailsProfileNameWithSubscribes>
              </VideoItemDetailsProfileContainer>
              <VideoItemDetailsDescription dark={isDark.toString()}>
                {description}
              </VideoItemDetailsDescription>
            </VideoItemDetailsCard>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  renderVideoItemDetailsApi = () => {
    const {videoItemDetailsApiStatus} = this.state

    switch (videoItemDetailsApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderVideoItemDetailsLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsApiFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <VideoItemDetailsContainer dark={isDark.toString()}>
              <Header />
              <VideoItemDetailsContent>
                <VideoItemDetailsNavContent dark={isDark.toString()}>
                  <NavItemsList />
                  <ContactUs />
                </VideoItemDetailsNavContent>
                <VideoItemDetailsMainContent>
                  {this.renderVideoItemDetailsApi()}
                </VideoItemDetailsMainContent>
              </VideoItemDetailsContent>
            </VideoItemDetailsContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
