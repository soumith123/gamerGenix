import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmorpg',
  templateUrl: './mmorpg.component.html',
  styleUrls: ['./mmorpg.component.css']
})
export class MmorpgComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  mmorpg:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getMMORPGGames().subscribe(
      mmorpg=>
      {
        this.mmorpg=mmorpg;
      },
      err=>
      {
        console.log("error in getting mmorpg games are", err)
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }


}
