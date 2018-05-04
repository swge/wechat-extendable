import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TTFService {

    public roundWinners: any[];

    public finalScore: any[];

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

    public getFinalScore(): void {
        this.httpClient.get('/ttf/final-score')
            .subscribe((data: any) => {
                this.finalScore = data;
            })
    }
}