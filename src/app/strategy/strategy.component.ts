import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing strategy games
  strategy:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting strategy games from service
    this.gs.getStrategyGames().subscribe(
      strategy=>
      {
        this.strategy=strategy;
      },
      err=>
      {
        console.log("error in getting strategy games is", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
