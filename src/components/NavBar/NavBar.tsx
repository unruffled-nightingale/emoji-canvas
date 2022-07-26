import React, {useState, memo} from "react";
import Save from "../Save/Save";
import Folder from "../Folder/Folder";
import MemoKeyboard from "../Keyboard/Keyboard";
import {StyledNavButtons} from "./StyledNavButtons";
import {StyledNavButton} from "./StyledNavButton";
import {StyledNavContent} from "./StyledNavContent";
import {StyledNavBarContainer} from "./StyledNavBarContainer";
import { Gallery } from "../Gallery/Gallery";

type NavBarProps = {
    canvasName: string
    allFileNames: string[]
    setCanvasName: (x: string) => void
    updateCanvas: (x: string) => void
    saveCanvas: () => void
    setCanvasPreview: (x: string | undefined) => void
    openFile: (x: string) => void
    deleteFile: (x: string) => void
    previewFile: (x: string) => void
}

enum NAV_BAR_VIEWS {
    HIDDEN = "HIDDEN",
    SAVE = "SAVE",
    OPEN = "OPEN",
    KEYBOARD = "KEYBOARD",
    GALLERY = "GALLERY",
};

const NavBar = ({allFileNames, canvasName, setCanvasName, updateCanvas, saveCanvas, setCanvasPreview, openFile, deleteFile, previewFile}: NavBarProps) => {
    
    let [navBarView, setNavBarView] = useState<NAV_BAR_VIEWS>(NAV_BAR_VIEWS.KEYBOARD);

    const hideNavBar = () => setNavBarView(NAV_BAR_VIEWS.HIDDEN);

    const onNavButtonClick = (event: React.MouseEvent) => {
        let target = event.target as HTMLTextAreaElement;
        let id = target.id;
        id === navBarView ? hideNavBar() : setNavBarView(NAV_BAR_VIEWS[id  as keyof typeof NAV_BAR_VIEWS]);
    }

    return (
        <StyledNavBarContainer>
            <StyledNavButtons>
                <StyledNavButton id={NAV_BAR_VIEWS.KEYBOARD} selected={navBarView === NAV_BAR_VIEWS.KEYBOARD} onMouseDown={onNavButtonClick}>keyboard</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.OPEN} selected={navBarView === NAV_BAR_VIEWS.OPEN} onClick={onNavButtonClick}>folder</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.SAVE} selected={navBarView === NAV_BAR_VIEWS.SAVE} onClick={onNavButtonClick}>save</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.GALLERY} selected={navBarView === NAV_BAR_VIEWS.GALLERY} onClick={onNavButtonClick}>photo_library</StyledNavButton>
            </StyledNavButtons>
            <StyledNavContent>
                {navBarView === NAV_BAR_VIEWS.SAVE ?
                    <Save setCanvasName={setCanvasName}
                          canvasName={canvasName}
                          saveCanvas={saveCanvas}
                          hideNavBar={hideNavBar}/> : null}
                {navBarView === NAV_BAR_VIEWS.OPEN ?
                    <Folder openFile={openFile}
                            deleteFile={deleteFile}
                            previewFile={previewFile}
                            hideNavBar={hideNavBar}
                            setCanvasPreview={setCanvasPreview}
                            allFileNames={allFileNames}
                    /> : null}
                {navBarView === NAV_BAR_VIEWS.KEYBOARD ?
                    <MemoKeyboard updateCanvas={updateCanvas} />: null}
                {navBarView === NAV_BAR_VIEWS.GALLERY ?
                    <Gallery setCanvasPreview={setCanvasPreview}/>: null}
            </StyledNavContent>
        </StyledNavBarContainer>
    );
}

export default memo(NavBar);
