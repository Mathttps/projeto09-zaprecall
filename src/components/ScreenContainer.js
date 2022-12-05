import styled, { StyledComponent } from "styled-components"
import cards from "./Cards"
import React from "react"

export default function ScreenContainer() {
    const [questaoAtual, setQuestaoAtual] = React.useState(-1);
    const [questoesFechadas, setQuestoesFechadas] = React.useState(new Array(cards.length));


    return (
        <ScreenContainer>

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