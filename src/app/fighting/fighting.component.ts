import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.css']
})
export class FightingComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  fighting:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getFightinggGames().subscribe(
      fighting=>
      {
        this.fighting=fighting;
      },
      err=>
      {
        console.log("error in getting action games are", err)
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }


}
