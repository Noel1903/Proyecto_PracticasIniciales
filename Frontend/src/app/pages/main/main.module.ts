import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule

  ]
})
export class MainModule { }


