import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-shoot',
  templateUrl: './shoot.component.html',
  styleUrls: ['./shoot.component.css']
})
export class ShootComponent implements OnInit {

  shoot:any[];

  constructor(private adminService:AdminService, private router:Router) {}

  ngOnInit(): void {

    this.adminService.getShootingGames().subscribe(
      shoot=>
      {
        this.shoot=shoot.message
      },
      err=>
      {
        console.log("err is", err)
        alert(err.message)
      }
    )
  }


  onSelectGame(gameName)
  {
    this.router.navigateByUrl("/admin/gamerGenix/shoot/"+gameName)
  }

}
