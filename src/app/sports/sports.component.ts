import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing sports games
  sports:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void 
  {
    // getting sports games from service
    this.mySubscription=this.gs.getSportsGames().subscribe(
      sports=>
      {
        this.sports=sports;
      },
      err=>
      {
        console.log("error in getting sports games is", err)
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
