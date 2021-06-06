import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-mmo',
  templateUrl: './mmo.component.html',
  styleUrls: ['./mmo.component.css']
})
export class MmoComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  mmo:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getMMOGames().subscribe(
      mmo=>
      {
        this.mmo=mmo;
      },
      err=>
      {
        console.log("error in getting mmo games are", err)
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
