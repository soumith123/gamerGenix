import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewgamedetails',
  templateUrl: './viewgamedetails.component.html',
  styleUrls: ['./viewgamedetails.component.css']
})
export class ViewgamedetailsComponent implements OnInit {

  all:any;

  constructor(private ar:ActivatedRoute, private adminService:AdminService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.adminService.getShootingGameDetails(gameName).subscribe(
      all=>
      {
        this.all=all.message;        
      },
      err=>
      {
        console.log("error in getting game details is", err);        
      }
    )
  }
}
