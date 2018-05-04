import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent {
    @Input()
    public user: any = {
        avatar: 'http://thirdwx.qlogo.cn/mmopen/m2BRRRIDoJqxuMu8Ec3gtHRxbKicbhkrTw3kic9mp7GzGH48PAkGbk87hAvA3yh3U6NNXho1OA1M8nicAqxzqJ3ogtt9gZQJEyp/132',
        name: 'Jerry Wang',
        score: 5
    };
}