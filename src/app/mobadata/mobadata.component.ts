import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mobadata',
  templateUrl: './mobadata.component.html',
  styleUrls: ['./mobadata.component.css']
})
export class MobadataComponent implements OnInit {

  moba:Games;

  //injecting gamesdata service object
  constructor(private ar:ActivatedRoute, private fs:GamesService) { }

  ngOnInit(): void 
  {

    //getting id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of game with current id
    this.fs.getMOBAGamesById(id).subscribe(
      obj=>
      {
        //assigning games
        this.moba=obj;
      },
      err=>
      {
        console.log("error in getting details of shooting is:", err);
      }
    )
  } 


}
