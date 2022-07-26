import {useCallback, useEffect, useRef, useState} from "react";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";
import {getLocalStorage, saveToLocalStorage} from "./SharedUtils/LocalStorageUtils";

const BLANK_CANVAS: string = (" ".repeat(1000) + "\n").repeat(50);
const BLANK_CANVAS_NAME: string = "";

function App() {

    let canvasCursorPos = useRef<number>(0);
    let canvas = useRef<any>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasPreview, setCanvasPreview] = useState<string | undefined>(undefined);
    let [allFileNames, setAllCanvasNames] = useState(Object.keys(getLocalStorage()))

    useEffect(() => {
        canvas.current.value = BLANK_CANVAS
    }, [])

    const setCanvasCursorPos = (value: number) => {
        canvasCursorPos.current = value
    }

    const setCanvas = (canvasText: string) => {
        canvas.current.value = canvasText
    }

    const updateCanvas = (character: string) => {
        let cursorPos: number = canvasCursorPos.current
        let canvasText = canvas.current.value 
        let newText = canvasText.slice(0, cursorPos) + character + canvasText.slice(cursorPos, canvasText.length);
        setCanvas(newText);
        setCanvasCursorPos(cursorPos + character.length)
    };

    const saveCanvas = () => {
        let data = getLocalStorage();
        data[canvasName] = canvas.current.value;
        saveToLocalStorage(data);
        setAllCanvasNames(Object.keys(data))
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
        setCanvas(data[name])
    }

    return (
        <>
            <Canvas
                canvas={canvas}
                setCanvasCursorPos={setCanvasCursorPos}/>
            <NavBar 
                canvasName={canvasName}
                setCanvasName={setCanvasName}
                setCanvasPreview={setCanvasPreview}
                updateCanvas={updateCanvas}
                saveCanvas={saveCanvas}
                openFile={openFile}
                deleteFile={deleteFile}
                previewFile={previewFile}
                allFileNames={allFileNames}
            />
        </>
    );
}

export default App;
