import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-allgamesdata',
  templateUrl: './allgamesdata.component.html',
  styleUrls: ['./allgamesdata.component.css']
})
export class AllgamesdataComponent implements OnInit {

  all:any;

  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getGameDetails(gameName).subscribe(
      all=>
      {
        this.all=all.message;        
      },
      err=>
      {
        console.log("error in getting all game details is", err);        
      }
    )
  }
}
