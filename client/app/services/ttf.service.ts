import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../models/player';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TTFService {

    public roundWinners: any[];

    public finalScore: any[];

    public player: any;

    constructor(
        private httpClient: HttpClient,
        private messageService: MessageService
    ) {

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

    /** POST: add a new player to the server */
    // addPlayer (player: Player): Observable<Player> {
    //     return this.httpClient.post<Player>('this.playeresUrl', player, httpOptions).pipe(
    //     tap((player: Player) => this.log(`added player w/ id=${player.id}`)),
    //     catchError(this.handleError<Player>('addPlayer'))
    //     );
    // }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
    /** Log a PlayerService message with the MessageService */
    private log(message: string) {
        this.messageService.add('PlayerService: ' + message);
    }
}