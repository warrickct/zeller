import styled from "styled-components";

export const StyledFlexWrapper = styled.div<{
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  width: ${({ width }) =>
    width ? width : "auto"};
`;

export default StyledFlexWrapper;
