import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {FootballListItemComponent} from "./app/football-list-item/football-list-item.component";
import {FootballListComponent} from "./app/football-list/football-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";


const routes: Routes = [
  {path:'', redirectTo: '/footballs', pathMatch: 'full'},
  {path:'footballs', component: FootballListComponent},
  {path:'footballs/:playerName',
    loadComponent: () =>
      import('./app/football-list-item/football-list-item.component'). then(m=>m.FootballListItemComponent)},
  {path:'modify-list-item',
  loadComponent: ()=>
  import('./app/modify-list-item/modify-list-item.component').then(m=>m.ModifyListItemComponent)},
  {path:'**',
  loadComponent: ()=>
  import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)},
]
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));


