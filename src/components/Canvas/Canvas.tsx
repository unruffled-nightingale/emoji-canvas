import React, { MouseEvent, KeyboardEvent } from 'react';
import { CANVAS_ROWS, CANVAS_COLUMNS } from '../App';
import { StyledTextArea } from './StyledTextArea';
type CanvasProps = {
    canvas: any
    setCanvasCursorPos: (x: number) => void
}

const Canvas = ({canvas, setCanvasCursorPos}: CanvasProps) => {

    const onCanvasChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const cursorPos = event.target.selectionEnd - (( event.nativeEvent as InputEvent).inputType === "insertLineBreak" ? 1 : 0)
        const canvasText = canvas.current.value
        canvas.current.value = cleanCanvas(canvasText)
        setCanvasCursorPos(cursorPos)
        event.target.selectionEnd = cursorPos
    };

    const onCanvasClick = (event: MouseEvent<HTMLTextAreaElement>) => {
        setCanvasCursorPos((event.target as HTMLTextAreaElement).selectionEnd);
    };

    const onCanvasKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        setCanvasCursorPos((event.target as HTMLTextAreaElement).selectionEnd);
    }

    const cleanCanvas = (canvasText: string) => {
        const cleanCanvas = canvasText.split("\n")
            .map(e => e.padEnd(CANVAS_COLUMNS))
            .map(e => e.slice(0, CANVAS_COLUMNS))
            .slice(0, CANVAS_ROWS)
            .join("\n")
        return cleanCanvas
    };

    return (
        <StyledTextArea 
         cols={CANVAS_COLUMNS} 
         rows={CANVAS_ROWS} 
         ref={canvas} 
         onClick={onCanvasClick} 
         onChange={onCanvasChange}
         onKeyDown={onCanvasKeyDown}/>
    );
}

export default Canvas;