import { FC } from 'react';
import styled from 'styled-components';

import { Button } from './Button';
import { CloseButton } from './CloseButton';
import { Degrees } from './Degrees';

const Container = styled.div`
  padding: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  position: relative;
`;

export const WeatherCard: FC = () => {
  return (
    <Container>
      <CloseButton />
      <p>Guatemala, Guatemala</p>
      <Degrees number={25} kind='C' />
      <p>logo: Hot</p>
      <Button
        label='Update'
        onClick={() => console.log('okokok')}
        isLoading={ false }
        loadingLabel='Loading...'
      />
    </Container>
  );
};
