import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmorpg',
  templateUrl: './mmorpg.component.html',
  styleUrls: ['./mmorpg.component.css']
})
export class MmorpgComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing MMORPG games
  mmorpg:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting shooting games from service
    this.gs.getMMORPGGames().subscribe(
      mmorpg=>
      {
        this.mmorpg=mmorpg;
      },
      err=>
      {
        console.log("error in getting mmorpg games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }


}
