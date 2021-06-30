import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-socialdata',
  templateUrl: './socialdata.component.html',
  styleUrls: ['./socialdata.component.css']
})
export class SocialdataComponent implements OnInit {

  social:any;  

  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getSocialGameDetails(gameName).subscribe(
      social=>
      {
        this.social=social.message;
      },
      err=>
      {
        console.log("error in getting social game details is", err);        
      }
    )
  }
}
