import {useState} from "react";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";

const BLANK_CANVAS: string = (" ".repeat(2000) + "\n").repeat(100);
const BLANK_CANVAS_NAME: string = "";

function App() {

    let [canvas, setCanvas] = useState<string>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasCursorPos, setCanvasCursorPos] = useState<number>(0);
    let [canvasPreview, setCanvasPreview] = useState<string | undefined>(undefined);

    return (
        <>
            <Canvas
                canvas={canvas}
                canvasPreview={canvasPreview}
                setCanvas={setCanvas}
                setCanvasCursorPos={setCanvasCursorPos}/>
            <NavBar canvas={canvas}
                    setCanvas={setCanvas}
                    canvasName={canvasName}
                    setCanvasName={setCanvasName}
                    canvasCursorPos={canvasCursorPos}
                    setCanvasCursorPos={setCanvasCursorPos}
                    setPreviewCanvas={setCanvasPreview}/>
        </>
    );
}

export default App;
