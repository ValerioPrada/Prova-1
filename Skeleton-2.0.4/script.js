<!-- PARTE IN JAVASCRIPT -->
/* Script per il quiz */

function controlla(){

/* Variabili generali */

var punteggio=0;
var commento=" ";

/* Variabili dal form*/

var r1=document.forms.quiz.r1.value;
var r2=document.forms.quiz.r2.value;
var r3=document.forms.quiz.r3.value;
var r4=document.forms.quiz.r4.value;
var r5=document.forms.quiz.r5.value;
var r6=document.forms.quiz.r6.value;
var r7=document.forms.quiz.r7.value;
var r8=document.forms.quiz.r8.value;
var r9=document.forms.quiz.r9.value;
var r10=document.forms.quiz.r10.value;

/*Controllo le risposte */

if(r1==2){
punteggio = punteggio + 1;
}

if(r2==0){
punteggio = punteggio + 1;
}

if(r3==0){
punteggio = punteggio + 1;
}

if(r4==0){
punteggio = punteggio + 1;
}

if(r5==1){
punteggio = punteggio + 1;
}

if(r6==2){
punteggio = punteggio + 1;
}

if(r7==0){
punteggio = punteggio + 1;
}

if(r8==0){
punteggio = punteggio + 1;
}

if(r9==2){
punteggio = punteggio + 1;
}

if(r10==1){
punteggio = punteggio + 1;
}



/* MOstro il punteggio*/

document.getElementById("punteggio").innerHTML="Punteggio= "+punteggio;
