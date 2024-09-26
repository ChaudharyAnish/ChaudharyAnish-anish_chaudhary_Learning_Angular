import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Football} from "./Shared/Models/Football";
import {FootballListComponent} from "./football-list/football-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FootballListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Assignment 3 Football- Anish Chaudhary";


}
