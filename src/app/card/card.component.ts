import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  // storing card games
  card:Games[]=[];

   // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getCardGames().subscribe(
      card=>
      {
        this.card=card.message
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
    this.router.navigateByUrl("/card/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }
}
