import {Component, Input} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-football-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './football-list-item.component.html',
  styleUrl: './football-list-item.component.css'
})
export class FootballListItemComponent {
  @Input() football?: Football;

}
