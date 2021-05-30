import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private hc:HttpClient) { }



  getGamesData():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games",
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },   

    })
  }



  getGameById(id):Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games/"+id,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


}
