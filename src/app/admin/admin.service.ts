import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) {}

  // to create a game (addgames)
  createGame(gameObj):Observable<any>
  {
    return this.hc.post("/game/creategame", gameObj)
  }

  // to get games(viewgames)
  getGames():Observable<any>
  {
    return this.hc.get("/game/getgames")
  }

  // getting games details
  getGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getgame/${gameName}`)
  }

  // to delete a certain game
  deleteGame(gameName):Observable<any>
  {
    return this.hc.delete("/game/deletegame/"+gameName)
  }

  getShootingGames():Observable<any>
  {
    return this.hc.get("/game/getshootinggames")
  }

  getShootingGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getshootinggame/${gameName}`)
  }

  updateGame(updatedGame):Observable<any>
  {
    return this.hc.put("/game/updategame/"+updatedGame.id,updatedGame)
  }

}
