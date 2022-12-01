import styled from 'styled-components'

import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};
`

export const NavbarLogo = styled.img`
  margin: 0px 32px;
  width: 180px;

  @media (min-width: 768px) and (max-width: 1100px) {
    width: 150px;
  }

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 32px;
`

export const ThemeButton = styled.button`
  border: none;
  background: none;
  outline: none;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DarkThemeIcon = styled(FiSun)`
  width: 28px;
  height: 28px;
  color: #ffffff;

  @media screen and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`

export const LightThemeIcon = styled(FaMoon)`
  width: 28px;
  height: 28px;

  @media screen and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`

export const ProfileImg = styled.img`
  align-self: center;
  margin: 0px 10px;
  height: 32px;
  width: 32px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BarsIcon = styled(FaBars)`
  align-self: center;
  height: 35px;
  width: 35px;
  margin: 0px 10px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`

export const PopupContainer = styled.div`
  align-self: center;
`

export const PopupContent = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupDetails = styled.div`
  margin: 10px;
  padding: 30px;
  height: 150px;
  width: 300px;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`

export const PopupText = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#00306e')};
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const PopupButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const PopupCancelBtn = styled.button`
  height: 40px;
  width: 90px;
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: 1px solid ${props => (props.dark === 'true' ? '#94a3b8' : '#64748b')};
  color: ${props => (props.dark === 'true' ? '#94a3b8' : '#64748b')};
  border-radius: 3px;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const PopUpLogoutBtn = styled.button`
  height: 40px;
  width: 90px;
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 3px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogoutBtn = styled.button`
  align-self: center;
  border: 1px solid ${props => (props.dark === 'true' ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#3b82f6')};
  height: 30px;
  width: 90px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIcon = styled(FiLogOut)`
  align-self: center;
  height: 35px;
  width: 35px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`
