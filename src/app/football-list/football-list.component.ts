import {Component, OnInit} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {FootballListItemComponent} from "../football-list-item/football-list-item.component";
import {CurrencyPipe, LowerCasePipe, NgClass, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FootballService} from "../Services/football.service";
import {Router, RouterLink} from "@angular/router";
import {NamePositionPipe} from "../pipes/name-position.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from "@angular/material/table";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-football-list',
  standalone: true,
  imports: [NgForOf, FootballListItemComponent, RouterLink, NgIf, NgClass, CurrencyPipe, LowerCasePipe, UpperCasePipe, TitleCasePipe, NamePositionPipe, HoverHighlightDirective, MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef, MatList, MatListItem, MatButton],
  templateUrl:'./football-list.component.html',
  styleUrl:'./football-list.component.css'
})
export class FootballListComponent implements OnInit {
  displayedColumns:string[] = ['id','playerName', 'playerPosition', 'playerJerseyNumber', 'playerAge', 'isplayertrophies'];
  footballs:Football[] = [];
  error:string | null=null;


  constructor(private footballService : FootballService, private router: Router) {
  }
  ngOnInit() {
    this.footballService.getFootballs().subscribe({
      next: (data: Football[]) => {
        this.footballs = data,
          this.error = null;
      },

      error: err => {
        this.error = "Error fetching Footballs";
        console.log("Footballs data fetching completed", err);
      },
      complete:() => console.log("Football data fetch complete")
    });
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
