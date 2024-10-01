import { Component } from '@angular/core';
import { Fruits } from './fruits';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {

    name = "";
    color ="";
    image = "";
    

    fruits: Fruits[] = [];

    
    addFruits() {

      const newFruits: Fruits = {

        fruitName: this.name,
        fruitColor: this.color,
        fruitImage: this.image
        
      };

      this.fruits.push(newFruits);

      this.name ="";
      this.color = "";
      this.image = "";

    }


}
