import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mobadata',
  templateUrl: './mobadata.component.html',
  styleUrls: ['./mobadata.component.css']
})
export class MobadataComponent implements OnInit {

  moba:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getMOBAGameDetails(gameName).subscribe(
      moba=>
      {
        this.moba=moba["message"];        
      },
      err=>
      {
        console.log("error in getting moba game details is", err);        
      }
    )
  }


}
