import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolasComponent } from './pages/consolas/consolas.component'
import { JuegosComponent } from './pages/juegos/juegos.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
