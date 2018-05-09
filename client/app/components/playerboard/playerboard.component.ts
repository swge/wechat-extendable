import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'player-board',
    templateUrl: './playerboard.component.html',
    styleUrls: [ './playerboard.component.scss' ]
})
export class PlayerBoardComponent implements OnInit{
    // @Input() isChecked: boolean;
    // constructor(
    //     private ttfService: TTFService
    // ) {}
    isChecked: boolean = false;
    playerID: number = 0;
    constructor(
        private router: Router,
        private ttfService: TTFService
    ) {}

    ngOnInit(){
        this.ttfService.getPlayerById(this.playerID);
    }
    public showAnswer(): void {
        this.ttfService.getRoundWinners();
        this.isChecked = true;
    }

    public nextQuestion(): void {
        this.ttfService.resetRoundWinners();
        this.isChecked = false;
        if(this.playerID < 5){
            this.ttfService.getPlayerById(++this.playerID);
        }
        else{
            this.router.navigateByUrl('scoreboard');
        }  
    }
}