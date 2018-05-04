import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

import { RoundWinnerComponent } from './components/round-winner/round-winner.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { TTFService } from './services/ttf.service';

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, RoundWinnerComponent, UserIconComponent, ScoreboardComponent, UserDetailComponent 
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
