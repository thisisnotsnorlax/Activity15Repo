import { Component } from '@angular/core';
import { Cities } from './cities';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {


  name = "";

  city: Cities[] = []


  addCity() { 

    const newCity = {

      cityName: this.name

    }

    this.city.push(newCity);


  }


}
