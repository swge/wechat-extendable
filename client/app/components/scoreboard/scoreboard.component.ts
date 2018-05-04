import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [ './scoreboard.component.scss' ]
})
export class ScoreboardComponent implements OnInit {
    constructor(private ttfService: TTFService) {

    }

    ngOnInit() {
        this.ttfService.getFinalScore();
    }
}