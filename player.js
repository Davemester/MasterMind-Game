

export class Player {

    constructor(){

        this.guessList = [];
        this.attempts = 0;
        this.goodAnswers = 0;
        this.attemptCirlce = 0;
    }

    addColorToGuessList (color){
        this.guessList.push(color);
    }

    clearGuessList(){
        this.guessList = [];
    }

    resetGoodAnswers(){
        this.goodAnswers = 0;
    }

    resetAttempts(){
        this.attempts = 0;
    }

    resetAttemptCirlce(){
        this.attemptCirlce=0;
    }

    resetForNewRow(){
        this.guessList=[];
        this.attemptCirlce=0;
        this.goodAnswers=0;
    }
    
}