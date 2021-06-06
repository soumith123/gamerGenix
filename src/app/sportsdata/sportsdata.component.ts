import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-sportsdata',
  templateUrl: './sportsdata.component.html',
  styleUrls: ['./sportsdata.component.css']
})
export class SportsdataComponent implements OnInit {

  sports:Games;

  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getSportsGamesById(id).subscribe(
      obj=>
      {
        //assigning games
        this.sports=obj;
      },
      err=>
      {
        console.log("error in getting details of sports is:", err);
      }
    )
  } 

}
