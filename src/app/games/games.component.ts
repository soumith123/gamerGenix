import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gameObj:GamesService, private router:Router) { }

  searchTerm:string;

  p=1;

  gamesObj:Games[]=[];

  ngOnInit(): void {
    this.gameObj.getGamesData().subscribe(
      gamesData=>
      {
        this.gamesObj=gamesData;
        // console.log(this.gamesObj)
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }


  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }
}