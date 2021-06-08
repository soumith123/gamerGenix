import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.css']
})
export class AllgamesComponent implements OnInit {

  constructor( private gs:GamesService, private router:Router) { }

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  // storing shooting games
  all:Games[]=[];

  ngOnInit(): void 
  {
    // getting shooting games from service
    this.gs.getGamesData().subscribe(
      all=>
      {
        this.all=all;
      },
      err=>
      {
        console.log("error in getting all games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
