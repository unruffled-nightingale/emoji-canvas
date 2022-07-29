import {useState} from "react";
import File from "./File";
import {getLocalStorage, saveToLocalStorage} from "../SharedUtils/LocalStorageUtils";

type FolderProps = {
    allFileNames: string[]
    openFile: (x: string) => void
    deleteFile: (x: string) => void
    previewFile: (x: string) => void
    hideNavBar: () => void
    setCanvasPreview: (x: string | undefined) => void
}
const Folder = ({openFile, deleteFile, previewFile, hideNavBar, allFileNames, setCanvasPreview}: FolderProps) => {

    const onFileOpen = (name: string) => {
        openFile(name)
        hideNavBar();
    }

    const onFileDelete = (name: string) => {
        deleteFile(name)
    }

    const onFileMouseOver = (name: string) => {
        previewFile(name);
    }

    const onFileMouseOut = () => setCanvasPreview(undefined)

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
