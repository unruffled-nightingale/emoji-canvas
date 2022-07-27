import styled from 'styled-components'
import Icon from '@material-ui/core/Icon';

type StyledNavButtonProps = {
    selected: boolean;
}

export const StyledNavButton = styled(Icon)<StyledNavButtonProps>`
    && {
        float: right;
        font-size: 24px;
        padding-right: 12px;
        cursor: pointer;
        color: ${props => props.selected ? "black" : "lightgrey"}
    }
`