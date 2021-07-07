import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-cartgamedetails',
  templateUrl: './cartgamedetails.component.html',
  styleUrls: ['./cartgamedetails.component.css']
})
export class CartgamedetailsComponent implements OnInit {

  cart:Games;

  constructor(private ar:ActivatedRoute, private gamesService:GamesService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.gamesService.getActionGameDetails(gameName).subscribe(
      cart=>
      {
        this.cart=cart["message"];        
      },
      err=>
      {
        console.log("error in getting loved game details is", err);        
      }
    )
  }
}
