import { Pipe, PipeTransform } from '@angular/core';
import {Football} from "../Shared/Models/Football";

@Pipe({
  name: 'namePosition',
  standalone: true
})
export class NamePositionPipe implements PipeTransform {

  transform(football: Football): string {
    return `${football.playerName} ${football.playerPosition}`;
  }

}
