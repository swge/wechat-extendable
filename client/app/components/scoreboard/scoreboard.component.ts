import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';
import { Router } from '@angular/router';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [ './scoreboard.component.scss' ]
})
export class ScoreboardComponent implements OnInit {
    constructor(private ttfService: TTFService,
    private router: Router) {

    }

    ngOnInit() {
        this.ttfService.getFinalScore();
    }

    /**
     * randomQuestion
     */
    public randomQuestion() {
        this.router.navigateByUrl('playerboard/random');
    }
}