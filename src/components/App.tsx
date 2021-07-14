import {useState} from "react";
import NavBar from "./NavBar";
import Canvas from "./Canvas";

const BLANK_CANVAS: string = (" ".repeat(200) + "\n").repeat(100);
const BLANK_CANVAS_NAME: string = "";

function App() {

    let [canvas, setCanvas] = useState<string>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasCursorPos, setCanvasCursorPos] = useState<number>(0);
    let [previewCanvas, setPreviewCanvas] = useState<string | undefined>(undefined);

    return (
        <>
            <Canvas
                canvas={canvas}
                canvasPreview={previewCanvas}
                setCanvas={setCanvas}
                setCanvasCursorPos={setCanvasCursorPos}/>
            <NavBar canvas={canvas}
                    setCanvas={setCanvas}
                    canvasName={canvasName}
                    setCanvasName={setCanvasName}
                    canvasCursorPos={canvasCursorPos}
                    setCanvasCursorPos={setCanvasCursorPos}
                    setPreviewCanvas={setPreviewCanvas}/>
        </>
    );
}

export default App;
