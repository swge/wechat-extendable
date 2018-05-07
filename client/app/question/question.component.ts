
import { Component } from '@angular/core';
import { TTFService } from '../services/ttf.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.scss' ]
})
export class QuestionComponent {
    // questions: any = [
    //     { id: 1, name: 'Liu, Mason', img: '../assets/img/bg/bg-statis.jpg', content: 'liudfsfsfwsfwsf' },
    //     { id: 2, name: 'Narco', img: '../assets/img/bg/bg-statis.jpg', content: '2liudfsfsfwsfwsf'},
    //     { id: 3, name: 'Bombasto', img: '../assets/img/bg/bg-statis.jpg', content: '3liudfsfsfwsfwsf'  },
    //     { id: 4, name: 'Celeritas', img: '../assets/img/bg/bg-statis.jpg', content: '4liudfsfsfwsfwsf'  },
    //     { id: 5, name: 'Magneta', img: '../assets/img/bg/bg-statis.jpg', content: '5liudfsfsfwsfwsf'  },
    //     { id: 6, name: 'RubberMan', img: '../assets/img/bg/bg-statis.jpg', content: '6liudfsfsfwsfwsf'  },
    // ];
    image: any = '../assets/img/bg/bg-story.png';
    questions: any = [
        { id: 1, content: 'Tell me the 3 best things about you.' },
        { id: 2, content: 'On a scale of 1-10, how strict are/were your parents'},
        { id: 3, content: 'Which would you pick: being world-class attractive, a genius or famous for doing something great'  },
    ];

    constructor(private ttfService: TTFService) {

    }

    public showAnswer(): void {
        this.ttfService.getRoundWinners();
    }

    public nextQuestion(): void {
        this.ttfService.resetRoundWinners();
    }
}