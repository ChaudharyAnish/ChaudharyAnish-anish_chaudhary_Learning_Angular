import {Component, Input} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-football-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './football-list-item.component.html',
  styleUrl: './football-list-item.component.css'
})
export class FootballListItemComponent {
  @Input() footballs?: Football;

}
