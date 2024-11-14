import { Pipe, PipeTransform } from '@angular/core';
import {Football} from "../Shared/Models/Football";

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {

  transform(football:Football):string{
    return  `${football.playerName}`;
  }

}
