import { useEffect, useState } from "react";
// import styled from "styled-components";
import StyledFlexWrapper from "./Layout/FlexWrapper";
import { UserRole } from "./UserList";
import UserRoleListItem from "./UserRoleListItem";
import { useQuery, gql } from "@apollo/client";
import { ListZellerCustomers } from "../graphql/queries";

export const RoleList = () => {
  // TODO: move enum to some constants file at higher level
  // TODO: potentially make this an object instead since then I can iterate over it when populating this list?
  const mockData: Array<UserRole> = [UserRole.ADMIN, UserRole.MANAGER];

  const [selectedRole, setSelectedRole] = useState("");

  const handleItemClick = (value: string) => { 
    console.log({value});
    setSelectedRole(value);
  };

  const populateRoles = (roles: Array<UserRole>) => {
    return roles.map((role: UserRole, index: number) => {
      const isActive = selectedRole === role;
      return (
        <UserRoleListItem
          onClickHandler={handleItemClick}
          key={index}
          text={role}
          inputName="user-roles"
          isActive={isActive}
        />
      );
    });
  };

  useEffect(() => {
    // populateRoles(mockData)
  }, []);


  const listZellerCustomersGQL = gql`${ListZellerCustomers}`;
  const { data, loading, error } = useQuery(listZellerCustomersGQL);

  return (
    <StyledFlexWrapper width="100%" flexDirection="column">
      {populateRoles(mockData)}

      <div>
        <p>
          debugging below:
        </p>
        <p>
          {JSON.stringify(data)}
          {JSON.stringify(loading)}
          {JSON.stringify(error)}
        </p>
      </div>
    </StyledFlexWrapper>
  );
};

// const StyledRoleList = styled.div`
//   // TODO: might be replacable by using the flex thing
//   display: flex;
//   flex-direction: column;
// `;

export default RoleList;
