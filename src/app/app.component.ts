import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Football} from "./Shared/Models/Football";
import {FootballListComponent} from "./football-list/football-list.component";
import {FootballListItemComponent} from "./football-list-item/football-list-item.component";
import {FootballService} from "./Services/football.service";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FootballListComponent, FootballListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Assignment 4 Football- Anish Chaudhary";
  displayedColumns:string[] = ['playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayertrophies'];
  footballs:Football[] = [];

  constructor(private footballService : FootballService) {
  }
  ngOnInit() {
    this.footballService.getFootballs().subscribe({
      next: (data: Football[]) => this.footballs = data,
      error: err => console.log("Error fetching Footballs", err),
      complete:() => console.log("Football data fetch complete")
    })
  }


}
