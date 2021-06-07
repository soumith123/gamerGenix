import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-strategydata',
  templateUrl: './strategydata.component.html',
  styleUrls: ['./strategydata.component.css']
})
export class StrategydataComponent implements OnInit {

  strategy:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of strategy game with current id
    this.fs.getStrategyGamesById(id).subscribe(
      obj=>
      {
        //assigning strategy game
        this.strategy=obj;
      },
      err=>
      {
        console.log("error in getting details of strategy game is:", err);
      }
    )
  } 

}
