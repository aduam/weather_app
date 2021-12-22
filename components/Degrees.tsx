import { FC } from 'react';
import styled from 'styled-components';

const NumberDegree = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 75px;
  font-weight: bold;
  margin: 0;
  position: relative;

  &:after {
    content: 'o';
    position: absolute;
    right: -10px;
    top: -5px;
    z-index: 2;
    font-size: 25px;
  }
`;

const DegreesContainer = styled.div`
  display: flex;
`;

interface DegreeTypeArgs {
  active?: boolean;
}

const DegreeType = styled.div<DegreeTypeArgs>`
  color: gray;
  ${({ active }) => active && `
    box-shadow: -1px 1px 3px rgba(0,0,0, 0.2);
    border-radius: 2px;
    `};
  padding: 2px 5px;
  display: flex;
  justify-content: center;
`;

const DegreeTypeContainer = styled.div`
  margin-left: 20px;
`;

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
