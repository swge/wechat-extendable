import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundWinnerComponent } from './components/round-winner/round-winner.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeBoardComponent } from './components/homeboard/homeboard.component';
import { PlayerBoardComponent } from './components/playerboard/playerboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserIntroComponent } from './components/user-profile/profile-intro/profile-intro.component';
import { TTFService } from './services/ttf.service';
import { CircleBarComponent } from './components/circle-bar/circle-bar.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeBoardComponent,
    PlayerBoardComponent,
    UserProfileComponent,
    UserIntroComponent,
    RoundWinnerComponent, 
    UserIconComponent,
    ScoreboardComponent, 
    UserDetailComponent,
    CircleBarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TTFService ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule { }
