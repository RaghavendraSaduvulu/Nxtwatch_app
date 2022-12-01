import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  GamingContainer,
  GamingContent,
  GamingNavContent,
  GamingMainContent,
  GamingLoadingContainer,
  GamingLoading,
  GamingFailureContainer,
  GamingFailureImg,
  GamingFailureHeading,
  GamingFailureDescription,
  GamingFailureRetryBtn,
  GamingVideosList,
  GamingVideoItem,
  GamingVideoItemImg,
  GamingVideoItemTitle,
  GamingVideoItemViewCount,
  GamingHeadingContainer,
  GamingHeading,
  GamingIconContainer,
  GamingIcon,
  GameLinkItem,
} from './StyledComponents'
import Header from '../Header'
import ContactUs from '../ContactUs'
import NavItemsList from '../NavItemsList'
import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    activeId: 'GAMING',
    gamingApiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingApi()
  }

  getGamingApi = async () => {
    this.setState({gamingApiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        viewCount: eachItem.view_count,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
      }))
      this.setState({
        gamingApiStatus: apiStatusConstants.success,
        gamingVideos: updatedData,
      })
    } else {
      this.setState({gamingApiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingLoadingView = () => (
    <GamingLoadingContainer>
      <GamingLoading data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </GamingLoading>
    </GamingLoadingContainer>
  )

  onClickGamingRetryBtn = () => {
    this.setState(
      {gamingApiStatus: apiStatusConstants.initial},
      this.getGamingApi,
    )
  }

  renderGamingApiFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GamingFailureContainer>
            <GamingFailureImg src={failureImage} alt="failure view" />
            <GamingFailureHeading dark={isDark.toString()}>
              Oops! Something Went Wrong
            </GamingFailureHeading>
            <GamingFailureDescription dark={isDark.toString()}>
              We are having some trouble to complete your request. Please try
              again.
            </GamingFailureDescription>
            <GamingFailureRetryBtn
              type="button"
              onClick={this.onClickGamingRetryBtn}
            >
              Retry
            </GamingFailureRetryBtn>
          </GamingFailureContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderGamingApiSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <GamingHeadingContainer dark={isDark.toString()}>
                <GamingIconContainer dark={isDark.toString()}>
                  <GamingIcon />
                </GamingIconContainer>
                <GamingHeading dark={isDark.toString()}>Gaming</GamingHeading>
              </GamingHeadingContainer>
              <GamingVideosList>
                {gamingVideos.map(eachItem => (
                  <GamingVideoItem key={eachItem.id}>
                    <GameLinkItem to={`/videos/${eachItem.id}`}>
                      <GamingVideoItemImg
                        src={eachItem.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingVideoItemTitle dark={isDark.toString()}>
                        {eachItem.title}
                      </GamingVideoItemTitle>
                      <GamingVideoItemViewCount dark={isDark.toString()}>
                        {eachItem.viewCount} Watching Worldwide
                      </GamingVideoItemViewCount>
                    </GameLinkItem>
                  </GamingVideoItem>
                ))}
              </GamingVideosList>
            </>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  renderGamingApi = () => {
    const {gamingApiStatus} = this.state

    switch (gamingApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderGamingLoadingView()
      case apiStatusConstants.success:
        return this.renderGamingApiSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingApiFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {activeId} = this.state

          return (
            <GamingContainer data-testid="gaming" dark={isDark.toString()}>
              <Header />
              <GamingContent>
                <GamingNavContent dark={isDark.toString()}>
                  <NavItemsList activeId={activeId} />
                  <ContactUs />
                </GamingNavContent>
                <GamingMainContent>{this.renderGamingApi()}</GamingMainContent>
              </GamingContent>
            </GamingContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Gaming
