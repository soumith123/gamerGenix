import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { CardComponent } from './card/card.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FightingComponent } from './fighting/fighting.component';
import { GamesComponent } from './games/games.component';
import { GamesdataComponent } from './gamesdata/gamesdata.component';
import { HomeComponent } from './home/home.component';
import { MmoComponent } from './mmo/mmo.component';
import { MmorpgComponent } from './mmorpg/mmorpg.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RacingComponent } from './racing/racing.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { StrategyComponent } from './strategy/strategy.component';

const routes: Routes = [
  {path:'games', component:GamesComponent,children:
  [
    {path:'action', component:ActionComponent},
    {path:'card', component:CardComponent},
    {path:'fantasy', component:FantasyComponent},
    {path:'fighting', component:FightingComponent},
    {path:'mmorpg', component:MmorpgComponent},
    {path:'mmo', component:MmoComponent},
    {path:'moba', component:CardComponent},
    {path:'shooter', component:ShooterComponent},
    {path:'social', component:SocialComponent},
    {path:'sports', component:SportsComponent},
    {path:'strategy', component:StrategyComponent},
    {path:'racing', component:RacingComponent},
    {path:'', redirectTo:'action', pathMatch:'full'} 

  ]},
  {path:'games/:id', component:GamesdataComponent},
  {path:'home', component:HomeComponent},
  {path:'data', component:DataComponent},
  {path:'contactus', component:ContactusComponent},

  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
