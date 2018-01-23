import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  private api = {
    url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901',
    key: 'b1d1a634025f6aad9fa10eaf9452b864',
  };

  constructor() { }

}
