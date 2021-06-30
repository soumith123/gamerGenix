import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.component.html',
  styleUrls: ['./moba.component.css']
})
export class MOBAComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing MOBA games
  moba:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getMOBAGames().subscribe(
      moba=>
      {
        this.moba=moba.message
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
    this.router.navigateByUrl("/moba/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
