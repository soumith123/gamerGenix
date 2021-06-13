import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.css']
})
export class FightingComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing fighting games
  fighting:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void 
  {
    // getting fighting games from service
    this.mySubscription=this.gs.getFightinggGames().subscribe(
      fighting=>
      {
        this.fighting=fighting;
      },
      err=>
      {
        console.log("error in getting fighting games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
