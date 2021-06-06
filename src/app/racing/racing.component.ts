import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  racing:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getRacingGames().subscribe(
      racing=>
      {
        this.racing=racing;
      },
      err=>
      {
        console.log("error in getting action games are", err)
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }  


}
