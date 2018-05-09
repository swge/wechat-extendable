import { Component, OnInit } from '@angular/core';
import { TTFService } from '../../services/ttf.service';

@Component({
    selector: 'round-winner',
    templateUrl: './round-winner.component.html',
    styleUrls: [ './round-winner.component.scss' ]
})
export class RoundWinnerComponent implements OnInit {
    constructor(private ttfService: TTFService) {
        
    }

    ngOnInit(): void {
        // this.ttfService.getRoundWinners();
        // this.ttfService.roundWinners = [
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Jerry Wang'
        //     },
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Mason Liu'
        //     },
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Mason Liu'
        //     },
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Mason Liu'
        //     },
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Mason Liu'
        //     },
        //     {
        //         avatarUrl: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        //         name: 'Mason Liu'
        //     }];
    }
}