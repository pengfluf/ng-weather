import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDayComponent } from './components/weather-day/weather-day.component';
import { WeatherHourComponent } from './components/weather-hour/weather-hour.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDayComponent,
    WeatherHourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
