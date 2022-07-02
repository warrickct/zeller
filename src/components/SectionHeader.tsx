import styled from "styled-components";

type SectionHeaderProps = {
    title: string;
}
export const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <h2>
            {props.title}
        </h2>
    )
}

const StyledSectionHeader =  styled.div`
    margin-bottom: 2rem;
`;

export default SectionHeader;