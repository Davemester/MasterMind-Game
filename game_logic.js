import {BoardDisplay} from './board.js'
import {Player} from './player.js' 
import {ColorList} from './color_list.js'
import {AnswerChecker} from './answer_checker.js'
import {Color} from './color.js'
import {Game} from './game.js'

export class GameLogic {
    constructor(){
        this.startButton = document.querySelector('.start-button');
        this.row = 0;
        this.colorPicker = document.querySelector('.colorpicker');
        this.attemptRow= document.querySelector(`#guess-row${this.row}`);
        this.player = new Player();
        this.colorList = new ColorList();
    }

    setAttemptRow(row){
        this.attemptRow= document.querySelector(`#guess-row${row}`);  
    }

    clearButtonHandler () {
        if (!document.querySelector('.resultText') &&
        this.attemptRow.lastElementChild.children.length !== 4) {
            this.player.resetForNewRow();
        }

        BoardDisplay.clearCurrentAttempts(this.attemptRow);
    }

    handleColorChoosing (event) {
        if (this.player.guessList.length === 4){
            return;
        }

        let circle = this.attemptRow.children[this.player.attemptCirlce].firstElementChild;
        let attemptColor = new Color(event.target.id);
        this.player.addColorToGuessList(attemptColor);

        BoardDisplay.colorizeAttempt(circle,attemptColor);
        this.player.attemptCirlce++;
    }

    handleWrongAnswer() {
        this.player.resetForNewRow();
        this.player.attempts++;
        this.row++;
        console.log(this.player.attempts);
    }


    handleAnswerSubmitEvent () {
        if (this.player.guessList.length < 4 || document.querySelector('.resultText') ){
            return;
        }
  
        let result = AnswerChecker.checkAnswer(this.player.guessList,this.colorList.taskColors);
        BoardDisplay.showResponse(result,this.attemptRow);
        this.player.goodAnswers = result[0];
             
        if (this.player.goodAnswers != 4 ) {
            this.handleWrongAnswer()
        }
             
        if (this.player.goodAnswers === 4) {
            BoardDisplay.displayIsWin(true);
            this.startButton.onclick= Game.newGame;
            //this.startButton.setAttribute();  //ezzel majd vmit csinálni
            BoardDisplay.resetEventListener(this.colorPicker);
            /*  BoardDisplay.resetEventListener(this.startButton);
             this.startButton.setAttribute('isingame','false') */
        }
             
        if (this.player.attempts === 10) {
            BoardDisplay.displayIsWin(false);
            this.startButton.onclick= Game.newGame;
            BoardDisplay.resetEventListener(this.colorPicker);   
        }
    }

    setNewRowEventVars(){
        this.startButton.onclick='';
        this.player.resetForNewRow();
        this.player.resetAttempts(); 
    }
}