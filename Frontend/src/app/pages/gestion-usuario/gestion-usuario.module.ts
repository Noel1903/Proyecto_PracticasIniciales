import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUsuarioComponent } from '../gestion-usuario/gestion-usuario.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    GestionUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class GestionUsuarioModule { }
