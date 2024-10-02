import { Injectable } from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {Observable, of} from "rxjs";
import {footballs} from "../Shared/mockFootball";

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor() { }
  getFootballs():Observable<Football[]> {
    return of(footballs);
  }
}
