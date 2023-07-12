import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AppCharacterComponent } from './components/app-character/app-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppCharacterComponent,
    ListComponent,
    MainPageComponent,
    ],
  exports:[
  MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
