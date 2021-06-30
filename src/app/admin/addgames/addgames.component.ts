import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addgames',
  templateUrl: './addgames.component.html',
  styleUrls: ['./addgames.component.css']
})
export class AddgamesComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router) {}

  ngOnInit(): void {
  }


  // to submit the game to database
  onDSubmitGame(gameObj)
  {
    this.adminService.createGame(gameObj).subscribe(
      res=>
      {
        if (res.message==="New game created")
        {
          alert("New Game Created")
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log("error in creating game is", err);
        alert("Something went wrong in creating game")        
      }
    )
  }


}
