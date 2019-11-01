import {Color} from './color.js' 


export class ColorList{

    constructor(){
        this.colorList = 
        ['red','orange',
        'yellow','pink',
        'purple','blue',
        'green','grey'];

        this.taskColors = [];

    }

    createColor(color){
        let taskColor = new Color(color);
        
        return taskColor;
    }

    randomColor(colors){               
        let randNumber=Math.floor((Math.random()*colors.length));
        return colors[randNumber];
    }

    taskColorCreator(){
        
            let newArray = []
            while (newArray.length !== 4){
                let color = this.createColor(this.randomColor(this.colorList));
                this.taskColors.push(color);

                newArray=this.taskColors.filter((value, index, self) => {
                    return self.findIndex(v => v.name === value.name) === index;
                })
            }
            this.taskColors = newArray;
            return this.taskColors; //ez nem biztos hogy kelleni fog
           
    }
        
    

   
}

