import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-shootingdata',
  templateUrl: './shootingdata.component.html',
  styleUrls: ['./shootingdata.component.css']
})
export class ShootingdataComponent implements OnInit {

  shooting:Games;

  //injecting gamesdata service object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getShootingGamesById(id).subscribe(
      obj=>
      {
        //assigning games
        this.shooting=obj;
        console.log(this.shooting)
      },
      err=>
      {
        console.log("error in getting details of shooting is:", err);
      }
    )
  } 

}
