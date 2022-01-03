import { FC, useEffect, useState } from 'react';

import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Degrees } from '../Degrees';
import { Container } from './styles';

interface WeatherCardProps {
  temp: number;
  name: string;
  onSelect: (args: { id: number }) => Promise<void>;
  id: number;
}

type kindOfDegrees = 'F' | 'C' | 'K';

const CELSIUS_BASE = 273.15;
const FAHRENHEIT = 459.67;

export const WeatherCard: FC<WeatherCardProps> = ({ temp, name, onSelect, id }: WeatherCardProps) => {
  const [kindDegrees, setKindDegrees] = useState<kindOfDegrees>('K');
  const [degrees, setDegrees] = useState<number>(temp);

  const convertKelvinToCelsius = (degrees: number): number => {
    return +(degrees - CELSIUS_BASE).toFixed(2);
  };

  const convertKelvinToFahrenheit = (degrees: number): number => {
    return +(degrees * (9 / 5) - FAHRENHEIT).toFixed(2);
  };

  const convertDegrees = (kind: kindOfDegrees): void => {
    setKindDegrees(kind);
  }

  let icon: string;

  const celsiusDegrees: number = convertKelvinToCelsius(temp);

  if (celsiusDegrees <= 19) {
    icon = 'cold';
  } else if (celsiusDegrees > 19 && celsiusDegrees <= 26) {
    icon = 'warm';
  } else {
    icon = 'hot';
  }

  useEffect(() => {
    const list: Record<string, number> = {
      K: temp,
      C: convertKelvinToCelsius(temp),
      F: convertKelvinToFahrenheit(temp)
    };
    setDegrees(list[kindDegrees]);
  }, [kindDegrees, temp]);

  return (
    <Container>
      <CloseButton />
      <p>{ name }</p>
      <Degrees number={degrees} kind={kindDegrees} onSelect={convertDegrees} />
      <p>logo: { icon }</p>
      <Button
        label='Update'
        onClick={() => onSelect({ id })}
        isLoading={ false }
        loadingLabel='Loading...'
      />
    </Container>
  );
};
