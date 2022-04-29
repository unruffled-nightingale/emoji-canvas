import {useRef, useState} from "react";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";

const BLANK_CANVAS: string = (" ".repeat(2000) + "\n").repeat(100);
const BLANK_CANVAS_NAME: string = "";

function App() {

    console.log("App re-rendered")

    let canvasCursorPos = useRef<number>(0);
    let [canvas, setCanvas] = useState<string>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasPreview, setCanvasPreview] = useState<string | undefined>(undefined);

    const setCanvasCursorPos = (value: number) => {
        canvasCursorPos.current = value
    }

    const getCanvasCursorPos = () => {
        return canvasCursorPos.current
    }


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
                    getCanvasCursorPos={getCanvasCursorPos}
                    setCanvasCursorPos={setCanvasCursorPos}
                    setPreviewCanvas={setCanvasPreview}/>
        </>
    );
}

export default App;
