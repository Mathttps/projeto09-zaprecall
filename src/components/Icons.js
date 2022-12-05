import styled from "styled-components"
import React from "react"

import iconeCerto from "../assets/img/icone_certo.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeQuase from "../assets/img/icone_quase.png"
import setaplay from "../assets/img/seta_play.png"
import setavirar from "../assets/img/seta_virar.png"

const Imagem = styled.img
`
width: 20px;
`

const ImagemAberta = styled.img
`
position: absolute;
bottom: 10px;
right: 10px;
`

function Icon(props) {

    let icon = ""

    if (props.img === "virar") {
        return <ImagemAberta src={setavirar} onClick={props.onClick} />
    }

    if (props.img === "play") {
        icon = setaplay
    }    

    if (props.img === "Zap!") {
        icon = iconeCerto
    }

    if (props.img === "Quase não lembrei") {
        icon = iconeQuase
    }

    if (props.img === "Não lembrei") {
        icon = iconeErro
    }

    return (
    <Imagem src={icon} onClick={props.onClick} />
    )
}

export { Icon };