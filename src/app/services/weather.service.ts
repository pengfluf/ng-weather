import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ListItem } from '../classes/ListItem';
import { City } from '../classes/City';

@Injectable()
export class WeatherService {
  private api = {
    url: 'http://api.openweathermap.org/data/2.5/forecast',
    key: 'b1d1a634025f6aad9fa10eaf9452b864',
  };

  constructor(
    private http: HttpClient,
  ) { }

  getWeather(id: number): Observable<any> {
    return this.http.get<any>(`${this.api.url}?id=${id}&APPID=${this.api.key}`);
  }

}
