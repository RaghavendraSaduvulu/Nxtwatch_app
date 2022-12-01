import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`

export const NotFoundNavContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark === 'true' ? '#313131' : '#f9f9f9')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NotFoundMainContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const NotFoundImg = styled.img`
  height: 250px;
  width: 280px;

  @media screen and (max-width: 767px) {
    height: 200px;
    width: 230px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: roboto;
  font-weight: 500;
  font-size: 30px;
  line-height: 21px;
  text-align: center;
  color: ${props => (props.dark === 'true' ? '#f4f4f4' : '#1e293b')};
`

export const NotFoundDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  color: ${props => (props.dark === 'true' ? '#64748b' : '#475569')};
`
