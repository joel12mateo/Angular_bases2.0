import { Character } from './../interface/character.interface';
import { Component} from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public character: Character [] =[{
    name:'Krillin',
    power: 1000
    },{
    name:'Goku',
    power: 9500
    },{
    name:'Vegeta',
    power: 9000
    }];

    onNewCharacter(character:Character):void{
      console.log("MainPage");
      console.log(character);
    }
}
