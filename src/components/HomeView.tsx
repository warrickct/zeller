import styled from 'styled-components';
import Section from './Section';
import UserList from './UserList';
import UserRoleListItem from './UserRoleListItem';

export const HomeView = () => {


    return (
        <StyledHomeView>
            <Section title="User Types">
                <UserRoleListItem />
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