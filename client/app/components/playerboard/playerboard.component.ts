import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class PlayerBoardComponent implements OnInit, OnDestroy{
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
        // this.ttfService.resetRoundWinners();
        // this.ttfService.resetPlayers();
        // this.loaded = false;
        this.playerID = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.ttfService.getPlayerById(this.playerID);
        let bArray: any=[];
        // Define a size array, this will be used to vary bubble sizes
        let sArray = [4,6,8,10];
    
        // Push the header width values to bArray
        for (let i = 0; i < $('.bubbles').width(); i++) {
            bArray.push(i);
        }
 
    // setInterval function used to create new bubble every 350 milliseconds
        setInterval(() => {

            // Get a random size, defined as variable so it can be used for both width and height
            let size = this.randomValue(sArray);
            // New bubble appeneded to div with it's size and left position being set inline
            // Left value is set through getting a random value from bArray
            $('.bubbles').append('<div class="individual-bubble" style="left: ' + this.randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

            // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
            // Callback function used to remove finsihed animations from the page
            $('.individual-bubble').animate({
                'bottom': '100%',
                'opacity': '-=0.7'
            }, 3000, function () {
                $(this).remove()
            }
            );


        }, 350);
    }

    randomValue(arr:any) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    public showAnswer(): void {
        this.ttfService.resetRoundWinners();
        this.ttfService.getRoundWinners();
        this.isChecked = true;
        this.notEnabled = false;
    }

    public nextQuestion(): void {
        // this.ttfService.resetRoundWinners();
        // this.ttfService.resetPlayers();
        // this.loaded = false;
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

    ngOnDestroy(){
        this.ttfService.resetRoundWinners();
        this.ttfService.resetPlayers();
        this.loaded = false;
        console.log();
    }
}