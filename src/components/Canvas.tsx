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
        debugger;
        editorRef.current.editor.moveCursorTo(3, 3)
    }, [canvasCursorPos])

    const onCanvasChange = (value: string, event: any) => {
        let anchor = event.end();
        let position = (anchor['row']*200) + anchor['column'] + anchor['row']
        setCanvas(event.target.value);
        setCanvasCursorPos(position)
    };

    const onCanvasClick = (event: any) => {
        let anchor = event.getAnchor();
        let position = (anchor['row']*200) + anchor['column'] + anchor['row'] 
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