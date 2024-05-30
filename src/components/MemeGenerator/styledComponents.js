// Style your components here
import styled from 'styled-components'

export const Meme = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Paragraph = styled.p`
  font-size: (${props => props.fontSize}) 'px';
  font-family: open Sans;
  color: #ffffff;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: open Sans;
  font-size: 40px;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  align-items: center;
  height: 100vh;
`
export const FirstContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 60vh;
`
export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const SelectElement = styled.select`
  border: 1px solid #d7dfe9;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const LabelElement = styled.label`
  color: #5a7184;
  font-size: 13px;
  margin-bottom: 3px;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 7px;
  width: 100px;
  font-family: open sans;
  border-radius: 5px;
  border: 0px;
`
