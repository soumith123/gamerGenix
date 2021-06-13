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

  ngOnInit(): void 
  {
    // getting MOBA games from service
    this.mySubscription=this.gs.getMOBAGames().subscribe(
      moba=>
      {
        this.moba=moba;
      },
      err=>
      {
        console.log("error in getting MOBA games are", err)
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
