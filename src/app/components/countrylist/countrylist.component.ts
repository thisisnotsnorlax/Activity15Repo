import { Component } from '@angular/core';
import { Countries } from './countries';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {


  name = "";
  
  country: Countries[] = []


  addCountry() { 

    const newCountry = { 

      countryName: this.name

    }

    this.country.push(newCountry)

    this.name = "";


  }



}
