import styled, { StyledComponent } from "styled-components"
import Top from "./Top"
import Footer from "./Footer"
import Questions from "./Questions"
import cards from "./Cards"
import React from "react"

export default function Container() {
    const [questaoAtual, setQuestaoAtual] = React.useState(-1);
    const [questaoFechada, setClosedQuestions] = React.useState(new Array(cards.length));

    function closeQuestion(option) {
        if (questaoAtual === -1) {
            return;
        }
        const moQuestaofechada = [...questaoFechada];
        if(moQuestaofechada[questaoAtual] === "Zap!"){
            return
        }
        if(moQuestaofechada[questaoAtual] === "Quase não lembrei"){
            return
        }
        if(moQuestaofechada[questaoAtual] === "Não lembrei"){
            return
        }
        
        moQuestaofechada[questaoAtual] = option;
        setClosedQuestions([...moQuestaofechada]);
    }

    return (
        <ScreenContainer>
          <Top/>
            {cards.map((p,m)=>  
            <Questions 
            id={m} key={m} 
            QuestionNumber={`Pergunta ${m+1}`} 
            question={p.question} 
            answer={p.answer}
            onClick={() => setQuestaoAtual(m)}
            isClosed={questaoFechada[m]}
            />
            )}
                <Footer closedQuestions={questaoFechada} onClick={closeQuestion}/>
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
const image = styled.img
`
width: 20px;
`

