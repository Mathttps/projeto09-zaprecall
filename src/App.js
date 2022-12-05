import styled, { StyledComponent } from "styled-components"
import iconeCerto from "./assets/img/icone_certo.png"
import iconeErro from "./assets/img/icone_erro.png"
import iconequase from "./assets/img/icone_quase.png"
import logo from "./assets/img/logo.png"
import setaplay from "./assets/img/seta_play.png"
import setavirar from "./assets/img/seta_virar.png"


export default function App() {
  const corBotao = ["#FF3030", "#FF922E", "#2FBE34"]
  const numeroQuest = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <ScreenContainer>
      <LogoContainer>
        <Imagelogo src={logo} />
        <LogoStyle>ZapRecall</LogoStyle>
      </LogoContainer>
      {numeroQuest.map((n) =>
        <PerguntaFechada key={n}><TextPerguntaFechada> Pergunta{n} </TextPerguntaFechada><img src={setaplay} /></PerguntaFechada>
      )}
      <FooterConcluido>
        <ContainerButtons>
          <ContainerBotoes color={corBotao[0]} type="button">Não lembrei</ContainerBotoes>
          <ContainerBotoes color={corBotao[1]} type="button">Quase não lembrei</ContainerBotoes>
          <ContainerBotoes color={corBotao[2]} type="button">Zap!</ContainerBotoes>
        </ContainerButtons>
      </FooterConcluido>

    </ScreenContainer>
  )
}

const ScreenContainer = styled.div
  `
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`

const LogoContainer = styled.div
  ` 
display: flex;
align-items: center;
margin: 40px 0 20px 0;
`

const Imagelogo = styled.img
  `width: 52px;`


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


const PerguntaFechada = styled.div
  `
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`
const TextPerguntaFechada = styled.p
  `
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`
const ContainerBotoes = styled.button
  `width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${(props) => props.color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding:5px;
  `

const FooterConcluido = styled.div
  `width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`

const ContainerButtons = styled.div
  `
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`
