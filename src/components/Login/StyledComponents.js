import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark === 'true' ? '#231f20' : '#f9f9f9')};
`

export const LoginFormContent = styled.form`
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 6px
    ${props => (props.dark === 'true' ? '#231f20' : '#f1f1f1')};

  @media screen and (max-width: 767px) {
    width: 90%;
    max-width: 400px;
  }
`

export const LoginImg = styled.img`
  align-self: center;
  width: 180px;
  margin: 10px 0px;

  @media (min-width: 767px) and (max-width: 1100px) {
    width: 150px;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
  }
`

export const Label = styled.label`
  margin-top: 20px;
  text-transform: uppercase;
  font-family: roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${props => (props.dark === 'true' ? '#f9f9f9' : '#475569')};
`

export const InputElement = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #94a3b8;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${props =>
    props.dark === 'true' ? 'transparent' : '#f9f9f9'};
  color: ${props => (props.dark === 'true' ? '#f9f9f9' : '#475569')};

  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const ShowPasswordContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
`

export const ShowPasswordInput = styled.input`
  align-self: center;
`

export const ShowPasswordLabel = styled.label`
  font-family: roboto;
  font-size: 14px;
  font-weight: 400;
  align-self: center;
  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
`

export const ErrorMessage = styled.p`
  height: 22px;
  margin: 0px;
  font-family: roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ff0b37;
`

export const LoginButton = styled.button`
  font-family: roboto;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 35px;
  margin: 10px 0px;
  cursor: pointer;
`
