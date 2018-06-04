import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PlayerBoardComponent } from './components/playerboard/playerboard.component';
import { HomeBoardComponent } from './components/homeboard/homeboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserIntroComponent } from './components/user-profile/profile-intro/profile-intro.component'

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'profile/:name', component: UserProfileComponent},
    { path: 'home', component: HomeBoardComponent},
    { path: 'playerboard/:id', component: PlayerBoardComponent},
    { path: 'scoreboard', component: ScoreboardComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
