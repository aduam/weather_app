import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border-radius: 5px;
  color: white;
  font-size: 18px;
  box-shadow: 0px 3px 5px hsla(0, 0%, 0%, 0.2);
  width: 120px;
  height: 45px;
  outline: 0;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
`;
