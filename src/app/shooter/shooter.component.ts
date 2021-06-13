import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit {

  constructor( private gs:GamesService, private router:Router) { }

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  // storing shooting games
  shooter:Games[]=[];

  mySubscription : Subscription;

  ngOnInit(): void 
  {
    // getting shooting games from service
    this.mySubscription=this.gs.getShootingGames().subscribe(
      shooter=>
      {
        this.shooter=shooter;
      },
      err=>
      {
        console.log("error in getting shooting games are", err)
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
