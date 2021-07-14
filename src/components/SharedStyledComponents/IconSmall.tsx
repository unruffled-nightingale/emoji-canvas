import styled from 'styled-components'
import Icon from '@material-ui/core/Icon';

const IconSmall = styled(Icon)`
    && {
        font-size: 14px;
        color: grey;
        vertical-align: bottom;
        float: right;
        cursor: pointer;
        &:hover { color: black }
    }
`

export default IconSmall;