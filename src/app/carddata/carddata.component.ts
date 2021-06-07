import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.css']
})
export class CarddataComponent implements OnInit {

  card:Games;

  //injecting gamesService object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of card game with current id
    this.fs.getCardGamesById(id).subscribe(
      obj=>
      {
        //assigning card game
        this.card=obj;
      },
      err=>
      {
        console.log("error in getting details of card is:", err);
      }
    )
  } 

}
