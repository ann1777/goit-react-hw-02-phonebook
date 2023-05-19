import styled from 'styled-components';

export const UserName = styled.p`
   font-size: 15px; 
` 

export const UserNumber = styled.p`
    font-size: 15px;
`

export const DeleteButton = styled.button`
  max-width: 100px;
  font-size: 15px;
  color: ${p => p.theme.colors.accent};
  background-color: #ffffff;
  border: none;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${p => p.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`