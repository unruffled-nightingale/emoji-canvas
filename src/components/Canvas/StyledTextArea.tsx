import styled from 'styled-components'

type StyledTextAreaProps = {
    cols: number | undefined
    rows: number | undefined
    ref: any
    onChange: (x: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onClick: (x: React.MouseEvent<HTMLTextAreaElement>) => void
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 20px;
    line-height: 20px;
    border:none;
    cursor: text;
    &:focus {outline: none};
`;