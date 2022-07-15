import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private WeatherService: WeatherService)
    {
    }
    //variables
    cityName: string = 'Wellington';
    weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }
   
  private getWeatherData(cityName: string){
    this.WeatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response);
    }});
  }
}
