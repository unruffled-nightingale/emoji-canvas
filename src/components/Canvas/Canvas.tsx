import React, { MouseEvent } from 'react';
import { StyledTextArea } from './StyledTextArea';

type CanvasProps = {
    canvas: string
    canvasPreview?: string,
    setCanvas: (x: string) => void
    setCanvasCursorPos: (x: number) => void
}

const Canvas = ({canvas, setCanvas, setCanvasCursorPos, canvasPreview}: CanvasProps) => {

    const onCanvasChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCanvas(event.target.value);
        setCanvasCursorPos(event.target.selectionEnd)
    };

    const onCanvasClick = (event: MouseEvent<HTMLTextAreaElement>) => {
        setCanvasCursorPos((event.target as HTMLTextAreaElement).selectionEnd);
    };

    return (
        <StyledTextArea cols={500} rows={200}
                  value={canvasPreview ? canvasPreview : canvas}
                  onChange={onCanvasChange}
                  onClick={onCanvasClick}/>
    );
}

export default Canvas;