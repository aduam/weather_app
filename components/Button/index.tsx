import { FC, MouseEvent } from 'react';

import { ButtonStyle } from './styles';

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  loadingLabel: string;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, label, isLoading, loadingLabel }: ButtonProps) => {
  const text = isLoading ? loadingLabel : label;
  return (
    <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
  );
};
