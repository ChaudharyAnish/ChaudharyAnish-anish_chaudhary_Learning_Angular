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
  {path:'footballs/:playerName', component: FootballListItemComponent},
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path:'**', component: PageNotFoundComponent}
]
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));


