import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { ActiondataComponent } from './actiondata/actiondata.component';
import { ShootingdataComponent } from './admin/shootingdata/shootingdata.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { AllgamesdataComponent } from './allgamesdata/allgamesdata.component';
import { CardComponent } from './card/card.component';
import { CarddataComponent } from './carddata/carddata.component';
import { CartgamedetailsComponent } from './cartgamedetails/cartgamedetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasydataComponent } from './fantasydata/fantasydata.component';
import { FightingComponent } from './fighting/fighting.component';
import { FightingdataComponent } from './fightingdata/fightingdata.component';
import { GamesComponent } from './games/games.component';
import { GamesdataComponent } from './gamesdata/gamesdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LovedcartComponent } from './lovedcart/lovedcart.component';
import { MmoComponent } from './mmo/mmo.component';
import { MmodataComponent } from './mmodata/mmodata.component';
import { MmorpgComponent } from './mmorpg/mmorpg.component';
import { MmorpgdataComponent } from './mmorpgdata/mmorpgdata.component';
import { MobadataComponent } from './mobadata/mobadata.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RacingComponent } from './racing/racing.component';
import { RacingdataComponent } from './racingdata/racingdata.component';
import { RegisterComponent } from './register/register.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SocialdataComponent } from './socialdata/socialdata.component';
import { SportsComponent } from './sports/sports.component';
import { SportsdataComponent } from './sportsdata/sportsdata.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StrategydataComponent } from './strategydata/strategydata.component';

const routes: Routes = [
  {path:'games', component:GamesComponent},
  {path:'games/:username', component:GamesComponent,children:
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
    {path:'allGames', component:AllgamesComponent},
    {path:'lovedGames', component:LovedcartComponent},
    {path:'', redirectTo:'action', pathMatch:'full'} 

  ]},
  {path:'games/:id', component:GamesdataComponent},
  {path:"shooter/:gameName", component:ShootingdataComponent},
  {path:"action/:gameName", component:ActiondataComponent},
  {path:"card/:gameName", component:CarddataComponent},
  {path:"fantasy/:gameName", component:FantasydataComponent},
  {path:"fighting/:gameName", component:FightingdataComponent},
  {path:"mmorpg/:gameName", component:MmorpgdataComponent},
  {path:"mmo/:gameName", component:MmodataComponent},
  {path:"moba/:gameName", component:MobadataComponent},  
  {path:"social/:gameName", component:SocialdataComponent},  
  {path:"sports/:gameName", component:SportsdataComponent},  
  {path:"strategy/:gameName", component:StrategydataComponent},  
  {path:"racing/:gameName", component:RacingdataComponent}, 
  {path:"allGames/:gameName", component:AllgamesdataComponent},  
  {path:'lovedGames/:gameName', component:CartgamedetailsComponent},

  {path:'home', component:HomeComponent},
  {path:'data', component:DataComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'admin/:username', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
