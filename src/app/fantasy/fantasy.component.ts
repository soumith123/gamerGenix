import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models/game.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent implements OnInit {

  constructor(private gs:GamesService, private router:Router, private userService:UserService) { }

  // storing fantasy games
  fantasy:Games[]=[];

  // for pagination
  p=1;

  // to search game
  searchTerm:string;

  mySubscription : Subscription;

  ngOnInit(): void {

    this.mySubscription=this.gs.getFantasyGames().subscribe(
      fantasy=>
      {
        this.fantasy=fantasy["message"]
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
    this.router.navigateByUrl("/fantasy/"+gameName)
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
