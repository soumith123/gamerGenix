import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

   // storing racing games
  racing:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void 
  {
    // getting racing games from service
    this.mySubscription=this.gs.getRacingGames().subscribe(
      racing=>
      {
        this.racing=racing;
      },
      err=>
      {
        console.log("error in getting racing games are", err)
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
