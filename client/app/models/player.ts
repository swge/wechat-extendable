export class Player {
    id: number;
    name: string;
    nickName: string;
    image: string;
    questions: [
        {'label': 'a'; 'content': string; 'correct': boolean},
        {'label': 'b'; 'content': string; 'correct': boolean},
        {'label': 'c'; 'content': string; 'correct': boolean}
    ];
    correctQuestion: string;
}