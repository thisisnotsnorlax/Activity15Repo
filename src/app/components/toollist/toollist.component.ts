import { Component } from '@angular/core';
import { Tools } from './tools';
import { Fruits } from '../fruitlist/fruits';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {

  name = "";
  price!: number;

  
  tools: Tools[] = [];

  addTools() { 

    const newTools: Tools = { 
      toolsName: this.name,
      toolsPrice: this.price
    };

    this.tools.push(newTools);

    this.name = "";
    this.price;
  } 

}
