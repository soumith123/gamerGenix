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

  mySubscription : Subscription;

  shooting:any[];

  userObj;

  ngOnInit(): void {

    this.mySubscription=this.gs.getShootingGames().subscribe(
      shooting=>
      {
        this.shooting=shooting.message
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
    this.router.navigateByUrl("/shooter/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}