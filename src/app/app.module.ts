import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
import { Games2Component } from './games2/games2.component'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
