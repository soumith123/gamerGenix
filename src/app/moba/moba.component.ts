import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-moba',
  templateUrl: './moba.component.html',
  styleUrls: ['./moba.component.css']
})
export class MOBAComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router, private userService:UserService) { }

  // storing MOBA games
  moba:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getMOBAGames().subscribe(
      moba=>
      {
        this.moba=moba["message"]
      },
      err=>
      {
        console.log("err is", err)
        alert(err.message)
      }
    )
  }
  // after clicking game info button it navigates to game details page
  onSelectGame(gameName)
  {
    this.router.navigateByUrl("/moba/"+gameName)
  }

  ngOnDestroy()
  {
    this.mySubscription.unsubscribe();
  }


  // adding to cart
  onGameSelect(gameObject)
  {
    let username=localStorage.getItem("username")

    let newUserGameObj={username, gameObject}

    this.gs.sendLovedGameToUserCart(newUserGameObj).subscribe(
      res=>
      {
        alert(res['message'])
        this.userService.updataDataObservable(res.latestCartObj)
      },
      err=>
      {
        console.log("error in posting game to cart is", err)
        alert("something went wrong in adding game to cart")
      }
    )   
  }
}
