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

  fighting:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of Fighting game with current id
    this.fs.getFightingGamesById(id).subscribe(
      obj=>
      {
        //assigning fighting game
        this.fighting=obj;
      },
      err=>
      {
        console.log("error in getting details of fighting games is:", err);
      }
    )
  } 


}
