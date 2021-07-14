import IconSmall from '../SharedStyledComponents/IconSmall'
import {FormEvent} from 'react';
import {getLocalStorage, saveToLocalStorage} from "../SharedUtils/LocalStorageUtils";
import {StyledFileNameInput} from "./StyledFileNameInput"
import {StyledSaveContainer} from "./StyledSaveContainer"
import {StyledWarningText} from "./StyledWarningText"

type SaveProps = {
    canvas: string
    canvasName: string
    setCanvasName: (x: string) => void
    hideNavBar: () => void
}

const Save = ({canvas, canvasName, setCanvasName,  hideNavBar}: SaveProps) => {

    const onInputChange = (event: FormEvent<HTMLInputElement>) => setCanvasName((event.target as HTMLInputElement).value)

    const onSave = () => {
        let data = getLocalStorage();
        data[canvasName] = canvas;
        saveToLocalStorage(data);
        hideNavBar()
    }

    return (
        <StyledSaveContainer>
            <StyledFileNameInput type="text" value={canvasName} onChange={onInputChange}/>
            <IconSmall onClick={onSave}>done</IconSmall>
            <IconSmall onClick={hideNavBar}>close</IconSmall>
            <StyledWarningText> 
                Please note that your art is only saved to your browers local storage.
                To ensure your art is not lost we recommend that you make a local copy. 
            </StyledWarningText>
        </StyledSaveContainer>
    )
}

export default Save;
