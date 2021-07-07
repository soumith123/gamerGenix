import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmodata',
  templateUrl: './mmodata.component.html',
  styleUrls: ['./mmodata.component.css']
})
export class MmodataComponent implements OnInit {

  mmo:any;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getMMOGameDetails(gameName).subscribe(
      mmo=>
      {
        this.mmo=mmo["message"];        
      },
      err=>
      {
        console.log("error in getting mmo game details is", err);        
      }
    )
  }


}
