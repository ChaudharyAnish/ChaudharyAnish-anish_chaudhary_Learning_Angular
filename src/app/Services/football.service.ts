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
  getFootballById(id:number): Observable<Football | undefined>{
    return of(this.footballList.find(foot => foot.id === id));
  }
  addFootball(newFootball:Football): Observable<Football[]>{
    this.footballList.push(newFootball)
    return of(this.footballList);
  }

  updateFootball(updateFootball:Football): Observable<Football[]>{
    const index = this.footballList.findIndex(foot => foot.id === updateFootball.id);
    if (index !== -1){
      this.footballList[index] = updateFootball;
    }
    return of(this.footballList);
  }

  deleteFootball(id:number):void{
    this.footballList = this.footballList.filter(foot => foot.id !== id);
  }
  generateNewId():number{
    return this.footballList.length >0 ? Math.max(...this.footballList.map(foot =>foot.id)) +1:1;
  }

  selectedFootball?: Football;
  selectFootball(football:Football):void{
    this.selectedFootball = football;
  }
}

