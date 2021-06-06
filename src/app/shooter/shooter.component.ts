import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit {

  constructor( private gs:GamesService, private router:Router) { }

  p=1;

  searchTerm:string;

  shooter:Games[]=[];

  ngOnInit(): void 
  {
    this.gs.getShootingGames().subscribe(
      shooter=>
      {
        this.shooter=shooter;
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
