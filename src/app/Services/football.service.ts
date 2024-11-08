import { Injectable } from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {catchError, Observable, throwError} from "rxjs";
import {footballs} from "../Shared/mockFootball";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'api/students';
  private footballList : Football[] = footballs;

  constructor(private http: HttpClient) { }
  getFootballs():Observable<Football[]> {
    return this.http.get<Football[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  getFootballById(id:number): Observable<Football>{
    return this.http.get<Football>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  addFootball(newFootball:Football): Observable<Football>{
    newFootball.id = this.generateNewId();
    return this.http.post<Football>(this.apiUrl, newFootball).pipe(catchError(this.handleError));
  }

  updateFootball(updateFootball:Football): Observable<Football | undefined>{
    const url = `${this.apiUrl}/${updateFootball.id}`;
    return this.http.put<Football>(url, updateFootball).pipe(catchError(this.handleError));
  }

  deleteFootball(id:number):Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  generateNewId():number{
    return this.footballList.length >0 ? Math.max(...this.footballList.map(foot =>foot.id)) +1:1;
  }

  selectedFootball?: Football;
  selectFootball(football:Football):void{
    this.selectedFootball = football;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}

