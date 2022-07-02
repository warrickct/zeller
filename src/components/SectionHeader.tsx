import styled from "styled-components";

type SectionHeaderProps = {
    title: string;
}
export const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <StyledSectionHeader>
            {props.title}
        </StyledSectionHeader>
    )
}

const StyledSectionHeader =  styled.h2`
    margin-bottom: 2rem;
`;

export default SectionHeader;