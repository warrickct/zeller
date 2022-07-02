import styled from "styled-components";

type RoleListItemProps = {
  text: string;
  inputName: string;
  isActive: boolean;
  onClickHandler: (newRole: string) => void;
};

export const UserRoleListItem = (props: RoleListItemProps) => {
  const { text, onClickHandler, inputName, isActive } = props;
  const id = `radio-${props.text}`;

  return (
    <RoleItem onClick={() => {
        onClickHandler(text);
    }}>
      <RoleInput
        type="radio"
        id={id}
        value={text}
        name={inputName}
        checked={isActive}
        onClick={(e: any) => {
            console.log('running', e);
            e.preventDefault();
        }}
      />
      <RoleInputLabel>{text}</RoleInputLabel>
    </RoleItem>
  );
};

const RoleItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    height: 2rem;
    transition: background-color 0.3s ease; 
    
    :hover {
        background-color: #bfbfd6;
    }
`


const RoleInput = styled.input`
    padding: 10px;
`;

const RoleInputLabel = styled.label`
    margin-left: 10px;
    font-weight: 500;
`;

export default UserRoleListItem;
