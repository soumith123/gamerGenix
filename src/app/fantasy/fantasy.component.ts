import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing fantasy games
  fantasy:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting fantasy games from service
    this.gs.getFantasyGames().subscribe(
      fantasy=>
      {
        this.fantasy=fantasy;
      },
      err=>
      {
        console.log("error in getting fantasy games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
