import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmorpg',
  templateUrl: './mmorpg.component.html',
  styleUrls: ['./mmorpg.component.css']
})
export class MmorpgComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing MMORPG games
  mmorpg:any[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getMMORPGGames().subscribe(
      mmorpg=>
      {
        this.mmorpg=mmorpg.message
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
    this.router.navigateByUrl("/mmorpg/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
