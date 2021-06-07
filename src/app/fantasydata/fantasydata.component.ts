import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fantasydata',
  templateUrl: './fantasydata.component.html',
  styleUrls: ['./fantasydata.component.css']
})
export class FantasydataComponent implements OnInit {

  fantasy:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of fantasy game with current id
    this.fs.getFantasyGamesById(id).subscribe(
      obj=>
      {
        //assigning fantasy game
        this.fantasy=obj;
      },
      err=>
      {
        console.log("error in getting details of fantasy games is:", err);
      }
    )
  } 

}
