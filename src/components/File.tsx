import styled from 'styled-components'
import IconSmall from './IconSmall'

const FileComponent = styled.div`
    padding-top: 5px;
`;

const FileName = styled.span`
    font-family: "Arial", sans-serif;
    font-size: 13px;
    color: grey;
    cursor: pointer;
    &:hover { color: black }
`;

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
        <FileComponent>
            <FileName onMouseDown={onSelect} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</FileName>
            <IconSmall onMouseDown={onDelete}>close</IconSmall>
        </FileComponent>
    );
}

export default File;
