import emojiData from '../../resources/emojis.json'
import unrenderableEmojis from '../../resources/unrendered-emojis.json'
import { MouseEvent } from 'react';
import {StyledKeyboardKey} from './StyledKeyboardKey'
import {StyledKeyboardContainer} from './StyledKeyboardContainer'

const EMOJI_DATA = emojiData;
const UNRENDERABLE_EMOJIS = unrenderableEmojis;

type KeyboardProps = {
    canvas: string
    canvasCursorPos: number
    setCanvas: (x: string) => void
    setCanvasCursorPos: (x: number) => void
}

const Keyboard = ({canvas, setCanvas, canvasCursorPos, setCanvasCursorPos}: KeyboardProps) => {

    const onEmojiClick = (event: MouseEvent, id: string) => {
        console.log(id)
        let emoji = (event.target as HTMLTextAreaElement).innerText
        let newText = canvas.slice(0, canvasCursorPos) + emoji + canvas.slice(canvasCursorPos, canvas.length);
        setCanvas(newText);
        setCanvasCursorPos(canvasCursorPos + emoji.length)
    };

    return (
        <StyledKeyboardContainer>
            {EMOJI_DATA
                .filter((x: any) => {
                    return !UNRENDERABLE_EMOJIS.includes(x.annotation)
                })
                .sort((x: any, y: any) => !('order' in x) ? 2 : x.order > y.order ? 1 : -1) 
                .map(e => <StyledKeyboardKey key={e['annotation']} onClick={(ev: any) => onEmojiClick(ev, e['annotation'])}>{e['unicode']}</StyledKeyboardKey>)}
        </StyledKeyboardContainer>
    );
}

export default Keyboard;
