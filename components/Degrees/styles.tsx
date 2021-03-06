import styled from 'styled-components';

interface DegreeTypeArgs {
  active?: boolean;
}

export const NumberDegree = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 35px;
  font-weight: bold;
  margin: 0;
  position: relative;
  width: 125px;
  text-align: right;

  &:after {
    content: 'o';
    position: absolute;
    right: -10px;
    top: -5px;
    z-index: 2;
    font-size: 20px;
  }
`;

export const DegreesContainer = styled.div`
  display: flex;
`;

export const DegreeType = styled.div<DegreeTypeArgs>`
  color: gray;
  ${({ active, theme }) => active && `
    box-shadow: -1px 1px 3px rgba(0,0,0, 0.2);
    border-radius: 2px;
    color: ${theme.colors.primary};
    `};
  padding: 2px 5px;
  display: flex;
  justify-content: center;
`;

export const DegreeTypeContainer = styled.div`
  margin-left: 20px;
`;
