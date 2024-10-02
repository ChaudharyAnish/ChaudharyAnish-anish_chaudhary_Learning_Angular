import { Component } from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {FootballListItemComponent} from "../football-list-item/football-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {FootballService} from "../Services/football.service";

@Component({
  selector: 'app-football-list',
  standalone: true,
  imports: [NgForOf, FootballListItemComponent, NgClass
  ],
  templateUrl: './football-list.component.html',
  styleUrl: './football-list.component.css'
})
export class FootballListComponent {
  footballs:Football[] = [];

  constructor(private footballService : FootballService) {
  }

}
