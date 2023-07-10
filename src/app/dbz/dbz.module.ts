import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AppCharacterComponent } from './components/app-character/app-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AppCharacterComponent,
  ],
  exports:[
MainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
