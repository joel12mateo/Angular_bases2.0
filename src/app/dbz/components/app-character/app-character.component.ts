import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './app-character.component.html',
  styleUrls: ['./app-character.component.css']
})
export class AppCharacterComponent {

  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  @Output()
  public character: Character = {
    name: '',
    power:0
  };

  emitCharacter(): void {
    console.log(this.character);

   if(this.character.name.length === 0) return;

   this.onNewCharacter.emit(this.character);

   this.character.name = '';
   this.character.power = 0;

  }
}
