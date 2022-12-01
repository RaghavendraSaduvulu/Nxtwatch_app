import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {
  TrendingContainer,
  TrendingContent,
  TrendingNavContent,
  TrendingMainContent,
  TrendingLoader,
  TrendingLoadingContainer,
  TrendingFailureContainer,
  TrendingFailureImg,
  TrendingFailureHeading,
  TrendingFailureDescription,
  TrendingFailureRetryButton,
  TrendingHeadingContainer,
  TrendingIconContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingVideosList,
  TrendingVideoItem,
  TrendingLink,
  TrendingVideoItemImg,
  TrendingVideoItemContent,
  TrendingVideoItemTitle,
  TrendingDesktopVideoContent,
  TrendingVideoItemChannel,
  TrendingVideoViewsWithPublished,
  TrendingVideoItemViewCount,
  TrendingVideoItemPublishedAt,
  TrendingMobileVideoItemContent,
} from './StyledComponents'
import NavItemsList from '../NavItemsList'
import ContactUs from '../ContactUs'
import Header from '../Header'
import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    activeId: 'TRENDING',
    trendingVideos: [],
    trendingVideosApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingApi()
  }

  getTrendingApi = async () => {
    this.setState({trendingVideosApiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideosApiStatus: apiStatusConstants.success,
        trendingVideos: updatedData,
      })
    } else {
      this.setState({trendingVideosApiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideoItem = () => {
    const {trendingVideos} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendingVideosList>
              {trendingVideos.map(eachItem => (
                <TrendingVideoItem key={eachItem.id}>
                  <TrendingLink to={`/videos/${eachItem.id}`}>
                    <TrendingVideoItemImg
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <TrendingVideoItemContent>
                      <TrendingVideoItemTitle dark={isDark.toString()}>
                        {eachItem.title}
                      </TrendingVideoItemTitle>
                      <TrendingDesktopVideoContent>
                        <TrendingVideoItemChannel dark={isDark.toString()}>
                          {eachItem.channel.name}
                        </TrendingVideoItemChannel>
                        <TrendingVideoViewsWithPublished>
                          <TrendingVideoItemViewCount dark={isDark.toString()}>
                            {eachItem.viewCount} views &#x2022;
                          </TrendingVideoItemViewCount>
                          <TrendingVideoItemPublishedAt
                            dark={isDark.toString()}
                          >
                            {formatDistanceToNow(
                              new Date(eachItem.publishedAt),
                              {
                                addSuffix: true,
                              },
                            )}
                          </TrendingVideoItemPublishedAt>
                        </TrendingVideoViewsWithPublished>
                      </TrendingDesktopVideoContent>
                      <TrendingMobileVideoItemContent>
                        <TrendingVideoItemChannel dark={isDark.toString()}>
                          {eachItem.channel.name} &#x2022; &nbsp;
                        </TrendingVideoItemChannel>
                        <TrendingVideoItemViewCount dark={isDark.toString()}>
                          {eachItem.viewCount} views &#x2022;
                        </TrendingVideoItemViewCount>
                        <TrendingVideoItemPublishedAt dark={isDark.toString()}>
                          {formatDistanceToNow(new Date(eachItem.publishedAt), {
                            addSuffix: true,
                          })}
                        </TrendingVideoItemPublishedAt>
                      </TrendingMobileVideoItemContent>
                    </TrendingVideoItemContent>
                  </TrendingLink>
                </TrendingVideoItem>
              ))}
            </TrendingVideosList>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  renderTrendingApiSuccessView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <>
            <TrendingHeadingContainer dark={isDark.toString()}>
              <TrendingIconContainer dark={isDark.toString()}>
                <TrendingIcon />
              </TrendingIconContainer>
              <TrendingHeading dark={isDark.toString()}>
                Trending
              </TrendingHeading>
            </TrendingHeadingContainer>
            {this.renderTrendingVideoItem()}
          </>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  onClickTrendingRetryBtn = () => {
    this.setState(
      {trendingVideosApiStatus: apiStatusConstants.initial},
      this.getTrendingApi,
    )
  }

  renderTrendingApiFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <TrendingFailureContainer>
            <TrendingFailureImg src={failureImage} alt="failure view" />
            <TrendingFailureHeading dark={isDark.toString()}>
              Oops! Something Went Wrong
            </TrendingFailureHeading>
            <TrendingFailureDescription dark={isDark.toString()}>
              We aew having some trouble to complete your request. Please try
              again.
            </TrendingFailureDescription>
            <TrendingFailureRetryButton
              type="button"
              onClick={this.onClickTrendingRetryBtn}
            >
              Retry
            </TrendingFailureRetryButton>
          </TrendingFailureContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderTrendingLoadingView = () => (
    <TrendingLoadingContainer>
      <TrendingLoader data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </TrendingLoader>
    </TrendingLoadingContainer>
  )

  renderTrendingApi = () => {
    const {trendingVideosApiStatus} = this.state

    switch (trendingVideosApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderTrendingLoadingView()
      case apiStatusConstants.success:
        return this.renderTrendingApiSuccessView()
      case apiStatusConstants.failure:
        return this.renderTrendingApiFailureView()

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
            <TrendingContainer dark={isDark.toString()}>
              <Header />
              <TrendingContent>
                <TrendingNavContent dark={isDark.toString()}>
                  <NavItemsList activeId={activeId} />
                  <ContactUs />
                </TrendingNavContent>
                <TrendingMainContent>
                  {this.renderTrendingApi()}
                </TrendingMainContent>
              </TrendingContent>
            </TrendingContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Trending
