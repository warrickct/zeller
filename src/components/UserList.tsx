import { useEffect } from 'react';
import styled from 'styled-components';
import UserListItem from './UserListItem';

export enum UserRoles {
    ADMIN = "Admin",
    BASIC = "Basic"
};

export const UserList = () => {
    const mockUsers = [
        {
            name: "John Stewart",
            role: UserRoles.ADMIN,
        },
        {
            name: "Ben Howard",
            role: UserRoles.ADMIN,
        }
    ]

    useEffect(() => {
        populateList(mockUsers);
    }, [mockUsers]); // means use it on initial app mount

    const populateList = (users: Array<any>) => {
        // TODO: type the users 

        // TODO: typing the user
        return users.map((user: any, index: number) => {
            return (
                <UserListItem key={index} name={user.name} role={user.role} />
            )
        })

    }

    return (
        <StyledUserList>
                { populateList(mockUsers) }
        </StyledUserList>
    )
}

const StyledUserList = styled.ul`
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`;

export default UserList;