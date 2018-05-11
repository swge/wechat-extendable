import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';   
import { TTFService } from '../../services/ttf.service';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
    selector: 'player-board',
    templateUrl: './playerboard.component.html',
    styleUrls: [ './playerboard.component.scss' ]
})
export class PlayerBoardComponent implements OnInit{
    isChecked: boolean = false;
    notEnabled: boolean = true;
    playerID: number = 0;
    loaded: boolean = false;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private location: Location,
        private ttfService: TTFService
    ) {
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
        }

        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                this.loaded = false;
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });

    }

    ngOnInit(){
        this.loaded = false;
        this.playerID = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.ttfService.getPlayerById(this.playerID);
    }
    public showAnswer(): void {
        this.ttfService.resetRoundWinners();
        this.ttfService.getRoundWinners();
        this.isChecked = true;
        this.notEnabled = false;
    }

    public nextQuestion(): void {
        // $('#palyer-image').attr('src', '');
        // $('.question-wrapper').css('display', 'none');
        // $('.loading-holder').css('display', 'block');
        this.ttfService.resetRoundWinners();
        // this.loaded = false;
        let id = ++this.playerID;
        if(id < 5){
            this.router.navigateByUrl('playerboard/'+ id);
            this.ttfService.getPlayerById(id);
        }
        else{
            this.router.navigateByUrl('scoreboard');
        }  
        this.isChecked = false;
        this.notEnabled = true;
    }

    public goBack(): void {
        this.location.back();
    }
}