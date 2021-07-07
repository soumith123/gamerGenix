import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-racingdata',
  templateUrl: './racingdata.component.html',
  styleUrls: ['./racingdata.component.css']
})
export class RacingdataComponent implements OnInit {

  racing:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getRacingGameDetails(gameName).subscribe(
      racing=>
      {
        this.racing=racing["message"];        
      },
      err=>
      {
        console.log("error in getting racing game details is", err);        
      }
    )
  }
}