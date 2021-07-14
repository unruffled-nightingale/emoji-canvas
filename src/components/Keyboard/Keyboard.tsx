import emojiData from '../../resources/emojis.json'
import { MouseEvent } from 'react';
import {StyledKeyboardKey} from './StyledKeyboardKey'
import {StyledKeyboardContainer} from './StyledKeyboardContainer'

const EMOJI_DATA = emojiData;

type KeyboardProps = {
    canvas: string
    canvasCursorPos: number
    setCanvas: (x: string) => void
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
        <StyledKeyboardContainer>
            {EMOJI_DATA
                .sort((x: any, y: any) => !('order' in x) ? 2 : x.order > y.order ? 1 : -1) 
                .map(e => <StyledKeyboardKey key={e['annotation']} onClick={onEmojiClick}>{e['unicode']}</StyledKeyboardKey>)}
        </StyledKeyboardContainer>
    );
}

export default Keyboard;
