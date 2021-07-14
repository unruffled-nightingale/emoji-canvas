import { FormEvent } from 'react';
import styled from 'styled-components'
import {getLocalStorage, saveToLocalStorage} from "./FilesUtils";
import IconSmall from './IconSmall'

const SaveContainer = styled.div`
    padding-top: 5px;
`;

const FileNameInput = styled.input`
    display: inline-block;
    border: none;
    border-bottom: 1px solid lightgrey;
    width: 80%;
    padding: 0;
    font-size: 13px;
    &:focus { outline: none }
`;

const WarningText = styled.p`
font-family: "Arial", sans-serif;
font-size: 10px;
color: grey;
`;

type SaveProps = {
    canvas: string
    canvasName: string
    setCanvasName: (x: string) => void
    hideNavBar: () => void
}
const Save = ({canvas, canvasName, setCanvasName,  hideNavBar}: SaveProps) => {

    const onInputChange = (event: FormEvent<HTMLInputElement>) => setCanvasName((event.target as HTMLInputElement).value)

    const onSave = () => {
        debugger;
        let data = getLocalStorage();
        data[canvasName] = canvas;
        saveToLocalStorage(data);
        hideNavBar()
    }

    return (
        <SaveContainer>
            <FileNameInput type="text" value={canvasName} onChange={onInputChange}/>
            <IconSmall onClick={onSave}>done</IconSmall>
            <IconSmall onClick={hideNavBar}>close</IconSmall>
            <WarningText> Please note that your art is only saved to your browers local storage.
             To ensure your art is not lost we recommend that you make a local copy. </WarningText>
        </SaveContainer>
    )
}

export default Save;
