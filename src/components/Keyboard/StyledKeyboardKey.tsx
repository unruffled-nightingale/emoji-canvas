import {MouseEvent}  from 'react'
import styled from 'styled-components'

type StyledKeyboardKeyProps = {
    onClick: (event: MouseEvent) => void
}

export const StyledKeyboardKey = styled.p<StyledKeyboardKeyProps>`
    display: inline-block;
    font-family: "Noto Sans";
    margin: 0;
    cursor: pointer;
`
