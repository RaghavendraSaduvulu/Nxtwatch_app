import {Component} from 'react'

import {
  NavItemsListContainer,
  NavItem,
  NavItemText,
  TrendingIcon,
  HomeIcon,
  GamingIcon,
  SavedIcon,
  LinkItem,
} from './StyledComponents'

import NxtwatchContext from '../../context/NxtwatchContext'

class NavItemsList extends Component {
  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark, categories} = value
          const {activeId} = this.props
          const renderPath = id => {
            switch (id) {
              case 'HOME':
                return '/'
              case 'TRENDING':
                return '/trending'
              case 'GAMING':
                return '/gaming'
              case 'VIDEOS':
                return '/saved-videos'
              default:
                return null
            }
          }

          const renderNavIcon = id => {
            switch (id) {
              case 'HOME':
                return (
                  <HomeIcon
                    dark={isDark.toString()}
                    active={(activeId === id).toString()}
                  />
                )
              case 'TRENDING':
                return (
                  <TrendingIcon
                    dark={isDark.toString()}
                    active={(activeId === id).toString()}
                  />
                )
              case 'GAMING':
                return (
                  <GamingIcon
                    dark={isDark.toString()}
                    active={(activeId === id).toString()}
                  />
                )
              case 'VIDEOS':
                return (
                  <SavedIcon
                    dark={isDark.toString()}
                    active={(activeId === id).toString()}
                  />
                )
              default:
                return null
            }
          }

          const activeWithDark = status => {
            if (status === true) {
              if (isDark === true) {
                return true
              }
              return false
            }
            return false
          }

          return (
            <NavItemsListContainer>
              {categories.map(eachItem => (
                <NavItem
                  key={eachItem.id}
                  dark={activeWithDark(eachItem.id === activeId).toString()}
                  active={(eachItem.id === activeId).toString()}
                >
                  <LinkItem to={renderPath(eachItem.id)}>
                    {renderNavIcon(eachItem.id)}
                    <NavItemText
                      dark={isDark.toString()}
                      active={(eachItem.id === activeId).toString()}
                    >
                      {eachItem.displayText}
                    </NavItemText>
                  </LinkItem>
                </NavItem>
              ))}
            </NavItemsListContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default NavItemsList
