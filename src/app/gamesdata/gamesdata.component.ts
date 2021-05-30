import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-gamesdata',
  templateUrl: './gamesdata.component.html',
  styleUrls: ['./gamesdata.component.css']
})
export class GamesdataComponent implements OnInit {

  gameObj:any;
  

  //injecting gamesdata service object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getGameById(id).subscribe(
      obj=>
      {
        //assigning games
        this.gameObj=obj;
        console.log(this.gameObj)
      },
      err=>
      {
        console.log("error in getting details of game is:", err);
      }
    )
  }


 

}
