import styled from "styled-components";
import StyledFlexWrapper from "./Layout/FlexWrapper";

// TODO: uniq name for the type for easier exporting
type Props = {
    name: string;
    role: string; // TODO: make this enum
}

export const UserListItem = (props: Props) => {

    const firstInitial = props.name.charAt(0).toUpperCase();

    return (
        <StyledUserListItem>
                <InitialContainer>
                    <div>
                    {firstInitial}
                    </div>
                </InitialContainer>

            <StyledFlexWrapper
                flexDirection="column" 
                alignItems="flex-start"
                justifyContent="center"
            >
                <Name>{props.name}</Name>
                <Role>{props.role}</Role>
            </StyledFlexWrapper>
        </StyledUserListItem>        
    )
}

const InitialContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   padding: 10px; 
   background: #c0cceb;
   color: #4b66b3;
   width: 2rem;
   height: 2rem;
   border-radius: 5px;
   margin-right: 15px;
   font-weight: 700;
`

const StyledUserListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;
    font-weight: 500;
`;

const Name = styled.div`
   color: black;
`

const Role = styled.div`
   color: #8c919c;
`



export default UserListItem;