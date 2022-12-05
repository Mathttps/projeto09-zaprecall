import styled from "styled-components"

export default function Footer (props){

    const corBotao = ["#FF3030", "#FF922E", "#2FBE34"]
    return (
        <FooterContainer>
        <ContainerBotoes>
            <Botoes color={corBotao[0]} type="button" onClick={() => props.onClick("Não lembrei")}>Não lembrei</Botoes>
            <Botoes color={corBotao[1]} type="button" onClick={() => props.onClick("Quase não lembrei")}>Quase não lembrei</Botoes>
            <Botoes color={corBotao[2]} type="button" onClick={() => props.onClick("Zap!")}>Zap!</Botoes>
        </ContainerBotoes>
        <TextPerguntaFechadaP>{props.closedQuestions.filter((n)=>n!==undefined).length}/{props.closedQuestions.length} CONCLUÍDOS</TextPerguntaFechadaP>
    </FooterContainer>
    )
}
const FooterContainer = styled.div
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
const TextPerguntaFechadaP = styled.p
`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`
const ContainerBotoes = styled.div
    `
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const Botoes = styled.button
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
  background: ${(props)=>props.color};
  border-radius: 5px;
  border: 1px solid ${(props)=>props.color};
  padding:5px;
  `