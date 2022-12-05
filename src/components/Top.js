import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Top (){
    return (
        <LogoContainer>
        <Imagelogo src={logo} alt={logo}/>
        <LogoStyle>ZapRecall</LogoStyle>
      </LogoContainer>
    )
}

const LogoContainer = styled.div
  ` 
display: flex;
align-items: center;
margin: 40px 0 20px 0;
`

const LogoStyle = styled.h1
  `
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
color: #FFFFFF;
margin-left: 20px;
`

const Imagelogo = styled.img
  `width: 52px;`
