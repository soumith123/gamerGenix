import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-racingdata',
  templateUrl: './racingdata.component.html',
  styleUrls: ['./racingdata.component.css']
})
export class RacingdataComponent implements OnInit {

  racing:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of racing game with current id
    this.fs.getRacingGamesById(id).subscribe(
      obj=>
      {
        //assigning racing game
        this.racing=obj;
      },
      err=>
      {
        console.log("error in getting details of racing games is:", err);
      }
    )
  } 

}
