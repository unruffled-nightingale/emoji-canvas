import {StyledFileContainer} from '../SharedStyledComponents/StyledFileContainer'
import {StyledFileName} from '../SharedStyledComponents/StyledFileName'

type FileProps = {
    name: string
    onFileMouseDown: (x: string) => void
    onFileMouseOver: (x: string) => void
    onFileMouseOut: () => void
}

const File = ({name, onFileMouseDown, onFileMouseOver, onFileMouseOut }: FileProps) => {

    const onMouseOver = () => onFileMouseOver(name)

    const onMouseOut = () => onFileMouseOut()
    
    const onMouseDown = () => onFileMouseDown(name)


    return (
        <StyledFileContainer>
            <StyledFileName onMouseDown={onMouseDown} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</StyledFileName>
        </StyledFileContainer>
    );
}

export default File;
