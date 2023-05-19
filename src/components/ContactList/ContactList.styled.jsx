import styled from 'styled-components';

export const UserName = styled.p`
   font-size: 15px; 
` 

export const UserNumber = styled.p`
    font-size: 15px;
`

export const DeleteButton = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;
  border-radius: 8px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.muted};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};

    color: ${p => p.theme.colors.text};
    text-shadow: 1px 1px 1px #fff;

    box-shadow: -2px -2px 2px #fff, 2px 2px 2px #4b1414;

    svg {
      fill: ${p => p.theme.colors.text};
      stroke: ${p => p.theme.colors.text};
    }

    :active {
      color: ${p => p.theme.colors.text};
      text-shadow: 1px 1px 1px #fff;

      box-shadow: inset 1px 1px 1px #4b1414, inset -1px -1px 1px #fff;

      svg {
        fill: ${p => p.theme.colors.text};
        stroke: ${p => p.theme.colors.text};
      }
    }
  }
`;

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${p => p.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`