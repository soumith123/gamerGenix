import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fantasydata',
  templateUrl: './fantasydata.component.html',
  styleUrls: ['./fantasydata.component.css']
})
export class FantasydataComponent implements OnInit {

  fantasy:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getFantasyGameDetails(gameName).subscribe(
      fantasy=>
      {
        this.fantasy=fantasy["message"];        
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }
}
