import styled from 'styled-components';

export const UserName = styled.p`
   font-size: 15px; 
` 

export const UserNumber = styled.p`
    font-size: 15px;
`

export const DeleteButton = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: none;
  outline: none;
  border-radius: 8px;

  background-color: #97f1ff;
  color: #8ba793;
  box-shadow: 0.3125rem -0.3125rem 1.25rem #fff, 0.3125rem 0.3125rem 1.25rem #babecc;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    background-color: #97f1ff;

    color: #312eec;
    text-shadow: 1px 1px 1px #fff;

    box-shadow: -2px -2px 2px #fff, 2px 2px 2px #4b1414;

    svg {
      fill: #312eec;
      stroke: #312eec;
    }

    :active {
      color: #2a2a2a;
      text-shadow: 1px 1px 1px #fff;

      box-shadow: inset 1px 1px 1px #4b1414, inset -1px -1px 1px #fff;

      svg {
        fill: #2a2a2a;
        stroke: #2a2a2a;
      }
    }
  }
`;

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: #312eec;
  text-shadow: 0.0313rem 0.0313rem 0rem #baa2c5, -0.0313rem -0.0313rem 0rem #ffffff;
  font-size: 14px;
`