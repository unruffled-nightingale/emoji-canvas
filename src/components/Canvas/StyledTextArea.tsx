import styled from 'styled-components'

type StyledTextAreaProps = {
    cols: number | undefined
    rows: number | undefined
    value: string
    onChange: (x: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onClick: (x: React.MouseEvent<HTMLTextAreaElement>) => void
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
    font-family: "Courier New", sans-serif;
    font-size: 14px;
    line-height: 15px;
    border:none;
    cursor: text;
    &:focus {outline: none};
`;