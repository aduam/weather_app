import { FC } from 'react';

import { CloseButtonStyle } from './styles';

interface CloseButtonProps {
  id: number,
  onClick: (id: number) => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ id, onClick }: CloseButtonProps) => {
  return (
    <CloseButtonStyle onClick={() => onClick(id)}>X</CloseButtonStyle>
  );
};
