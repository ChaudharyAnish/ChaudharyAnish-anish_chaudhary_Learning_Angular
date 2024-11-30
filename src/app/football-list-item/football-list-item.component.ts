import {Component, Input, OnInit} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {CurrencyPipe, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {FootballService} from "../Services/football.service";
import {footballs} from "../Shared/mockFootball";
import {NamePositionPipe} from "../pipes/name-position.pipe";
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-football-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    CurrencyPipe,
    NamePositionPipe,
    TitleCasePipe,
    UpperCasePipe,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HoverHighlightDirective
  ],
  templateUrl:'./football-list-item.component.html',
  styleUrl:'./football-list-item.component.css'
})
export class FootballListItemComponent implements OnInit{
  footballs: Football | undefined;
  footballList: Football[] = [];
  currentIndex: number=0;
  error: string |null=null;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService,
    private router: Router)
  {}

  ngOnInit(): void {this.footballService.getFootballs().subscribe({
    next:(data: Football[]) => {
      this.footballList = data;
      this.error = null;

      this.route.paramMap.subscribe(anishs =>{
        const id = Number(anishs.get('id'));
        if (id){
          this.currentIndex = this.footballList.findIndex(users => users.id === id);
          this.footballs = this.footballList[this.currentIndex];
        }
      });
    },
    error: (err) => {
      this.error = 'Error fetching football';
      console.log('Error fetching football', err)
    }
  })
  }

}
