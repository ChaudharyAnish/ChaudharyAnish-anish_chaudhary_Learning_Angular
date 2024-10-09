import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FootballListItemComponent} from "./app/football-list-item/football-list-item.component";
import {FootballListComponent} from "./app/football-list/football-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'', redirectTo: '/footballs', pathMatch: 'full'},
  {path:'footballs', component: FootballListComponent},
  {path:'footballs/:playerName', component: FootballListItemComponent},
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent}
]
bootstrapApplication(AppComponent,{providers: [provideRouter(routes)]})
  .then(r=> console.log('Bootstrap successfull'));

