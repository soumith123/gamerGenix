import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lovedcart',
  templateUrl: './lovedcart.component.html',
  styleUrls: ['./lovedcart.component.css']
})
export class LovedcartComponent implements OnInit {

  constructor(private gamesService:GamesService, private router:Router, private userService:UserService) { }

  userCartObject;

  searchTerm;

  products=[];

  p=1;

  ngOnInit(): void 
  {
    let username=localStorage.getItem("username")
    this.userService.dataObservable.subscribe(
      res=>
      {
        if(res["message"]=="User Loved Cart is empty")
        {
          alert("User cart is empty") 
        }
        else
        {
          this.products=res["products"]
        }
      },
      err=>
      {
        console.log("error in adding games to cart is", err)
        alert("Something wrong in adding games to cart")
      }
    )
  }


  onSelectGame(gameName)
  {
    this.router.navigateByUrl("/lovedGames/"+gameName)
  }



  /*

  onDeleteGame(gameObj)
  {
    this.gamesService.deleteGame(gameObj.gameName).subscribe(
      res=>
      {
        if(res.message==="game deleted")
        {
          alert("Game deleted")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("error in deleting game is", err);
        alert("Something wrong in dleeting game")        
      }
    )
  }

  */

}
