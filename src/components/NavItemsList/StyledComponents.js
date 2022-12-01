import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
`

export const NavItemsListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  margin-top: 20px;
`

export const NavItem = styled.li`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  background-color: ${props => props.active === 'true' && '#f1f5f9'};
  background-color: ${props => props.dark === 'true' && ' #424242'};
`

export const HomeIcon = styled(AiFillHome)`
  align-self: center;
  height: 19px;
  width: 19px;
  color: ${props => (props.dark === 'true' ? '#ebebeb' : '#475569')};
  color: ${props => props.active === 'true' && '#ff0000'};
`

export const TrendingIcon = styled(HiFire)`
  align-self: center;
  height: 20px;
  width: 20px;
  color: ${props => (props.dark === 'true' ? '#ebebeb' : '#475569')};
  color: ${props => props.active === 'true' && '#ff0000'};
`

export const GamingIcon = styled(SiYoutubegaming)`
  align-self: center;
  height: 20px;
  width: 20px;
  color: ${props => (props.dark === 'true' ? '#ebebeb' : '#475569')};
  color: ${props => props.active === 'true' && '#ff0000'};
`

export const SavedIcon = styled(BiListPlus)`
  align-self: center;
  height: 20px;
  width: 20px;
  color: ${props => (props.dark === 'true' ? '#ebebeb' : '#475569')};
  color: ${props => props.active === 'true' && '#ff0000'};
`

export const NavItemText = styled.p`
  margin: 0px;
  align-self: center;
  line-height: 30px;
  font-family: roboto;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 5px;
  color: ${props => (props.dark === 'true' ? '#ebebeb' : '#475569')};
  font-weight: ${props => (props.active === 'true' ? '700' : '400')};
`
