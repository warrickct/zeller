import styled from "styled-components";
import SectionHeader from "./SectionHeader";

type SectionProps = {
    children: any;
    title?: string;
}

export const Section = (props: SectionProps) => {
    return (
        <StyledSection>
            { props.title ? 
                <SectionHeader title={props.title}  />
        : 
        null }
            { props.children }


        </StyledSection>
    )
}

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    margin-bottom: 2.5rem;

    border-bottom: 1px solid #e7e7e7;
`;

export default Section;