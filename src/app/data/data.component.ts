import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private gameObj:GamesService, private router:Router) { }

  searchTerm:string;

  p=1;

  gamesObj:Games[]=[];

  ngOnInit(): void {
    this.gameObj.getGamesData().subscribe(
      gamesData=>
      {
        this.gamesObj=gamesData;
      },
      err=>
      {
        console.log("error is", err)
      }
    )
  }

}
