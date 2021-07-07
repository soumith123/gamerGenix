import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-shootingdata',
  templateUrl: './shootingdata.component.html',
  styleUrls: ['./shootingdata.component.css']
})
export class ShootingdataComponent implements OnInit {

  shooting:Games;

  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getShootingGameDetails(gameName).subscribe(
      shooting=>
      {
        this.shooting=shooting["message"];        
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }
}

