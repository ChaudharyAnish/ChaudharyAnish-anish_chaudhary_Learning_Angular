import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FootballListItemComponent} from "./app/football-list-item/football-list-item.component";
import {FootballListComponent} from "./app/football-list/football-list.component";
import * as path from "node:path";

const routes: Routes = [
  {path:'', redirectTo: '/footballs', pathMatch: 'full'},
  {path:'footballs', component: FootballListComponent},
  {path: 'footballs/:playerName', component: FootballListItemComponent},
]
bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]})
  .then(r => console.log('Bootstrap successfull'));

