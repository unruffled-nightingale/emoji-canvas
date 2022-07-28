import React, {useState, memo} from "react";
import Save from "../Save/Save";
import Folder from "../Folder/Folder";
import {StyledNavButtons} from "./StyledNavButtons";
import {StyledNavButton} from "./StyledNavButton";
import {StyledNavContent} from "./StyledNavContent";
import {StyledNavBarContainer} from "./StyledNavBarContainer";
import { Gallery } from "../Gallery/Gallery";
import Picker from 'emoji-picker-react';

type NavBarProps = {
    canvasName: string
    allFileNames: string[]
    setCanvasName: (x: string) => void
    updateCanvas: (x: string) => void
    setCanvas: (x: string) => void
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

const NavBar = ({allFileNames, canvasName, setCanvasName, updateCanvas, saveCanvas,setCanvas, setCanvasPreview, openFile, deleteFile, previewFile}: NavBarProps) => {
    
    let [navBarView, setNavBarView] = useState<NAV_BAR_VIEWS>(NAV_BAR_VIEWS.KEYBOARD);

    const hideNavBar = () => setNavBarView(NAV_BAR_VIEWS.HIDDEN);

    const onNavButtonClick = (event: React.MouseEvent) => {
        let target = event.target as HTMLTextAreaElement;
        let id = target.id;
        id === navBarView ? hideNavBar() : setNavBarView(NAV_BAR_VIEWS[id  as keyof typeof NAV_BAR_VIEWS]);
    }

    const onEmojiClick = (event: any, emojiObject: any) => {
        console.log(emojiObject.emoji)
        updateCanvas(emojiObject.emoji);
    };

    return (
        <StyledNavBarContainer>
            <StyledNavButtons>
                <StyledNavButton id={NAV_BAR_VIEWS.KEYBOARD} selected={navBarView === NAV_BAR_VIEWS.KEYBOARD} onMouseDown={onNavButtonClick}>keyboard</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.OPEN} selected={navBarView === NAV_BAR_VIEWS.OPEN} onClick={onNavButtonClick}>folder</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.SAVE} selected={navBarView === NAV_BAR_VIEWS.SAVE} onClick={onNavButtonClick}>save</StyledNavButton>
                <StyledNavButton id={NAV_BAR_VIEWS.GALLERY} selected={navBarView === NAV_BAR_VIEWS.GALLERY} onClick={onNavButtonClick}>photo_library</StyledNavButton>
            </StyledNavButtons>
            <StyledNavContent>
                {navBarView === NAV_BAR_VIEWS.GALLERY ?
                    <Gallery setCanvas={setCanvas} setCanvasPreview={setCanvasPreview}/>: null}
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
                <Picker onEmojiClick={onEmojiClick} preload={true} pickerStyle={{width: '100%', height: '100%', border: 'none', fontSize: '14px', opacity: navBarView === NAV_BAR_VIEWS.KEYBOARD ? "100%": "0%" }}/>
            </StyledNavContent>
        </StyledNavBarContainer>
    );
}

export default memo(NavBar);
