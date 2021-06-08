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

  all:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of action game with current id
    this.fs.getGameById(id).subscribe(
      obj=>
      {
        //assigning action game
        this.all=obj;
      },
      err=>
      {
        console.log("error in getting details of action is:", err);
      }
    )
  } 
}
