import { useEffect, useState } from "react";
import { fetchZellerCustomers, ZellerCustomer } from "./ApolloClient/apolloClient";
import StyledFlexWrapper from "./Layout/FlexWrapper";
import UserRoleListItem from "./UserRoleListItem";

export const RoleList = () => {
  const [ customerData, setCustomerData ] = useState([])
  const [selectedRole, setSelectedRole] = useState("");

  const handleItemClick = (value: string) => { 
    console.log({value});
    setSelectedRole(value);
  };

  const populateRoles = (customerData: Array<ZellerCustomer>) => {
    
    // rough loading state placeholder
    if (!customerData || !customerData.length) {
      return (
        <div>
          loading roles...
        </div>
      )
    }

    const roles = customerData.map(c => c.role);
    const uniqueRoles = roles.filter((role: string, index: number) => roles.indexOf(role) === index);
    return uniqueRoles.map((role, index: number) => {
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

  useEffect( () => {
    const initRoleData = async () => {
      const customer: any = await fetchZellerCustomers();
      setCustomerData(customer.listZellerCustomers.items);
    }
    initRoleData();
  }, []);

  return (
    <StyledFlexWrapper width="100%" flexDirection="column">
      {populateRoles(customerData)}
    </StyledFlexWrapper>
  );
};



export default RoleList;
