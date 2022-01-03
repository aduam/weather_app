import { FC } from 'react';

import {
  DegreesContainer,
  NumberDegree,
  DegreeType,
  DegreeTypeContainer
} from './styles';

type kind = 'F' | 'C' | 'K';

interface DegreesProps {
  number: number;
  kind: kind;
  onSelect: (kind: kind) => void;
}

export const Degrees: FC<DegreesProps> = ({ number, kind, onSelect }: DegreesProps) => {
  const degreeTypes: kind[] = ['F', 'C', 'K'];

  const degreeTypesElements = () => degreeTypes.map((degree) => (
    <DegreeType onClick={() => onSelect(degree)} key={degree} active={degree === kind}>{degree}</DegreeType>
  ));

  return (
    <DegreesContainer>
      <NumberDegree>
        { number }
      </NumberDegree>
      <DegreeTypeContainer>
        {degreeTypesElements()}
      </DegreeTypeContainer>
    </DegreesContainer>
  );
};
