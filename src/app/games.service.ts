import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Games } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private hc:HttpClient) { }


  // total games
  getAllGames():Observable<any>
  {
    return this.hc.get("/game/getgames")
  }


  // all games details
  getGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getgame/${gameName}`)
  }
  

  // to delete a certain game
  deleteGame(gameName):Observable<any>
  {
    return this.hc.delete("/game/deletegame/"+gameName)
  }


  // shooting games
  getShootingGames():Observable<any>
  {
    return this.hc.get("/game/getshootinggames")
  }


  // shooting game details
  getShootingGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getshootinggame/${gameName}`)
  }


  // social games
  getSocialGames():Observable<any>
  {
    return this.hc.get("/game/getsocialgames")
  }


  // social game details
  getSocialGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getsocialgame/${gameName}`)
  }


  // fighting games
  getFightingGames():Observable<any>
  {
    return this.hc.get("/game/getfightinggames")
  }


  // fighting game details
  getFightingGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getfightinggame/${gameName}`)
  }


  // racing games
  getRacingGames():Observable<any>
  {
    return this.hc.get("/game/getRacinggames")
  }


  // racing game details
  getRacingGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getracinggame/${gameName}`)
  }


  // sports games
  getSportsGames():Observable<any>
  {
    return this.hc.get("/game/getSportsgames")
  }

  // sports game details
  getSportsGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getsportsgame/${gameName}`)
  }

  
  // MOBA games
  getMOBAGames():Observable<any>
  {
    return this.hc.get("/game/getMOBAgames")
  }


  // MOBA game details
  getMOBAGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getMOBAgame/${gameName}`)
  }
  


  // card games
  getCardGames():Observable<any>
  {
    return this.hc.get("/game/getcardgames")
  }


  // card game details
  getCardGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getcardgame/${gameName}`)
  }


  // strategy games
  getStrategyGames():Observable<any>
  {
    return this.hc.get("/game/getstrategygames")
  }


  // strategy game details
  getStrategyGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getstrategygame/${gameName}`)
  }

  // Fantasy games
  getFantasyGames():Observable<any>
  {
    return this.hc.get("/game/getfantasygames")
  }


  // fantasy game details
  getFantasyGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getfantasygame/${gameName}`)
  }


  // MMO games
  getMMOGames():Observable<any>
  {
    return this.hc.get("/game/getMMOgames")
  }


  // MMO game details
  getMMOGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getmmogame/${gameName}`)
  }

  // action games
  getActionGames():Observable<any>
  {
    return this.hc.get("/game/getActiongames")
  }


  // action game details
  getActionGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getactiongame/${gameName}`)
  }


  // mmorpg games
  getMMORPGGames():Observable<any>
  {
    return this.hc.get("/game/getMMORPGgames")
  }


  // MMORPG game details
  getMMORPGGameDetails(gameName):Observable<any>
  {
    return this.hc.get(`game/getMMORPGgame/${gameName}`)
  }

  // sending user loved games to database
  sendLovedGameToUserCart(userGameObj):Observable<any>
  {
    return this.hc.post("/user/addToLovedGameCart", userGameObj)
  }


  // getting user loved games from database
  getGamesFromUserCart(username):Observable<any>
  {
    return this.hc.get(`/user/getGames/${username}`)
  }
}
