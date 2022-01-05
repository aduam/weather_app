import { WeatherCard } from '.';
import { ListContainer } from './styles';

export const ListWeatherCard = ({ list }: { list: any[] }) => {
  return (
    <ListContainer>
      {list.map((item) => (
        <WeatherCard
          key={item.id}
          id={Number(item.id.substring(2))}
          name={item.name}
          temp={item.main.temp}
        />
      ))}
    </ListContainer>
  );
};
