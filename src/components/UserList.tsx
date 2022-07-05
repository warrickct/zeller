import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchZellerCustomers, ZellerCustomer } from '../api/client';
import { RootState } from '../store';
import UserListItem from './UserListItem';

export enum UserRole {
    ADMIN = "Admin",
    BASIC = "Basic",
    MANAGER = "Manager"
};

export const UserList = () => {
    const selectedRole = useSelector((state: RootState) => state.home.roleSelected);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const initUserData = async () => {
            const customerData: any = await fetchZellerCustomers();
            setUsers(customerData.listZellerCustomers.items);
        }

        initUserData();
    }, [selectedRole]); // means use it on initial app mount

    const populateUserList = (users: Array<ZellerCustomer>) => {
        if (!users || !users.length) {
            return (
                <div>
                    loading users...
                </div>
            )
        }
        const filteredUsers = selectedRole ? users.filter((user: ZellerCustomer) => {
            return user.role && user.role.toLowerCase() === selectedRole?.toLowerCase()
        }) : users; 
        return filteredUsers.map((user: ZellerCustomer, index: number) => {
            return (
                <UserListItem key={index} name={user.name} role={user.role} />
            )
        })
    }

    return (
        <StyledUserList>
                { populateUserList(users) }
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