import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing action games
  action:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getActionGames().subscribe(
      action=>
      {
        this.action=action.message
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
    this.router.navigateByUrl("/action/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }

}
