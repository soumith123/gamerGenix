import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmorpgdata',
  templateUrl: './mmorpgdata.component.html',
  styleUrls: ['./mmorpgdata.component.css']
})
export class MmorpgdataComponent implements OnInit {

  mmorpg:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of mmorpg game with current id
    this.fs.getMMORPGGamesById(id).subscribe(
      obj=>
      {
        //assigning mmorpg game
        this.mmorpg=obj;
      },
      err=>
      {
        console.log("error in getting details of mmorpg games is:", err);
      }
    )
  } 

}
