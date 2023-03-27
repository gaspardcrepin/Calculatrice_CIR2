console.log("Gaspard's log test")

class BaseCalculator {
    constructor() { // Constructeur avec "prec" une liste pour revenir en arrière
        this.prec=[];
    }

    printNumber(number){ // Affichage du calcul sur le côté gauche de la calculatrice
        console.log(number);
        // Zone de calcule avec résultat
        let element = document.getElementById("span-calcul");
        element.textContent=element.textContent+number;
        // Zone d'affichage
        let element_above = document.getElementById("left-part");
        element_above.textContent=element_above.textContent+number;
    }

    erase_single(){ // On efface un à un les caractères
        console.log("erase_single")
        let element = document.getElementById("span-calcul");
        element.textContent=element.textContent.slice(0, -1);
    
        let element_above = document.getElementById("left-part");
        element_above.textContent=element_above.textContent.slice(0, -1);
    }
    
    result(){ // On affiche les résultats
        let element = document.getElementById("span-calcul");
        let element_affichage = document.getElementById("result");
        try { // On évite les erreurs 
            let result = eval(element.textContent); // On utilise la fonction "eval"
            element_affichage.textContent = result;

            this.prec.push(element.textContent); // On met le calcul dans notre liste prec pour revenir
                                                // en arrière
        }
        catch(err){
            element_affichage.textContent = "Error"; // Affichage de l'erreur dans la zone de résultat
        }
        console.log(result);
    }
    
    erase(){ // Suppression de tout le calcul et résultat
        console.log("erase")
        let element = document.getElementById("span-calcul");
        element.textContent=element.textContent = "";
    
        let element_above = document.getElementById("left-part");
        element_above.textContent=element_above.textContent = "";

        let element_affichage = document.getElementById("result");
        element_affichage.textContent = ""
    }

    precedent(){ // On peut revenir au dernier calcul effectué
        console.log("precedent");
        if (this.prec.length != 0){
            let new_prec = this.prec.pop();
            console.log(new_prec);
            document.getElementById("left-part").textContent = new_prec;
            document.getElementById("span-calcul").textContent = new_prec;
        }
    }
}

let baseCalculator = new BaseCalculator();