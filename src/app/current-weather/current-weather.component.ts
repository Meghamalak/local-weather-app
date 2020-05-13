import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit
{
  current: ICurrentWeather

  constructor(private weatherService: WeatherService)
  {

  }

  // constructor()
  // {
  //   this.current = {
  //     city: 'Redmond',
  //     country: 'US',
  //     description: 'Sunny',
  //     image: '',
  //     temperature: 78,
  //     date: new Date(),
  //   }
  // }

  ngOnInit(): void
  {
    this.weatherService.getCurrentWeather('Texas', 'US').subscribe((data) => (this.current = data));
  }

}
