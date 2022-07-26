import {useCallback, useRef, useState} from "react";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";
import {getLocalStorage, saveToLocalStorage} from "./SharedUtils/LocalStorageUtils";

const BLANK_CANVAS: string = (" ".repeat(1000) + "\n").repeat(50);
const BLANK_CANVAS_NAME: string = "";

function App() {

    console.log("App re-rendered")

    let canvasCursorPos = useRef<number>(0);
    let [canvas, setCanvas] = useState<string>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasPreview, setCanvasPreview] = useState<string | undefined>(undefined);
    let [allFileNames, setAllCanvasNames] = useState(Object.keys(getLocalStorage()))

    const setCanvasCursorPos = (value: number) => {
        canvasCursorPos.current = value
    }

    const updateCanvas = (character: string) => {
        let cursorPos: number = canvasCursorPos.current
        let newText = canvas.slice(0, cursorPos) + character + canvas.slice(cursorPos, canvas.length);
        setCanvas(newText);
        setCanvasCursorPos(cursorPos + character.length)
    };

    const saveCanvas = () => {
        let data = getLocalStorage();
        data[canvasName] = canvas;
        saveToLocalStorage(data);
    }

    const openFile = (name: string) => {
        let data = getLocalStorage();
        setCanvas(data[name]);
        setCanvasName(name);
        setCanvasPreview(undefined)
    }

    const deleteFile = (name: string) => {
        let data = getLocalStorage();
        delete data[name];
        saveToLocalStorage(data);
        setAllCanvasNames(Object.keys(data))
    }

    const previewFile = (name: string) => {
        let data = getLocalStorage();
        setCanvasPreview(data[name])
    }

    const memoizedSaveCanvas = useCallback(saveCanvas, [])
    const memoizedSetCanvasName = useCallback(setCanvasName, [])

    const memoizedOpenFile = useCallback(openFile, [])
    const memoizedDeleteFile = useCallback(deleteFile, [])
    const memoizedPreviewFile = useCallback(previewFile, [])

    const memoizedUpdateCanvas = useCallback(updateCanvas, [])

    return (
        <>
            <Canvas
                canvas={canvas}
                canvasPreview={canvasPreview}
                setCanvas={setCanvas}
                setCanvasCursorPos={setCanvasCursorPos}/>
            <NavBar 
                canvasName={canvasName}
                setCanvasName={memoizedSetCanvasName}
                setCanvasPreview={setCanvasPreview}
                updateCanvas={memoizedUpdateCanvas}
                saveCanvas={memoizedSaveCanvas}
                openFile={memoizedOpenFile}
                deleteFile={memoizedDeleteFile}
                previewFile={memoizedPreviewFile}
                allFileNames={allFileNames}
            />
        </>
    );
}

export default App;
