import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-shootingdata',
  templateUrl: './shootingdata.component.html',
  styleUrls: ['./shootingdata.component.css']
})
export class ShootingdataComponent implements OnInit {

  shooting:any;

  constructor(private ar:ActivatedRoute, private as:AdminService) {}

  ngOnInit(): void 
  {
    let gameName=this.ar.snapshot.params.gameName;

    this.as.getShootingGameDetails(gameName).subscribe(
      shooting=>
      {
        this.shooting=shooting.message;
      },
      err=>
      {
        console.log("error in getting shooting game details is", err);        
      }
    )
  }
}


