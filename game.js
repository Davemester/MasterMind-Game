import {RowEvent} from './row_event.js'
import {BoardDisplay} from './board.js'


export class Game {
   
    

    static newGame(){
        let row = new RowEvent();
        
        document.querySelector('.answer').style.visibility='hidden';
        let colors = row.logic.colorList.taskColorCreator(); 
        BoardDisplay.displayNewGameTable();
        BoardDisplay.colorizeTaskColors(colors);
        row.rowEvent(); 
    }
}



document.getElementById('start').onclick = Game.newGame;

 