

function changetext() {
    document.getElementById('changemenu').innerHTML = "Choisir une catégorie de plantes";
    }
function starttext() {
    document.getElementById('changemenu').innerHTML = "Choisir...";
    }
// ---------------------- Adenium
/*  
adeniumnewtext est la fonction déclenchée par onmouseover
.speciesalocasia est la class à sélectionner pour changer le texte
Afficher la phrase "Cliquez sur l'image pour en savoir plus" 
Si l'écran fait moins de 900px, mettre le fontSize à 19 px
Si l'écran fait plus de 900px, laisser le fontSize d'origine (25px)

adeniumstarttext est la fonction déclenchée par onmouseout
.speciesalocasia est la class à sélectionner pour changer le texte
Afficher la phrase d'origine "Mes Adenium"
Si l'écran fait moins de 900px, mettre le fontSize à 25px
Si l'écran fait plus de 900px, laisser le fontSize d'origine (30px) 

À écrire en utilisant les conditions if et else
*/
function adeniumnewtext() {
    document.querySelector('.speciesadenium').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var adenium = document.querySelector(".speciesadenium");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var adenium = document.querySelector(".speciesadenium"); 
            adenium.style.fontSize = "25px";
            adenium.style.transition = "300ms";
    }
    else { 
        var adenium = document.querySelector(".speciesadenium");
            adenium.style.fontSize = "19px";
            adenium.style.transition = "0s";
    }  
}
function adeniumstarttext() {
    document.querySelector('.speciesadenium').innerHTML = "Mes Adenium";
        var adenium = document.querySelector(".speciesadenium");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var adenium = document.querySelector(".speciesadenium");
            adenium.style.fontSize = "30px";
            adenium.style.transition = "300ms";
    } 
    else { 
        var adenium = document.querySelector(".speciesadenium");
            adenium.style.fontSize = "25px";
            adenium.style.transition = "0s"; 
    } 
}
// ----------------------- Alocasia
/*  
alocasianewtext est la fonction déclenchée par onmouseover
.speciesalocasia est la class à sélectionner pour changer le texte
Afficher la phrase "Cliquez sur l'image pour en savoir plus" 
Si l'écran fait moins de 900px, mettre le fontSize à 19 px
Si l'écran fait plus de 900px, laisser le fontSize d'origine (25px)

alocasiastarttext est la fonction déclenchée par onmouseout
.speciesalocasia est la class à sélectionner pour changer le texte
Afficher la phrase d'origine "Mes Alocasia"
Si l'écran fait moins de 900px, mettre le fontSize à 25px
Si l'écran fait plus de 900px, laisser le fontSize d'origine (30px)

À écrire en utilisant les conditions if et else if
*/
function alocasianewtext() {
    document.querySelector('.speciesalocasia').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var alocasia = document.querySelector(".speciesalocasia");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var alocasia = document.querySelector(".speciesalocasia");
            alocasia.style.fontSize = "25px";
            alocasia.style.transition = "300ms";
    }
    else if (window.matchMedia("(max-width: 900px)").matches){
            alocasia.style.fontSize = "19px";
            alocasia.style.transition = "0s";
    }
}
function alocasiastarttext() {
    document.querySelector('.speciesalocasia').innerHTML = "Mes Alocasia";
        var alocasia = document.querySelector(".speciesalocasia");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var alocasia = document.querySelector(".speciesalocasia");  
            alocasia.style.fontSize = "30px";
            alocasia.style.transition = "300ms";
    } 
    else if (window.matchMedia("(max-width: 900px)").matches){
            alocasia.style.fontSize = "25px";
            alocasia.style.transition = "0s";
    }
}
// ----------------------- Aloe
/* Pareil mais rien qu'avec if */
function aloenewtext() {
    document.querySelector('.speciesaloe').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var aloe = document.querySelector(".speciesaloe");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var aloe = document.querySelector(".speciesaloe");
            aloe.style.fontSize = "25px";
            aloe.style.transition = "300ms";
    }
    if (window.matchMedia("(max-width: 900px)").matches){
            aloe.style.fontSize = "19px";
            aloe.style.transition = "0s";
    }
}
function aloestarttext() {
    document.querySelector('.speciesaloe').innerHTML = "Mes Aloe";
        var aloe = document.querySelector(".speciesaloe");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var aloe = document.querySelector(".speciesaloe");  
            aloe.style.fontSize = "30px";
            aloe.style.transition = "300ms";
    } 
    if (window.matchMedia("(max-width: 900px)").matches){
            aloe.style.fontSize = "25px";
            aloe.style.transition = "0s";
    }
}
// ----------------------- Broméliacées
function bromeliaceesnewtext() {
    document.querySelector('.speciesbromeliacees').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var bromeliacees = document.querySelector(".speciesbromeliacees");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var bromeliacees = document.querySelector(".speciesbromeliacees");
            bromeliacees.style.fontSize = "25px";
            bromeliacees.style.transition = "300ms";
    }
    if (window.matchMedia("(max-width: 900px)").matches){
            bromeliacees.style.fontSize = "19px";
            bromeliacees.style.transition = "0s";
    }
}
function bromeliaceesstarttext() {
    document.querySelector('.speciesbromeliacees').innerHTML = "Mes Bromeliacees";
        var bromeliacees = document.querySelector(".speciesbromeliacees");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var bromeliacees = document.querySelector(".speciesbromeliacees");  
            bromeliacees.style.fontSize = "30px";
            bromeliacees.style.transition = "300ms";
    } 
    if (window.matchMedia("(max-width: 900px)").matches){
            bromeliacees.style.fontSize = "25px";
            bromeliacees.style.transition = "0s";
    }
}
// ----------------------- Cactus
function cactusnewtext() {
    document.querySelector('.speciescactus').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var cactus = document.querySelector(".speciescactus");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var cactus = document.querySelector(".speciescactus");
            cactus.style.fontSize = "25px";
            cactus.style.transition = "300ms";
    }
    if (window.matchMedia("(max-width: 900px)").matches){
            cactus.style.fontSize = "19px";
            cactus.style.transition = "0s";
    }
}
function cactustarttext() {
    document.querySelector('.speciescactus').innerHTML = "Mes Cactus";
        var cactus = document.querySelector(".speciescactus");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var cactus = document.querySelector(".speciescactus");  
            cactus.style.fontSize = "30px";
            cactus.style.transition = "300ms";
    } 
    if (window.matchMedia("(max-width: 900px)").matches){
            cactus.style.fontSize = "25px";
            cactus.style.transition = "0s";
    }
}
// ----------------------- Cactus suspendus
function cactussuspendednewtext() {
    document.querySelector('.speciescactussuspended').innerHTML = "Cliquez sur l'image pour en savoir plus";
        var cactussuspended = document.querySelector(".speciescactussuspended");

    if (window.matchMedia("(min-width: 900px)").matches){  
        var cactussuspended = document.querySelector(".speciescactussuspended");
            cactussuspended.style.fontSize = "25px";
            cactussuspended.style.transition = "300ms";
    }
    if (window.matchMedia("(max-width: 900px)").matches){
            cactussuspended.style.fontSize = "19px";
            cactussuspended.style.transition = "0s";
    }
}
function cactussuspendedtarttext() {
    document.querySelector('.speciescactussuspended').innerHTML = "Mes Cactus suspendus";
        var cactussuspended = document.querySelector(".speciescactussuspended");

    if (window.matchMedia("(min-width: 900px)").matches){ 
        var cactussuspended = document.querySelector(".speciescactussuspended");  
            cactussuspended.style.fontSize = "30px";
            cactussuspended.style.transition = "300ms";
    } 
    if (window.matchMedia("(max-width: 900px)").matches){
            cactussuspended.style.fontSize = "25px";
            cactussuspended.style.transition = "0s";
    }
}
