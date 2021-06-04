import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { GamesComponent } from './games/games.component';
import { GamesdataComponent } from './gamesdata/gamesdata.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'games', component:GamesComponent},
  {path:'games/:id', component:GamesdataComponent},
  {path:'home', component:HomeComponent},
  {path:'data', component:DataComponent},

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
