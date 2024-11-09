import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Football} from "../Shared/Models/Football";

export class InMemoryDataService implements InMemoryDbService {
  createDb():{footballs: Football[]} {

    const footballs: Football[] = [
      {id:1,playerName:"Messi", playerPosition:"SecondStriker",playerJerseyNumber:10,playerAge:37,isplayertrophies: true,pictureimage:"/assets/Messi.jpeg"},
      {id:2,playerName:"Ronaldo", playerPosition:"CentreForward",playerJerseyNumber:7,playerAge:39,isplayertrophies: true,pictureimage:"/assets/ronaldo.jpeg"},
      {id:3,playerName:"Ter stegan", playerPosition:"Goalkepper",playerJerseyNumber:1,playerAge:33,isplayertrophies: false,pictureimage:"/assets/Ter stegan.jpeg"},
      {id:4,playerName:"Di maria", playerPosition:"Attacking Midfielder",playerJerseyNumber:8,playerAge:38,isplayertrophies: true,pictureimage:"/assets/di maria.jpeg"},
      {id:5,playerName:"Van dyke", playerPosition:"Defender",playerJerseyNumber:3,playerAge:32,isplayertrophies: false,pictureimage:"/assets/Van dyke.jpeg"},
      {id:6,playerName:"Joshua Kimmich", playerPosition:"Defensive Midfielder",playerJerseyNumber:8,playerAge:29,isplayertrophies: false,pictureimage:"/assets/Joshua Kimmich.jpeg"}


    ];
    return {footballs};

  }


  }
