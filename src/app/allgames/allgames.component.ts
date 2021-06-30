import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  mySubscription : Subscription;

  // storing shooting games
  all:any[];

  ngOnInit(): void {

    this.mySubscription=this.gs.getAllGames().subscribe(
      all=>
      {
        this.all=all.message
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
    this.router.navigateByUrl("/allGames/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }

}
