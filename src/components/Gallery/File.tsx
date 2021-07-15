import {StyledFileContainer} from '../SharedStyledComponents/StyledFileContainer'
import {StyledFileName} from '../SharedStyledComponents/StyledFileName'

type FileProps = {
    name: string
    onFileMouseOver: (x: string) => void
    onFileMouseOut: () => void
}

const File = ({name, onFileMouseOver, onFileMouseOut }: FileProps) => {

    const onMouseOver = () => onFileMouseOver(name)

    const onMouseOut = () => onFileMouseOut()

    return (
        <StyledFileContainer>
            <StyledFileName onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</StyledFileName>
        </StyledFileContainer>
    );
}

export default File;
