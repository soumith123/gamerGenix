import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-strategydata',
  templateUrl: './strategydata.component.html',
  styleUrls: ['./strategydata.component.css']
})
export class StrategydataComponent implements OnInit {

  strategy:Games;

  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getStrategyGameDetails(gameName).subscribe(
      strategy=>
      {
        this.strategy=strategy["message"];
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }

}
