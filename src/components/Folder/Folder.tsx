import {useState} from "react";
import File from "./File";
import {getLocalStorage, saveToLocalStorage} from "../SharedUtils/LocalStorageUtils";

type FolderProps = {
    setCanvas: (x: string) => void
    setCanvasName: (x: string) => void
    setPreviewCanvas: (x: string | undefined) => void
    hideNavBar: () => void
}
const Folder = ({setCanvas, setCanvasName, setPreviewCanvas, hideNavBar}: FolderProps) => {

    const [allFileNames, setAllCanvasNames] = useState(Object.keys(getLocalStorage()))

    const onFileOpen = (name: string) => {
        let data = getLocalStorage();
        setCanvas(data[name]);
        setCanvasName(name);
        setPreviewCanvas(undefined)
        hideNavBar();
    }

    const onFileDelete = (name: string) => {
        let data = getLocalStorage();
        delete data[name];
        saveToLocalStorage(data);
        setAllCanvasNames(Object.keys(data))
    }

    const onFileMouseOver = (name: string) => {
        let data = getLocalStorage();
        setPreviewCanvas(data[name])
    }

    const onFileMouseOut = () => setPreviewCanvas(undefined)

    return (
        <>
            {allFileNames.map(f => <File name={f}
                                         onFileClick={onFileOpen}
                                         onFileMouseOver={onFileMouseOver}
                                         onFileMouseOut={onFileMouseOut}
                                         onDeleteFileClick={onFileDelete}/>)}
        </>
    );
}

export default Folder;
