import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [ './scoreboard.component.scss' ]
})
export class ScoreboardComponent implements OnInit {
    constructor(private ttfService: TTFService) {

    }

    ngOnInit() {
        this.ttfService.getFinalScore();
        this.ttfService.finalScore = [
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            },
            {
                avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
                name: 'Jerry Wang',
                score: 5
            }];
    }
}