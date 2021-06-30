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
  fighting:any[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getFightingGames().subscribe(
      fighting=>
      {
        this.fighting=fighting.message
      },
      err=>
      {
        console.log("err is", err)
        alert(err.message)
      }
    )
  }
  // after clicking game info button it navigates to game details page
  onSelectGame(gameName)
  {
    this.router.navigateByUrl("/fighting/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
