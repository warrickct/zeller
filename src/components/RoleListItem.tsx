import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import styled from "styled-components";
import { selectRole } from "../store/homeSlice";

type RoleListItemProps = {
  text: string;
  inputName: string;
  isActive: boolean;
  onClickHandler: (newRole: string) => void;
};

export const RoleListItem = (props: RoleListItemProps) => {
  const { text, onClickHandler, inputName, isActive } = props;
  const id = `radio-${props.text}`;
  const [isChecked, setIsChecked ] = useState(false);
  const dispatch = useDispatch();

  return (
    <RoleItem onClick={() => {
        onClickHandler(text);
        dispatch(selectRole(text));
    }}>
      <RoleInput
        type="radio"
        id={id}
        value={text}
        name={inputName}
        checked={isActive || isChecked}
        onChange={() => {
           setIsChecked(isActive);
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

export default RoleListItem;
