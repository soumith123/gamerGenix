import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getMMOGames().subscribe(
      mmo=>
      {
        this.mmo=mmo.message
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
    this.router.navigateByUrl("/mmo/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
