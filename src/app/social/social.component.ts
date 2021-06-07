import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing social games
  social:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  ngOnInit(): void 
  {
    // getting social games from service
    this.gs.getSocialgGames().subscribe(
      social=>
      {
        this.social=social;
      },
      err=>
      {
        console.log("error in getting social games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
