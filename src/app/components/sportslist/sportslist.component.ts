import { Component } from '@angular/core';
import { Sports } from './sports';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {


  sports: Sports = {
    'Football': 'Ball',
    'Swimming': 'Water',
    'Boxing': 'Combat',
    'Basketball': 'Ball',
    'Surfing': 'Water'
  };

  sportsHolder: string[] = [];

  categoryInput: string = '';

  findSports() {
    this.sportsHolder = Object.keys(this.sports).filter(sport => 
      this.sports[sport].toLowerCase() === this.categoryInput.toLowerCase()
    );
  }
}



