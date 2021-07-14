import React, {useState} from "react";
import NavBarContainer from "./NavBarContainer";
import Save from "./Save";
import Folder from "./Folder";
import NavButtons from "./NavButtons";
import NavButton from "./NavButton";
import NavContent from "./NavContent";
import Keyboard from "./Keyboard";

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
        <NavBarContainer>
            <NavButtons>
                <NavButton id={NAV_BAR_VIEWS.KEYBOARD} selected={navBarView === NAV_BAR_VIEWS.KEYBOARD} onMouseDown={onNavButtonClick}>keyboard</NavButton>
                <NavButton id={NAV_BAR_VIEWS.OPEN} selected={navBarView === NAV_BAR_VIEWS.OPEN} onClick={onNavButtonClick}>folder</NavButton>
                <NavButton id={NAV_BAR_VIEWS.SAVE} selected={navBarView === NAV_BAR_VIEWS.SAVE} onClick={onNavButtonClick}>save</NavButton>
                <NavButton id={NAV_BAR_VIEWS.GALLERY} selected={navBarView === NAV_BAR_VIEWS.GALLERY} onClick={onNavButtonClick}>photo_library</NavButton>
            </NavButtons>
            <NavContent>
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
            </NavContent>
        </NavBarContainer>
    );
}

export default NavBar;
