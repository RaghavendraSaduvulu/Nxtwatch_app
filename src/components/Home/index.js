import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  HomeContainer,
  HomeContent,
  HomeNavContent,
  HomeMainContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  NoSearchVideosContainer,
  NoSearchVideosImg,
  NoSearchVideosHeading,
  NoSearchVideosDescription,
  NoSearchVideosRetryBtn,
  HomeVideosList,
  SearchLoaderContainer,
  SearchLoaderContent,
  SearchFailureContainer,
  SearchFailureImg,
  SearchFailureHeading,
  SearchFailureDescription,
  SearchFailureRetryBtn,
  BannerContainer,
  BannerCloseIcon,
  BannerContent,
  BannerLogo,
  BannerDescription,
  BannerButton,
  SearchWidthList,
} from './StyledComponents'
import Header from '../Header'
import NavItemsList from '../NavItemsList'
import HomeVideoItem from '../HomeVideoItem'
import ContactUs from '../ContactUs'
import NxtwatchContext from '../../context/NxtwatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    activeId: 'HOME',
    homeVideosApiStatus: apiStatusConstants.initial,
    homeVideos: [],
    searchInput: '',
    applySearchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeVideoApi()
  }

  getHomeVideoApi = async () => {
    this.setState({homeVideosApiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
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
        homeVideosApiStatus: apiStatusConstants.success,
        homeVideos: updatedData,
      })
    } else {
      this.setState({homeVideosApiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.setState(
      {homeVideosApiStatus: apiStatusConstants.initial},
      this.getHomeVideoApi,
    )
  }

  renderNoVideosView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <NoSearchVideosContainer>
            <NoSearchVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no search result"
            />
            <NoSearchVideosHeading dark={isDark.toString()}>
              No Search result found
            </NoSearchVideosHeading>
            <NoSearchVideosDescription dark={isDark.toString()}>
              Try different key words or remove search filter
            </NoSearchVideosDescription>
            <NoSearchVideosRetryBtn
              type="button"
              onClick={this.onClickRetryButton}
            >
              Retry
            </NoSearchVideosRetryBtn>
          </NoSearchVideosContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderHomeVideosApiSuccessView = () => {
    const {homeVideos} = this.state

    if (homeVideos.length !== 0) {
      return (
        <HomeVideosList>
          {homeVideos.map(eachItem => (
            <HomeVideoItem key={eachItem.id} videoItem={eachItem} />
          ))}
        </HomeVideosList>
      )
    }
    return this.renderNoVideosView()
  }

  renderLoaderView = () => (
    <SearchLoaderContainer>
      <SearchLoaderContent>
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </SearchLoaderContent>
    </SearchLoaderContainer>
  )

  renderHomeVideosApiFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <SearchFailureContainer>
            <SearchFailureImg src={failureImg} alt="failure view" />
            <SearchFailureHeading dark={isDark.toString()}>
              Oops! Something Went Wrong
            </SearchFailureHeading>
            <SearchFailureDescription dark={isDark.toString()}>
              We are having some trouble to complete your request. Please try
              again.
            </SearchFailureDescription>
            <SearchFailureRetryBtn
              type="button"
              onClick={this.onClickRetryButton}
            >
              Retry
            </SearchFailureRetryBtn>
          </SearchFailureContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderSearchVideoApi = () => {
    const {homeVideosApiStatus} = this.state

    switch (homeVideosApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderHomeVideosApiFailureView()
      case apiStatusConstants.success:
        return this.renderHomeVideosApiSuccessView()
      default:
        return null
    }
  }

  onClickBannerClose = () => {
    this.setState({showBanner: false})
  }

  renderHomeBanner = () => (
    <BannerContainer>
      <BannerContent>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="home"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <BannerButton type="button">get it now</BannerButton>
      </BannerContent>
      <BannerCloseIcon onClick={this.onClickBannerClose} />
    </BannerContainer>
  )

  onChangeSearchInput = event => {
    this.setState({applySearchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {applySearchInput} = this.state
    this.setState({searchInput: applySearchInput}, this.getHomeVideoApi)
  }

  render() {
    const {activeId, applySearchInput, showBanner} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer dark={isDark.toString()}>
              <Header />
              <HomeContent>
                <HomeNavContent dark={isDark.toString()}>
                  <NavItemsList activeId={activeId} />
                  <ContactUs />
                </HomeNavContent>
                <HomeMainContent>
                  {showBanner && this.renderHomeBanner()}
                  <SearchWidthList>
                    <SearchContainer dark={isDark.toString()}>
                      <SearchInput
                        dark={isDark.toString()}
                        type="search"
                        placeholder="Search"
                        value={applySearchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        dark={isDark.toString()}
                        type="button"
                        onClick={this.onClickSearchIcon}
                      >
                        <SearchIcon dark={isDark.toString()} />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderSearchVideoApi()}
                  </SearchWidthList>
                </HomeMainContent>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Home
