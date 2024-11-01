import {Component, OnInit} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {FootballListItemComponent} from "../football-list-item/football-list-item.component";
import {NgForOf} from "@angular/common";
import {FootballService} from "../Services/football.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-football-list',
  standalone: true,
  imports: [NgForOf, FootballListItemComponent, RouterLink,
  ],
  templateUrl: './football-list.component.html',
  styleUrl: './football-list.component.css'
})
export class FootballListComponent implements OnInit {
  displayedColumns:string[] = ['id','playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayertrophies'];
  footballs:Football[] = [];


  constructor(private footballService : FootballService, private router: Router) {
  }
  ngOnInit() {
    this.footballService.getFootballs().subscribe({
      next: (data: Football[]) => this.footballs = data,
      error: err => console.log("Error fetching Footballs", err),
      complete:() => console.log("Football data fetch complete")
    })
  }
  selectedFootball?: Football;
  selectFootball(football:Football):void{
    this.selectedFootball = football;
  }
  deleteFootball(id: number):void{
    this.footballs = this.footballs.filter(foot => foot.id !== id);
  }
  edit(): void{
    this.router.navigate(['/modify-list-item']);
  }
}
