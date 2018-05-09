import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { QuestionComponent } from './question/question.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PlayerBoardComponent } from './components/playerboard/playerboard.component';
import { HomeBoardComponent } from './components/homeboard/homeboard.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeBoardComponent},
    { path: 'playerboard', component: PlayerBoardComponent},
    { path: 'scoreboard', component: ScoreboardComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
