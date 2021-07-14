import styled from 'styled-components'
import Icon from '@material-ui/core/Icon';

type NavButtonProps = {
    selected: boolean;
}

const NavButton = styled(Icon)<NavButtonProps>`
    && {
        float: right;
        font-size: 20px;
        cursor: pointer;
        color: ${props => props.selected ? "black" : "lightgrey"}
    }
`

export default NavButton;