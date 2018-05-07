import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'round-winner',
    templateUrl: './round-winner.component.html',
    styleUrls: [ './round-winner.component.scss' ]
})
export class RoundWinnerComponent implements OnInit {
    constructor(private ttfService: TTFService) {
        
    }

    ngOnInit(): void {
        // this.ttfService.getRoundWinners();
    }
}