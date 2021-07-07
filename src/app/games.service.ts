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
  getAllGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getgames")
  }


  // all games details
  getGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getgame/${gameName}`)
  }
  

  // to delete a certain game
  deleteGame(gameName):Observable<any>
  {
    return this.hc.delete("/game/deletegame/"+gameName)
  }


  // shooting games
  getShootingGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getshootinggames")
  }


  // shooting game details
  getShootingGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getshootinggame/${gameName}`)
  }


  // social games
  getSocialGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getsocialgames")
  }


  // social game details
  getSocialGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getsocialgame/${gameName}`)
  }


  // fighting games
  getFightingGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getfightinggames")
  }


  // fighting game details
  getFightingGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getfightinggame/${gameName}`)
  }


  // racing games
  getRacingGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getRacinggames")
  }


  // racing game details
  getRacingGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getracinggame/${gameName}`)
  }


  // sports games
  getSportsGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getSportsgames")
  }

  // sports game details
  getSportsGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getsportsgame/${gameName}`)
  }

  
  // MOBA games
  getMOBAGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getMOBAgames")
  }


  // MOBA game details
  getMOBAGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getMOBAgame/${gameName}`)
  }
  


  // card games
  getCardGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getcardgames")
  }


  // card game details
  getCardGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getcardgame/${gameName}`)
  }


  // strategy games
  getStrategyGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getstrategygames")
  }


  // strategy game details
  getStrategyGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getstrategygame/${gameName}`)
  }

  // Fantasy games
  getFantasyGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getfantasygames")
  }


  // fantasy game details
  getFantasyGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getfantasygame/${gameName}`)
  }


  // MMO games
  getMMOGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getMMOgames")
  }


  // MMO game details
  getMMOGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getmmogame/${gameName}`)
  }

  // action games
  getActionGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getActiongames")
  }


  // action game details
  getActionGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getactiongame/${gameName}`)
  }


  // mmorpg games
  getMMORPGGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("/game/getMMORPGgames")
  }


  // MMORPG game details
  getMMORPGGameDetails(gameName):Observable<Games>
  {
    return this.hc.get<Games>(`game/getMMORPGgame/${gameName}`)
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
