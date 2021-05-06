
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { RegistroComponent } from './pages/registro/registro.component';
import { ConsolasComponent } from './pages/consolas/consolas.component';
import { JuegosComponent } from './pages/juegos/juegos.component';

import {ConsolasService} from './services/consolas.service'
import { JuegosService } from './services/juegos.service'

const router:Routes=[
  {
    path:'login',
    component:LoginComponent
    
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'main',
    component:MainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegistroComponent,
    ConsolasComponent,
    JuegosComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,MatListModule
  ],
  providers: [
    ConsolasService,
    JuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
