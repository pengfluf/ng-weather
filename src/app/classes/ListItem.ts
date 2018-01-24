import { MainInfo } from './MainInfo';

export class ListItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: MainInfo[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  snow: number;
  dt_txt: string;
}
