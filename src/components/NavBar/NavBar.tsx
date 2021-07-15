import React, {useState} from "react";
import Save from "../Save/Save";
import Folder from "../Folder/Folder";
import Keyboard from "../Keyboard/Keyboard";
import {StyledNavButtons} from "./StyledNavButtons";
import {StyledNavButton} from "./StyledNavButton";
import {StyledNavContent} from "./StyledNavContent";
import {StyledNavBarContainer} from "./StyledNavBarContainer";
import { Gallery } from "../Gallery/Gallery";

type NavBarProps = {
    canvas: string
    canvasName: string
    canvasCursorPos: number
    canvasPreview?: string
    setCanvas: (x: string) => void
    setCanvasName: (x: string) => void
    setCanvasCursorPos: (x: number) => void
    setPreviewCanvas: (x: string | undefined) => void
}

enum NAV_BAR_VIEWS {
    HIDDEN = "HIDDEN",
    SAVE = "SAVE",
    OPEN = "OPEN",
    KEYBOARD = "KEYBOARD",
    GALLERY = "GALLERY",
};

const NavBar = ({canvas, setCanvas, canvasName, setCanvasName, canvasCursorPos, setCanvasCursorPos, setPreviewCanvas}: NavBarProps) => {

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
                    <Save canvas={canvas}
                          canvasName={canvasName}
                          setCanvasName={setCanvasName}
                          hideNavBar={hideNavBar}/> : null}
                {navBarView === NAV_BAR_VIEWS.OPEN ?
                    <Folder setCanvas={setCanvas}
                            setCanvasName={setCanvasName}
                            setPreviewCanvas={setPreviewCanvas}
                            hideNavBar={hideNavBar}
                    /> : null}
                {navBarView === NAV_BAR_VIEWS.KEYBOARD ?
                    <Keyboard
                        canvas={canvas}
                        setCanvas={setCanvas}
                        canvasCursorPos={canvasCursorPos}
                        setCanvasCursorPos={setCanvasCursorPos} />: null}
                {navBarView === NAV_BAR_VIEWS.GALLERY ?
                    <Gallery setCanvasPreview={setPreviewCanvas} />: null}
            </StyledNavContent>
        </StyledNavBarContainer>
    );
}

export default NavBar;
