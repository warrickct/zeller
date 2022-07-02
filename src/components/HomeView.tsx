import styled from 'styled-components';
import Section from './Section';
import UserListItem from './UserListItem';
import UserRoleListItem from './UserRoleListItem';

export const HomeView = () => {


    return (
        <StyledHomeView>
            <Section title="User Types">
                <UserRoleListItem />
            </Section>
            <Section title="Admin Users">
                <UserListItem />
            </Section>
        </StyledHomeView>
    )
}

const StyledHomeView = styled.div`
    padding: 2rem;
`;

export default HomeView;