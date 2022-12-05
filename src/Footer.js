import styled from "styled-components"

export default function Footer () {

    const corBotao = ["#FF3030", "#FF922E", "#2FBE34"]
    
    return (
        <FooterConcluido>
        <ContainerButtons>
          <ContainerBotoes color={corBotao[0]} type="button">Não lembrei</ContainerBotoes>
          <ContainerBotoes color={corBotao[1]} type="button">Quase não lembrei</ContainerBotoes>
          <ContainerBotoes color={corBotao[2]} type="button">Zap!</ContainerBotoes>
        </ContainerButtons>
        <TextPerguntaFechadaP>0/4 CONCLUÍDOS</TextPerguntaFechadaP>
      </FooterConcluido>
    )
}

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

  const TextPerguntaFechadaP = styled.p
  `
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`