import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchZellerCustomers, ZellerCustomer } from './ApolloClient/apolloClient';
import UserListItem from './UserListItem';

export enum UserRole {
    ADMIN = "Admin",
    BASIC = "Basic",
    MANAGER = "Manager"
};

export const UserList = () => {
    const mockUsers = [
        {
            name: "John Stewart",
            role: UserRole.ADMIN,
        },
        {
            name: "Ben Howard",
            role: UserRole.ADMIN,
        }
    ]

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const initUserData = async () => {
            const customerData: any = await fetchZellerCustomers();
            setUsers(customerData.listZellerCustomers.items);
        }

        initUserData();
    }, []); // means use it on initial app mount

    const populateList = (users: Array<ZellerCustomer>) => {
        return users.map((user: ZellerCustomer, index: number) => {
            return (
                <UserListItem key={index} name={user.name} role={user.role} />
            )
        })
    }

    return (
        <StyledUserList>
                { populateList(users) }
        </StyledUserList>
    )
}

const StyledUserList = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    width: 100%;
`;

export default UserList;