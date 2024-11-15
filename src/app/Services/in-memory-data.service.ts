import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Football} from "../Shared/Models/Football";

export class InMemoryDataService implements InMemoryDbService {
  createDb():{footballs: Football[]} {

    const footballs: Football[] = [
      {id:1,playerName:"Leo Messi", playerPosition:"Second Striker",playerJerseyNumber:10,playerAge:"three seven",isplayertrophies: true,pictureimage:"/assets/Messi.jpeg", budget: 87543},
      {id:2,playerName:"Cristiano Ronaldo", playerPosition:"Centre Forward",playerJerseyNumber:7,playerAge:"three nine",isplayertrophies: true,pictureimage:"/assets/ronaldo.jpeg", budget: 88923},
      {id:3,playerName:"Ter stegan", playerPosition:"Goal kepper",playerJerseyNumber:1,playerAge:"three three",isplayertrophies: false,pictureimage:"/assets/Ter stegan.jpeg",budget: 75423},
      {id:4,playerName:"Di maria", playerPosition:"Attacking Midfielder",playerJerseyNumber:8,playerAge:"three eight",isplayertrophies: true,pictureimage:"/assets/di maria.jpeg",budget: 90742},
      {id:5,playerName:"Van dyke", playerPosition:"Defender",playerJerseyNumber:3,playerAge:"three two",isplayertrophies: false,pictureimage:"/assets/Van dyke.jpeg",budget: 69993},
      {id:6,playerName:"Joshua Kimmich", playerPosition:"Defensive Midfielder",playerJerseyNumber:8,playerAge:"two nine",isplayertrophies: false,pictureimage:"/assets/Joshua Kimmich.jpeg",budget: 72991}

    ];
    return {footballs};

  }


  }
