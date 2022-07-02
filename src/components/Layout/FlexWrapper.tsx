
import styled from "styled-components";

export const StyledFlexWrapper = styled.div<{
    flexDirection: string;
    alignItems: string;
    justifyContent: string;
}>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`



export default StyledFlexWrapper;