

export class AnswerChecker{

    // constructor(){
    //     //this.result = [];
    //     this.redResponse = 0;
    //     this.yellowResponse = 0;
    //     this.emptyResponse = 0; 
    // }


   static checkAnswer(playerGuesses, taskColors){   
        let result = [];
        let playerGuessesArray = [];
        let taskColorsArray = [];
        let uniqueColors;
        let redResponse = 0;
        let yellowResponse = 0;
        let emptyResponse = 0; 

        playerGuesses.forEach(item => playerGuessesArray.push(item.name));
        taskColors.forEach(item => taskColorsArray.push(item.name));

        for (let item = 0; item < playerGuessesArray.length; item++) {

            uniqueColors = playerGuessesArray.filter(i=>i === playerGuessesArray[item]);
            
            if(playerGuessesArray[item] === taskColorsArray[item]){
                redResponse++;
            }

            else if (taskColorsArray.includes(playerGuessesArray[item])
            && playerGuessesArray[item] !== taskColorsArray[item]
            && uniqueColors.length === 1) {
                yellowResponse++;
            }

            else{
                emptyResponse++;
            }
        }
       result = [redResponse,yellowResponse,emptyResponse];
        
        return result; 
    }

  

}