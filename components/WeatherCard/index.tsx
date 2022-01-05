import { FC, useEffect, useState, useContext } from 'react';
import { toast } from 'react-hot-toast';

import { Button } from '../Button';
import { CloseButton } from '../CloseButton';
import { Degrees } from '../Degrees';
import {
  Container,
  Img,
  WrapWeather
} from './styles';
import { getApi } from '../../utils';
import { Items } from '../../context';

interface WeatherCardProps {
  temp: number;
  name: string;
  id: number;
}

type kindOfDegrees = 'F' | 'C' | 'K';

const CELSIUS_BASE = 273.15;
const FAHRENHEIT = 459.67;

export const WeatherCard: FC<WeatherCardProps> = ({ temp, name, id }: WeatherCardProps) => {
  const [kindDegrees, setKindDegrees] = useState<kindOfDegrees>('K');
  const [degrees, setDegrees] = useState<number>(temp);
  const [loading, setLoading] = useState<boolean>(false);
  const { items, setItems } = useContext(Items);

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
  let src: string;

  const celsiusDegrees: number = convertKelvinToCelsius(temp);

  if (celsiusDegrees <= 19) {
    icon = 'Cold';
    src = '/cold.png';
  } else if (celsiusDegrees > 19 && celsiusDegrees <= 26) {
    src = '/warm.png';
    icon = 'Warm';
  } else {
    src = '/hot.png';
    icon = 'Hot';
  }

  const updateItem = async (id: number): Promise<void> => {
    setLoading(true);
    const data = await getApi({ cityId: id });
    if (data?.cod !== 200) {
      toast.error('There was an error');
    } else {
      toast.success(`${data.name} was updated`);
      setItems({ ...items, [`i-${id}`]: { main: { ...data.main }, name: data.name } });
    }
    setLoading(false);
  };

  const removeItem = (id: number) => {
    const copyItems = { ...items };
    delete copyItems[`i-${id}`];
    setItems({ ...copyItems });
    toast.success('Item was removed');
  };

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
      <CloseButton id={id} onClick={removeItem} />
      <p>{ name }</p>
      <Degrees number={degrees} kind={kindDegrees} onSelect={convertDegrees} />
      <WrapWeather>
        <p>{ icon }</p>
        <Img src={src} alt='weather logo' />
      </WrapWeather>
      <Button
        label={loading ? 'loading' : 'Update'}
        onClick={() => updateItem(id)}
        isLoading={ false }
        loadingLabel='Loading...'
      />
    </Container>
  );
};
