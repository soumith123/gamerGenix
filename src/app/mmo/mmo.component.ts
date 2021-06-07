import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmo',
  templateUrl: './mmo.component.html',
  styleUrls: ['./mmo.component.css']
})
export class MmoComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

   // storing MMO games
  mmo:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting MMO games from service
    this.gs.getMMOGames().subscribe(
      mmo=>
      {
        this.mmo=mmo;
      },
      err=>
      {
        console.log("error in getting mmo games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
