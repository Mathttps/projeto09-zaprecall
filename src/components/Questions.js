import setaplay from "../assets/img/seta_play.png"
import styled from "styled-components"
import React from "react"
import setavirar from "../assets/img/seta_virar.png"
import { Icon }  from "./Icons";


export default function Questions({ QuestionNumber, question, answer, onClick, isClosed }) {
  const [textCard, setTextCard] = React.useState(QuestionNumber)
  const [DivCard, setDiv] = React.useState(QuestionClose)
  const [imageCard, setImageCard] = React.useState(setaplay)


  if (isClosed) {
    console.log(isClosed);
    return (<QuestionClose>
      <TextClose isClosed={isClosed}> {QuestionNumber} </TextClose>
      <Icon img={isClosed} />
    </QuestionClose>);
  }
  function ChosenQuestion() {
    if (textCard === QuestionNumber) {
      setTextCard(question)
      setDiv(QuestionOpen)
      setImageCard(setavirar)

    }
    if (textCard === question) {
      setTextCard(answer)
      setImageCard()
    }
  }

  let img = ""

  if (imageCard === setavirar) {
    img = "virar"
  }

  if (imageCard === setaplay) {
    img = "play"
  }
  return (
    <DivCard>
      <TextQuestionClose> {textCard} </TextQuestionClose>
      <Icon img={img} onClick={() => { onClick(); ChosenQuestion() }} />  
    </DivCard>

  )
}
const QuestionClose = styled.div
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
const QuestionOpen = styled.div
  `
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TextQuestionClose = styled.p
  `
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`
const Image = styled.img
  `
width: 20px;
`
const imageOpen = styled.img
  `
position: absolute;
bottom: 10px;
right: 10px;
`
const TextCorrect = styled.p
  `
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  text-decoration: line-through;
`
const TextClose = styled.p
  `
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color:${({ isClosed }) => finish(isClosed)};
  text-decoration: line-through;
`

// const ContainerBotoes = styled.div
//     `
// display: flex;
// width: 80%;
// justify-content: space-between;
// margin: 20px;
// `

function finish(isClosed) {
  if (isClosed === "Zap!") {
    return "#2FBE34"
  }
  else if (isClosed === "Quase não lembrei") {
    return "#FF922E"
  } else {
    return "#FF3030"
  }

}
