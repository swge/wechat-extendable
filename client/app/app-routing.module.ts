import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const appRoutes: Routes = [
    { path: '', component: QuestionComponent},
    // { path: 'question', component: QuestionComponent},
    { path: 'scoreboard', component: ScoreboardComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
