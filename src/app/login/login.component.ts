import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) {}

  ngOnInit(): void {
  }

  onLogin(userCredentials)
  {
    this.userService.loginUser(userCredentials).subscribe(
      res=>
      {
        if (res.message==="login success")
        {
          localStorage.setItem("token", res.token)
          localStorage.setItem("username", res.username)
          localStorage.setItem("userObj", JSON.stringify(res.userObj))
          this.userService.userLoginStatus=true;          
          if(userCredentials.type==="user")
          {
            this.router.navigateByUrl(`games/${res.username}`)
          }
          if(userCredentials.type==="admin")
          {
            this.router.navigateByUrl(`admin/${res.username}`)
          }
          
        }
        else
        {
          alert(res.message)
        }
      },
      err=>
      {
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }


}
