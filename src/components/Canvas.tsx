import React, { useEffect, useRef} from 'react';
import styled from 'styled-components'
import AceEditor from "react-ace";


type CanvasProps = {
    canvas: string
    canvasCursorPos: number
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


const Canvas = ({canvas, canvasCursorPos, setCanvas, setCanvasCursorPos, canvasPreview}: CanvasProps) => {

    const editorRef = useRef<any>(null);

    useEffect(() => {
        let rowAndColPosition = cursorPositionToRowAndColPosition(canvasCursorPos)
        console.log(rowAndColPosition)
        let row: number = rowAndColPosition['row']
        let col: number = rowAndColPosition['col']
        editorRef.current.editor.moveCursorTo(row, col)
    }, [canvasCursorPos])

    useEffect(() => {
        debugger;
        let rowAndColumnPosition = editorRef.current.editor.getCursorPosition()
        let row: number = rowAndColumnPosition['row']
        let col: number = rowAndColumnPosition['col'] + 2
        editorRef.current.editor.moveCursorTo(row, col)
    }, [canvas])

    const cursorPositionToRowAndColPosition = (cursorPosition: number): any => {
        let row = Math.floor(cursorPosition / 201)
        let col = cursorPosition % 201
        return {row: row, col: col}
    }

    const rowAndColPositionToCursorPosition = (row: number, col: number): number => {
        return row * 201 + col
    }

    const onCanvasChange = (value: string, event: any) => {
        let anchor = event.end();
        let position = (anchor['row']*201) + anchor['column']
        console.log(position)
        setCanvas(event.target.value);
        setCanvasCursorPos(position)
    };

    const onCanvasClick = (event: any) => {
        let anchor = event.getAnchor();
        console.log(anchor)
        let position = (anchor['row']*201) + anchor['column']
        setCanvasCursorPos(position);
    };

    return (
        <AceEditor
            ref={editorRef}
            theme="textmate"
            name="canvas"
            height="100vh"
            width="100vw"
            fontSize={14}
            onChange={onCanvasChange}
            onCursorChange={onCanvasClick}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={false}
            value={canvas}
            setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: false,
                tabSize: 10000,
            }}/>
    );
}

export default Canvas;