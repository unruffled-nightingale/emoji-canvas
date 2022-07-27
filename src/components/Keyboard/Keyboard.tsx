import emojiData from '../../resources/emojis.json'
import unrenderableEmojis from '../../resources/unrendered-emojis.json'
import { MouseEvent, memo } from 'react';
import {StyledKeyboardKey} from './StyledKeyboardKey'
import {StyledKeyboardContainer} from './StyledKeyboardContainer'

const EMOJI_DATA = emojiData;
const UNRENDERABLE_EMOJIS = unrenderableEmojis;

type KeyboardProps = {
    onEmojiClick: (x: string) => void
}

const Keyboard = ({onEmojiClick}: KeyboardProps) => {

    const _onEmojiClick = (event: MouseEvent, id: string) => {
        let emoji = (event.target as HTMLTextAreaElement).innerText
        onEmojiClick(emoji);
    };

    return (
        <StyledKeyboardContainer>
            {EMOJI_DATA
                .filter((x: any) => !UNRENDERABLE_EMOJIS.includes(x.annotation))
                .sort((x: any, y: any) => !('order' in x) ? 2 : x.order > y.order ? 1 : -1) 
                .map(e => <StyledKeyboardKey role="img" key={e['annotation']} onClick={(ev: any) => _onEmojiClick(ev, e['annotation'])}>{e['unicode']}</StyledKeyboardKey>)}
        </StyledKeyboardContainer>
    );
}

const MemoKeyboard = memo(Keyboard)
export default Keyboard;
