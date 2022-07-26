import emojiData from '../../resources/emojis.json'
import unrenderableEmojis from '../../resources/unrendered-emojis.json'
import { MouseEvent, memo } from 'react';
import {StyledKeyboardKey} from './StyledKeyboardKey'
import {StyledKeyboardContainer} from './StyledKeyboardContainer'

const EMOJI_DATA = emojiData;
const UNRENDERABLE_EMOJIS = unrenderableEmojis;

type KeyboardProps = {
    updateCanvas: (x: string) => void
}

const Keyboard = ({updateCanvas}: KeyboardProps) => {
    console.log("Keyboard render" )
    const onEmojiClick = (event: MouseEvent, id: string) => {
        let emoji = (event.target as HTMLTextAreaElement).innerText
        updateCanvas(emoji);
    };

    return (
        <StyledKeyboardContainer>
            {EMOJI_DATA
                .filter((x: any) => !UNRENDERABLE_EMOJIS.includes(x.annotation))
                .sort((x: any, y: any) => !('order' in x) ? 2 : x.order > y.order ? 1 : -1) 
                .map(e => <StyledKeyboardKey key={e['annotation']} onClick={(ev: any) => onEmojiClick(ev, e['annotation'])}>{e['unicode']}</StyledKeyboardKey>)}
        </StyledKeyboardContainer>
    );
}

const MemoKeyboard = memo(Keyboard)
export default Keyboard;
