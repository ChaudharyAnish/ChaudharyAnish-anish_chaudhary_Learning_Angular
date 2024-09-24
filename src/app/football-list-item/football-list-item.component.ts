import {Component, Input} from '@angular/core';
import {Football} from "../Shared/Models/Football";

@Component({
  selector: 'app-football-list-item',
  standalone: true,
  imports: [],
  templateUrl: './football-list-item.component.html',
  styleUrl: './football-list-item.component.css'
})
export class FootballListItemComponent {
  @Input() football?: Football;

}
