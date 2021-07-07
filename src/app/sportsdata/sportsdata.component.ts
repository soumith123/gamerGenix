import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-sportsdata',
  templateUrl: './sportsdata.component.html',
  styleUrls: ['./sportsdata.component.css']
})
export class SportsdataComponent implements OnInit {

  sports:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getSportsGameDetails(gameName).subscribe(
      sports=>
      {
        this.sports=sports["message"];        
      },
      err=>
      {
        console.log("error in getting sports game details is", err);        
      }
    )
  }

}
