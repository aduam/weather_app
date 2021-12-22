import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  loadingLabel: string;
  isLoading?: boolean;
}

const ButtonStyle = styled.button`
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

export const Button: FC<ButtonProps> = ({ onClick, label, isLoading, loadingLabel }: ButtonProps) => {
  const text = isLoading ? loadingLabel : label;
  return (
    <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
  );
};
