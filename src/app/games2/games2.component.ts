import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-games2',
  templateUrl: './games2.component.html',
  styleUrls: ['./games2.component.css']
})
export class Games2Component implements OnInit {

  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  game:Games[];

  ngOnInit(): void 
  {

    //getting id from url
    let category=this.ar.snapshot.params.category;
    
    //get data of game with current id
    this.fs.getShootingGames().subscribe(
      obj=>
      {
        //assigning games
        this.game=obj;
      },
      err=>
      {
        console.log("error in getting details of game is:", err);
      }
    )
  } 
}
