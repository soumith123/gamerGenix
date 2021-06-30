import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-actiondata',
  templateUrl: './actiondata.component.html',
  styleUrls: ['./actiondata.component.css']
})
export class ActiondataComponent implements OnInit {

  action:any;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getActionGameDetails(gameName).subscribe(
      action=>
      {
        this.action=action.message;        
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }
}
