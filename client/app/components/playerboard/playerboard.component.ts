import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';   
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'player-board',
    templateUrl: './playerboard.component.html',
    styleUrls: [ './playerboard.component.scss' ]
})
export class PlayerBoardComponent implements OnInit{
    isChecked: boolean = false;
    notEnabled: boolean = true;
    playerID: number = 0;

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
            // trick the Router into believing it's last link wasn't previously loaded
            this.router.navigated = false;
            // if you need to scroll back to top, here is the right place
            window.scrollTo(0, 0);
            }
        });

    }

    ngOnInit(){
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
        this.ttfService.resetRoundWinners();
        let id = ++this.playerID;
        if(id < 6){
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