import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamesdataComponent } from './gamesdata/gamesdata.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms';
import { DataComponent } from './data/data.component';
import { Games2Component } from './games2/games2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ActionComponent } from './action/action.component';
import { ShooterComponent } from './shooter/shooter.component';
import { RacingComponent } from './racing/racing.component';
import { SocialComponent } from './social/social.component';
import { CardComponent } from './card/card.component';
import { FightingComponent } from './fighting/fighting.component';
import { StrategyComponent } from './strategy/strategy.component';
import { MOBAComponent } from './moba/moba.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { MmorpgComponent } from './mmorpg/mmorpg.component';
import { MmoComponent } from './mmo/mmo.component';
import { SportsComponent } from './sports/sports.component';
import { ActiondataComponent } from './actiondata/actiondata.component';
import { ShootingdataComponent } from './shootingdata/shootingdata.component';
import { SocialdataComponent } from './socialdata/socialdata.component';
import { FightingdataComponent } from './fightingdata/fightingdata.component';
import { RacingdataComponent } from './racingdata/racingdata.component';
import { SportsdataComponent } from './sportsdata/sportsdata.component';
import { MobadataComponent } from './mobadata/mobadata.component';
import { CarddataComponent } from './carddata/carddata.component';
import { StrategydataComponent } from './strategydata/strategydata.component';
import { FantasydataComponent } from './fantasydata/fantasydata.component';
import { MmodataComponent } from './mmodata/mmodata.component';
import { MmorpgdataComponent } from './mmorpgdata/mmorpgdata.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { AllgamesdataComponent } from './allgamesdata/allgamesdata.component'
import { AuthorizationService } from './authorization.service';
import { LovedcartComponent } from './lovedcart/lovedcart.component';
import { CartgamedetailsComponent } from './cartgamedetails/cartgamedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GamesdataComponent,
    HomeComponent,
    FooterComponent,
    PagenotfoundComponent,
    DataComponent,
    Games2Component,
    ContactusComponent,
    ActionComponent,
    ShooterComponent,
    RacingComponent,
    SocialComponent,
    CardComponent,
    FightingComponent,
    StrategyComponent,
    MOBAComponent,
    FantasyComponent,
    MmorpgComponent,
    MmoComponent,
    SportsComponent,
    ActiondataComponent,
    ShootingdataComponent,
    SocialdataComponent,
    FightingdataComponent,
    RacingdataComponent,
    SportsdataComponent,
    MobadataComponent,
    CarddataComponent,
    StrategydataComponent,
    FantasydataComponent,
    MmodataComponent,
    MmorpgdataComponent,
    LoginComponent,
    RegisterComponent,
    AllgamesComponent,
    AllgamesdataComponent,
    LovedcartComponent,
    CartgamedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule, 
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
