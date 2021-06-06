import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router) { }

  social:Games[]=[];
  p=1;
  searchTerm:string;

  ngOnInit(): void 
  {
    this.gs.getSocialgGames().subscribe(
      social=>
      {
        this.social=social;
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
