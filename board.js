
export class BoardDisplay {

    /* constructor(){

    } */

    static colorizeTaskColors(taskColors){

        /**
         * @param:array of colors
         */

        let taskCircle;
        for(let i=0;i<4;i++ ){
            taskCircle=document.getElementById(`answer${i}`);  
            taskCircle.style.background=taskColors[i].name;
        }
    }

    static colorizeAttempt(circle,color){
           
        circle.style.background=color.name;    
    }

    static showResponse(result,row){
        let elem;
        if (result[0]>0) {
             for(let i=0;i<result[0];i++ ){
                elem= document.createElement('div');
                elem.style.background='red';
                row.lastElementChild.append(elem);
             }
         }

        if (result[1]>0) {
             for(let i=0;i<result[1];i++ ){
                 elem= document.createElement('div');
                 elem.style.background='yellow';
                 row.lastElementChild.append(elem);
              }
         }

        if (result[2]>0) {

             for(let i=0;i<result[2];i++ ){
                 elem= document.createElement('div');
                 row.lastElementChild.append(elem);
              }
         }
        }


    static displayNewGameTable(){
        let displayRow;
        document.querySelector('.result-container').innerHTML='';

        for (let r=0;r<10;r++) {

            displayRow= document.querySelector(`#guess-row${r}`);

            for (let i=0;i<displayRow.children.length;i++) {
                if (i<4) {
                displayRow.children[i].firstElementChild.style.background='none';
                } else {
                    displayRow.children[i].innerHTML='';
                }} 
        }
    } 

    static clearCurrentAttempts(attemptRow) {

        for(let i=0;i<4;i++){   
            attemptRow.children[i].firstElementChild.style.background='none';
        } 
    }

    static displayIsWin(isWin){
        
        let result = isWin ? 'Nyertél!' : 'Vesztettél!';
        document.querySelector('.result-container').innerHTML=`<h2 class="resultText">${result}</h2>`;
        document.querySelector('.start-button').textContent='New Game';
        document.querySelector('.answer').style.visibility='visible';
    }

    static resetEventListener(element){
        let el = element;     /* document.querySelector('.colorpicker'); */
        let elClone = el.cloneNode(true);   

        el.parentNode.replaceChild(elClone, el);
    }
}