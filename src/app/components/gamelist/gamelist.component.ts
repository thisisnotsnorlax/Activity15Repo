import { Component } from '@angular/core';
import { Games } from './games';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {


  name = "";

  gameList: Games[] = [];


  addGames() { 
    
    const newGame: Games = {
      gameName: this.name
    }

    this.gameList.push(newGame)

    this.name = ""
  }


  removeGame(index: number) { 

    this.gameList.splice(index, 1);

  }

}
