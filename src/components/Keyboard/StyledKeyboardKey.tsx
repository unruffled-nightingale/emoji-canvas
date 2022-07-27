import {MouseEvent}  from 'react'
import styled from 'styled-components'

type StyledKeyboardKeyProps = {
    onClick: (event: MouseEvent) => void
}

export const StyledKeyboardKey = styled.span<StyledKeyboardKeyProps>`
    display: inline-block;
    font-family:  apple color emoji, segoe ui emoji, noto color emoji, android emoji, emojisymbols, emojione mozilla, twemoji mozilla, segoe ui symbol;
    margin: 1px;
    padding: 1px;
    cursor: pointer;
    font-size: 12px;
`
