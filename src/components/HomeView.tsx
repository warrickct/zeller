import styled from 'styled-components';
import RoleList from './RoleList';
import Section from './Section';
import UserList from './UserList';

export const HomeView = () => {
    return (
        <StyledHomeView>
            <Section title="User Types">
                <RoleList />
            </Section>
            <Section title="Admin Users">
                <UserList />
            </Section>
        </StyledHomeView>
    )
}

const StyledHomeView = styled.div`
    padding: 2rem;
`;

export default HomeView;