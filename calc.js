console.log("Gaspard's log test")

class BaseCalculator {
    constructor() {
        
    }

    printNumber(number){
        console.log(number);
        let element = document.getElementById("span-calcul");
        element.textContent=element.textContent+number;
    
        let element_above = document.getElementById("left-part");
        element_above.textContent=element_above.textContent+number;
    }
    
    result(){
        let element = document.getElementById("span-calcul");
        let result = eval(element.textContent);
    
        let element_affichage = document.getElementById("result");
        element_affichage.textContent = result
        console.log(result);
    }
    
    erase(){
        console.log("erase")
        let element = document.getElementById("span-calcul");
        element.textContent=element.textContent.slice(0, element.textContent.length - 1);
    
        let element_above = document.getElementById("left-part");
        element_above.textContent=element_above.textContent.slice(0, element_above.textContent.length - 1);
    }
}

let baseCalculator = new BaseCalculator();