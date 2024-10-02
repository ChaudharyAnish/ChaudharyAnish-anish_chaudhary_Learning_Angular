import { Injectable } from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {Observable, of} from "rxjs";
import {footballs} from "../Shared/mockFootball";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private footballList : Football[] = footballs;

  constructor() { }
  getFootballs():Observable<Football[]> {
    return of(footballs);
  }
  addFootball(newFootball:Football): Observable<Football[]>{
    this.footballList.push(newFootball)
    return of(this.footballList);
  }

  updateFootball(updateFootball:Football): Observable<Football[]>{
    const index = this.footballList.findIndex(foot => foot.playerName === updateFootball.playerName);
    if (index !== -1){
      this.footballList[index] = updateFootball;
    }
    return of(this.footballList);
  }

  deleteFootball(deleteplayerName: string): Observable<Football[]>{
    this.footballList = this.footballList.filter(foot => foot.playerName !== deleteplayerName);
    return of (this.footballList);
  }
  getFootball(readplayerName:string): Observable<Football | undefined>{
    const football = this.footballList.find(foot => foot.playerName === readplayerName);
    return of(football);
  }
}
