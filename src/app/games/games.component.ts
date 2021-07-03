import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private gamesService:GamesService, private router:Router, private userServive:UserService) { }
  

  searchTerm:string;

  count;
  userObj;

  p=1;

  gamesObj:any[];

  ngOnInit(): void 
  {
    this.userObj=JSON.parse(localStorage.getItem("userObj"))
    this.gamesService.getGamesFromUserCart(this.userObj.username).subscribe(
      res=>
      {
        if(res.message==="User Loved Cart is empty")
        {
          this.userServive.updataDataObservable(0)
        }
        else
        {
          this.userServive.updataDataObservable(res.message)
        }
        this.userServive.dataObservable.subscribe(gamesObj=>
          {
            if(gamesObj===0)
            {
              this.count=0;
            }
            else
            {
              this.count=gamesObj.products.length;
            }
          })
      },
      err=>
      {
        console.log("error is", err)
        alert(err.message)
      }
    )
  }


  onSelectId(id)
  {
    this.router.navigateByUrl('games/'+id)
  }
}