import {GameLogic} from './game_logic.js'

export class RowEvent {
    constructor(){
        this.logic = new GameLogic();
    }

    rowEvent(){
        this.logic.setNewRowEventVars();
        
        this.logic.colorPicker.addEventListener('click',(event)=>{  
            event.preventDefault();
            this.logic.setAttemptRow(this.logic.row);
  
            if(event.target.className ==='color-chose'){
                this.logic.handleColorChoosing(event);
            }
            
            //clear button logic
            if(event.target.className ==='clear-button'){
                this.logic.clearButtonHandler();
            }
           
            //submit button logic
            if(event.target.className ==='submit-button' ){
                this.logic.handleAnswerSubmitEvent ();
            }
        }); 
    }
}