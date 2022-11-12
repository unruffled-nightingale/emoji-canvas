import {useEffect, useRef, useState} from "react";
import NavBar from "./NavBar/NavBar";
import Canvas from "./Canvas/Canvas";
import {getLocalStorage, saveToLocalStorage} from "./SharedUtils/LocalStorageUtils";

export const CANVAS_ROWS = 50
export const CANVAS_COLUMNS = 200 
const BLANK_CANVAS: string = (" ".repeat(CANVAS_COLUMNS) + "\n").repeat(CANVAS_ROWS);
const BLANK_CANVAS_NAME: string = "";

function App() {

    let canvasCursorPos = useRef<number>(0);
    let [canvas, setCanvas] = useState<string>(BLANK_CANVAS);
    let textAreaRef = useRef<any>(BLANK_CANVAS);
    let [canvasName, setCanvasName] = useState<string>(BLANK_CANVAS_NAME);
    let [canvasPreview, setCanvasPreview] = useState<string | undefined>(undefined);
    let [allFileNames, setAllCanvasNames] = useState(Object.keys(getLocalStorage()))

    useEffect(() => {
        textAreaRef.current.value = canvas
    }, [canvas])

    useEffect(() => {
        const textAreaText = canvasPreview ? canvasPreview : canvas
        textAreaRef.current.value = textAreaText
    }, [canvas, canvasPreview])

    const setCanvasCursorPos = (value: number) => {
        canvasCursorPos.current = value
    }

    const updateCanvas = (character: string) => {
        let cursorPos: number = canvasCursorPos.current
        let canvasText = textAreaRef.current.value 
        let newText = canvasText.slice(0, cursorPos) + character + canvasText.slice(cursorPos, canvasText.length);
        setCanvas(newText);
        setCanvasCursorPos(cursorPos + character.length)
    };

    const saveCanvas = () => {
        let data = getLocalStorage();
        data[canvasName] = textAreaRef.current.value;
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
                canvas={textAreaRef}
                setCanvasCursorPos={setCanvasCursorPos}/>
            <NavBar 
                canvasName={canvasName}
                setCanvasName={setCanvasName}
                setCanvasPreview={setCanvasPreview}
                updateCanvas={updateCanvas}
                setCanvas={setCanvas}
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
