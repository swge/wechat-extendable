import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TTFService {

    public roundWinners: any[];

    public finalScore: any[];

    public player: any;

    constructor(private httpClient: HttpClient) {

    }

    public getRoundWinners(): void {
        this.httpClient.get('/ttf/round-winners')
            .subscribe((data: any) => {
                this.roundWinners = data;
            })
    }

    public resetRoundWinners(): void {
        this.roundWinners = null;
    }

    public resetPlayers(): void {
        this.player = null;
    }

    public getFinalScore(): void {
        this.httpClient.get('/ttf/final-score')
            .subscribe((data: any) => {
                this.finalScore = data;
            })
    }

    public getPlayerById(id: number): void {
        this.httpClient.get('/questions/'+ id)
            .subscribe((data: any) => {
                this.player = data;
            })
    }

    /**
     * getRandomPlayer
     */
    public getRandomPlayer() {
        this.httpClient.get('/random')
            .subscribe((data: any) => {
                this.player = data;
            })
    }

    /**
     * getNumOfPlayers
     */
    public getNumOfPlayers() {
        return this.httpClient.get('/ttf/num');
    }
}