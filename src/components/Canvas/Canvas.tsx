import React, { MouseEvent } from 'react';
import { StyledTextArea } from './StyledTextArea';

type CanvasProps = {
    canvas: any
    setCanvasCursorPos: (x: number) => void
}

const Canvas = ({canvas, setCanvasCursorPos}: CanvasProps) => {

    const onCanvasChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCanvasCursorPos(event.target.selectionEnd)
    };

    const onCanvasClick = (event: MouseEvent<HTMLTextAreaElement>) => {
        setCanvasCursorPos((event.target as HTMLTextAreaElement).selectionEnd);
    };

    return (
        <StyledTextArea 
         cols={500} 
         rows={200} 
         ref={canvas} 
         onClick={onCanvasClick} 
         onChange={onCanvasChange}/>
    );
}

export default Canvas;