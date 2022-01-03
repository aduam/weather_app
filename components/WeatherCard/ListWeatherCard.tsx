import { WeatherCard } from '.';

export const ListWeatherCard = () => {
  const asdf = async (args: { id: number }): Promise<void> => {
    console.log(args);
  }
  return (
    <div>
      <WeatherCard
        id={3671002}
        name='1'
        onSelect={asdf}
        temp={300}
      />
      <WeatherCard
        id={3671002}
        name='2'
        onSelect={asdf}
        temp={275}
      />
      <WeatherCard
        id={3671002}
        name='3'
        onSelect={asdf}
        temp={280}
      />
      <WeatherCard
        id={3671002}
        name='4'
        onSelect={asdf}
        temp={295}
      />
    </div>
  );
};
