import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private hc:HttpClient) { }


  // total games
  getGamesData():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical",
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }  

    })
  }



  getGameById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/game?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getShootingGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getShootingGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getSocialgGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=social",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getSocialGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=social?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getFightinggGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getFightingGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getRacingGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getRacingGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


  getSportsGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getSportsGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getMOBAGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=MOBA",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getMOBAGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=MOBA?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getCardGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=card",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getCardGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=card?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }

  getStrategyGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getStrategyGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


  getFantasyGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fantasy",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }


  getFantasyGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=fantasy?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


  getMMOGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmo",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getMMOGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmo?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }



  getActionGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=action",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }


  getActionGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=action?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }


  getMMORPGGames():Observable<Games[]>
  {
    return this.hc.get<Games[]>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg",
    {
      "headers":
      {
        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      }
    })
  }

  getMMORPGGamesById(id):Observable<Games>
  {

    let ID=id.toString()
    return this.hc.get<Games>("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg?id="+ID,
    {

      "headers":
      {

        "x-rapidapi-key": "9f6970e90cmsh75445f0710e28acp1a6671jsnc6184bbdcfb9",
	      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },

    }) 
  }
}
