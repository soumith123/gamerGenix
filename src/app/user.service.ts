import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLoginStatus=false;

  constructor(private hc:HttpClient) 
  {
    if(localStorage.getItem('username')!==null)
    {
      this.userLoginStatus=true;
    }
  }
  createUser(userObj):Observable<any>
  {
    return this.hc.post("/user/createUser",userObj)
  }

  getUser(username):Observable<any>
  {
    return this.hc.get(`/user/getuser/${username}`)
  }

  loginUser(credentials):Observable<any>
  {
    if(credentials.type=="admin")
    {
      return this.hc.post("/admin/login", credentials)
    }
    if(credentials.type==="user")
    {
      return this.hc.post("/user/login",credentials)
    }
  }
}
