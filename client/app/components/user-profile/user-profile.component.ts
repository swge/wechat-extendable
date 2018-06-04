import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';   
import { TTFService } from '../../services/ttf.service';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: [ './user-profile.component.scss' ]
})
export class UserProfileComponent implements OnInit, OnDestroy{
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
        let id = ++this.playerID;
        if(id < 5){
            this.router.navigateByUrl('playerboard/'+ id);
            this.ttfService.getPlayerById(id)
        }
        else{
            this.router.navigateByUrl('scoreboard');
        }  
        this.isChecked = false;
        this.notEnabled = true;
    }

    isClicked(events: any): void{
        events.currentTarget.classList.add('clicked');
    }

    ngOnDestroy(){
        this.ttfService.resetRoundWinners();
        this.ttfService.resetPlayers();
        this.loaded = false;
        console.log();
    }
}