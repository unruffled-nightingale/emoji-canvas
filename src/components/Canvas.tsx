import React, { MouseEvent } from 'react';
import styled from 'styled-components'


type CanvasProps = {
    canvas: string
    canvasPreview?: string,
    setCanvas: (x: string) => void
    setCanvasCursorPos: (x: number) => void
}

type TextAreaProps = {
    cols: number | undefined
    rows: number | undefined
    value: string
    onChange: (x: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onClick: (x: React.MouseEvent<HTMLTextAreaElement>) => void
}

const TextArea = styled.textarea<TextAreaProps>`
    font-family: "Courier New", sans-serif;
    font-size: 14px;
    line-height: 15px;
    border:none;
    cursor: text;
    &:focus {outline: none};
`;


const Canvas = ({canvas, setCanvas, setCanvasCursorPos, canvasPreview}: CanvasProps) => {

    const onCanvasChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCanvas(event.target.value);
        setCanvasCursorPos(event.target.selectionEnd)
    };

    const onCanvasClick = (event: MouseEvent<HTMLTextAreaElement>) => {
        console.log((event.target as HTMLTextAreaElement).selectionStart);
        setCanvasCursorPos((event.target as HTMLTextAreaElement).selectionEnd);
    };

    return (
        <TextArea cols={500} rows={200}
                  value={canvasPreview ? canvasPreview : canvas}
                  onChange={onCanvasChange}
                  onClick={onCanvasClick}/>
    );
}

export default Canvas;