import { FC } from 'react';

import {
  DegreesContainer,
  NumberDegree,
  DegreeType,
  DegreeTypeContainer,
} from './styles';

interface DegreesProps {
  number: number;
  kind: 'F' | 'C' | 'K';
}

export const Degrees: FC<DegreesProps> = ({ number, kind }: DegreesProps) => {
  const degreeTypes = ['F', 'C', 'K'];

  const degreeTypesElements = () => degreeTypes.map((degree) => (
    <DegreeType key={degree} active={degree === kind}>{degree}</DegreeType>
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
