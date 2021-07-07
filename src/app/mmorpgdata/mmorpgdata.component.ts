import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmorpgdata',
  templateUrl: './mmorpgdata.component.html',
  styleUrls: ['./mmorpgdata.component.css']
})
export class MmorpgdataComponent implements OnInit {

  mmorpg:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getMMORPGGameDetails(gameName).subscribe(
      mmorpg=>
      {
        this.mmorpg=mmorpg["message"];        
      },
      err=>
      {
        console.log("error in getting mmorpg game details is", err);        
      }
    )
  }

}
