import { FC } from 'react';

import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Degrees } from '../Degrees';
import { Container } from './styles';

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
