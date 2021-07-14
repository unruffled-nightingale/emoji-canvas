import IconSmall from '../SharedStyledComponents/IconSmall'
import {StyledFileContainer} from './StyledFileContainer'
import {StyledFileName} from './StyledFileName'

type FileProps = {
    name: string
    onFileClick: (x: string) => void
    onFileMouseOver: (x: string) => void
    onFileMouseOut: () => void
    onDeleteFileClick: (x: string) => void
}

const File = ({name, onFileClick, onFileMouseOver, onFileMouseOut, onDeleteFileClick }: FileProps) => {

    const onSelect = () => onFileClick(name)

    const onDelete = () => onDeleteFileClick(name)

    const onMouseOver = () => onFileMouseOver(name)

    const onMouseOut = () => onFileMouseOut()

    return (
        <StyledFileContainer>
            <StyledFileName onMouseDown={onSelect} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</StyledFileName>
            <IconSmall onMouseDown={onDelete}>close</IconSmall>
        </StyledFileContainer>
    );
}

export default File;
