import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  sports:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getSportsGames().subscribe(
      sports=>
      {
        this.sports=sports;
      },
      err=>
      {
        console.log("error in getting sports games are", err)
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }

}
