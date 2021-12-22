import { FC } from 'react';
import styled from 'styled-components';

const CloseButtonStyle = styled.button`
  color: gray;
  background-color: transparent;
  outline: none;
  position: absolute;
  right: 0px;
  top: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export const CloseButton: FC = () => {
  return (
    <CloseButtonStyle>X</CloseButtonStyle>
  );
};