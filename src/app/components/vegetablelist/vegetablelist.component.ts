import { Component } from '@angular/core';
import { Vegetables } from './vegetable';
@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css',
})
export class VegetablelistComponent {
  vegies = '';

  vegetables: Vegetables[] = [];

  addVegies() {
    let newVegies = {
      vegetableName: this.vegies,
    };

    this.vegetables.push(newVegies);
  }

  removeVegies(index: number) { 
    
      this.vegetables.splice(index, 1);
   }
}
