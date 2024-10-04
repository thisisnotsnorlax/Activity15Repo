import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {

  animalList: {  [key:string]: string  } = {
    'Eagle ': 'Bird',
    'Penguin ': 'Bird',
    'Parrot ': 'Bird',
    'Lion ': 'Mammals',
    'Elephant ': 'Mammals',
    'Dolphins ': 'Mammals',
    'Turtle ': 'Reptiles',
    'Iguana ': 'Reptiles',
    'Goldfish  ': 'Fish',
    'Shark  ': 'Fish',
    'Butterfly   ': 'Insects',
    'Beetle   ': 'Insects',

  };

  animals: string[] = [];

  search: string = '';

  searchAnimal() {
    this.animals = Object.keys(this.animalList).filter(animal => 
      this.animalList[animal].toLowerCase() === this.search.toLowerCase()
    );
  }
}
