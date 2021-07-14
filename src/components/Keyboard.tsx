import emojiData from '../resources/emojis.json'
import styled from 'styled-components'
import { MouseEvent } from 'react';

const EMOJI_DATA = emojiData;

const KeyboardContainer = styled.div`
    height: 100%;
    z-index: 1;
    display: block;
`
type KeyboardKeyProps = {
    onClick: (event: MouseEvent) => void
}
const KeyboardKey = styled.p<KeyboardKeyProps>`
    display: inline-block;
    font-family: "Noto Sans";
    margin: 0;
    cursor: pointer;
`
type KeyboardProps = {
    canvas: string
    setCanvas: (x: string) => void
    canvasCursorPos: number
    setCanvasCursorPos: (x: number) => void
}

const Keyboard = ({canvas, setCanvas, canvasCursorPos, setCanvasCursorPos}: KeyboardProps) => {

    const onEmojiClick = (event: MouseEvent) => {
        debugger;
        let emoji = (event.target as HTMLTextAreaElement).innerText
        let newText = canvas.slice(0, canvasCursorPos) + emoji + canvas.slice(canvasCursorPos, canvas.length);
        setCanvas(newText);
        setCanvasCursorPos(canvasCursorPos + emoji.length)
    };

    return (
        <KeyboardContainer>
            {EMOJI_DATA
                .sort((x: any, y: any) => !('order' in x) ? 2 : x.order > y.order ? 1 : -1) 
                .map(e => <KeyboardKey key={e['annotation']} onClick={onEmojiClick}>{e['unicode']}</KeyboardKey>)}
        </KeyboardContainer>
    );
}

export default Keyboard;
