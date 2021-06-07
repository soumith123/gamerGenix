import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void 
  {
    // getting card games from service
    this.gs.getCardGames().subscribe(
      card=>
      {
        this.card=card;
      },
      err=>
      {
        console.log("error in getting card games are", err)
      }
    )
  }

  // after clicking game info button it navigates to game details page
  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
