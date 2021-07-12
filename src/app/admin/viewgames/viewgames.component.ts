import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from 'src/app/models/game.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewgames',
  templateUrl: './viewgames.component.html',
  styleUrls: ['./viewgames.component.css']
})
export class ViewgamesComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) {}

  // for pagination
  p=1;

  // for searching
  searchTerm;

  // to store all games
  games:Games[]=[];

  // getting all the games from database by subscribing adminService
  ngOnInit(): void {

    let currentUser=localStorage.getItem("username")
    this.adminService.getGames().subscribe(
      games=>
      {
        this.games=games["message"];
      },
      err=>
      {
        console.log("error in getting games is", err);
        alert(err.message)
        
      }
    )
  }


  // to delete the game
  onDeleteGame(gameObj)
  {
    this.adminService.deleteGame(gameObj.gameName).subscribe(
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


  // after clicking game info button it navigates to game details page
  onSelectGame(gameName)
  {
    this.router.navigateByUrl("/admin/gamerGenix/viewGames/"+gameName)
  }  




  // code to edit mobile
  editGameIndex;
  editGameObj=new Games('','','','','','','','','','','');
  editGameStatus:boolean=false;

  editGame(gameObj,ind)
  {
    this.editGameIndex=ind;
    this.editGameObj=gameObj;
    this.editGameStatus=true;
  }

  saveGame(modifiedGameObj)
  {
    this.editGameStatus=false;
    modifiedGameObj.id=this.editGameObj["id"]
    modifiedGameObj.thumbnail=this.editGameObj["thumbnail"]
    this.adminService.updateGame(modifiedGameObj).subscribe(
      res=>
      {
        console.log(res)
      },
      err=>
      {
        console.log("error in update", err)
      }
    )
  }


}
