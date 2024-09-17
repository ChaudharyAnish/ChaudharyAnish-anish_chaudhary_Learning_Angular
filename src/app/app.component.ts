import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Football} from "./Shared/Models/Football";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Assignment 2 Football- Anish Chaudhary";

  football1: Football = {playerName:"Messi", playerPosition:"SecondStriker",playerJerseyNumber:10,playerAge:37,isplayertrophies: true};
  football2: Football = {playerName:"Ronaldo", playerPosition:"CentreForward",playerJerseyNumber:7,playerAge:39,isplayertrophies: true};
  football3: Football = {playerName:"Ter stegan", playerPosition:"Goalkepper",playerJerseyNumber:1,playerAge:33,isplayertrophies: false};
  football4: Football = {playerName:"Di maria", playerPosition:"Attacking Midfielder",playerJerseyNumber:8,playerAge:38,isplayertrophies: true};
  football5: Football = {playerName:"Van dyke", playerPosition:"Defender",playerJerseyNumber:3,playerAge:32,isplayertrophies: false};
  football6: Football = {playerName:"Joshua Kimmich", playerPosition:"Defensive Midfielder",playerJerseyNumber:8,playerAge:29,isplayertrophies: false};

  footballlist: Football [] = [this.football1, this.football2, this.football3, this.football4, this.football5, this.football6];

}
