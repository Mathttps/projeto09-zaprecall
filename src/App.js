import styled, { StyledComponent } from "styled-components"
import iconeCerto from "./assets/img/icone_certo.png"
import iconeErro from "./assets/img/icone_erro.png"
import iconequase from "./assets/img/icone_quase.png"
import logo from "./assets/img/logo.png"
import setaplay from "./assets/img/seta_play.png"
import setavirar from "./assets/img/seta_virar.png"
import Top from "./Top"
import Footer from "./Footer"


export default function App() {
  
  const numeroQuest = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <ScreenContainer>
     <Top />
      {numeroQuest.map((n) =>
        <PerguntaFechada key={n}><PerguntaFechadaP> Pergunta{n} </PerguntaFechadaP><img src={setaplay} /></PerguntaFechada>
      )}
     <Footer />

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

const PerguntaFechadaP = styled.p
`
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
`




