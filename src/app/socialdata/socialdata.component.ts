import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-socialdata',
  templateUrl: './socialdata.component.html',
  styleUrls: ['./socialdata.component.css']
})
export class SocialdataComponent implements OnInit {

  social:Games;
  

  //injecting gamesdata service object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getSocialGamesById(id).subscribe(
      obj=>
      {
        //assigning games
        this.social=obj;
      },
      err=>
      {
        console.log("error in getting details of social is:", err);
      }
    )
  } 

}
