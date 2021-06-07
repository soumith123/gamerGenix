import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing action games
  action:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting action games from service
    this.gs.getActionGames().subscribe(
      action=>
      {
        this.action=action;
      },
      err=>
      {
        console.log("error in getting action games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
