import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fightingdata',
  templateUrl: './fightingdata.component.html',
  styleUrls: ['./fightingdata.component.css']
})
export class FightingdataComponent implements OnInit {

  fighting:any;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getFightingGameDetails(gameName).subscribe(
      fighting=>
      {
        this.fighting=fighting.message;        
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }

}
