import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'homeboard',
    templateUrl: './homeboard.component.html',
    styleUrls: [ './homeboard.component.scss' ]
})
export class HomeBoardComponent implements OnInit {
    constructor(private ttfService: TTFService) {}

    ngOnInit() {
    }
}