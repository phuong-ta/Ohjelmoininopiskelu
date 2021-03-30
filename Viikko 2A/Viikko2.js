// Tehtävä 1
var number1;
var number2;
var number3;

function tehtävä1() {
    number1 = document.getElementById('te1a').value;
    number2 = document.getElementById('te1b').value;
    number3 = document.getElementById('te1c').value;

    if (number1 > number2 && number1> number3 && number2>number3) {
        document.getElementById('tulos1').innerHTML = [number1, number2, number3];
    } else if (number1 > number2 && number1 > number2 && number3>number2) {
        document.getElementById('tulos1').innerHTML = [number1, number3,number2];
    } else if (number2 > number1 && number2>number3 && number1> number3) {
        document.getElementById('tulos1').innerHTML = [number2, number1,number3];
    }else if (number2 > number1 && number2>number3 && number3> number1) {
        document.getElementById('tulos1').innerHTML = [number2, number3,number1];
    }else if (number3 > number2 && number3>number1 && number2> number1) {
        document.getElementById('tulos1').innerHTML = [number3, number2,number1];
    } else{
        document.getElementById('tulos1').innerHTML = [number3, number1,number2];
    }
}

//Tehtävä 2
var num1;
var num2;
var num3;
var num4;
var num5;

function tehtävä2() {
    num1 = document.getElementById('te2a').value;
    num2 = document.getElementById('te2b').value;
    num3 = document.getElementById('te2c').value;
    num4 = document.getElementById('te2d').value;
    num5 = document.getElementById('te2e').value;


    var maxNum = Math.max(num1, num2, num3, num4, num5);
    document.getElementById("tulos2").innerHTML = maxNum;
}


//Tehtävä 3
var number;

function tehtävä3() {
    number = document.getElementById("te3a").value;

    if (number % 2 == 0){
        document.getElementById("tulos3").innerHTML = "Numero on parillinen";

    }else{
        document.getElementById("tulos3").innerHTML = "Numero on pariton";
    }
}

// Tehtävä 4
function tehtävä4() {
    var ikä = document.getElementById('te4').value;
    if (ikä <16) {
        document.getElementById("tulos4").innerHTML = "Voit ajaa polkupöyrä";
    } else if (ikä<18) {
        document.getElementById("tulos4").innerHTML = "Voit ajaa mopoa";
    } else{
        document.getElementById("tulos4").innerHTML = "Voit ajaa autoa";
    }
}

// tehtävä 5
function tehtävä5() {
    var language = document.getElementById('te5').value;
    if (language =='Englanti') {
        document.getElementById("tulos5").innerHTML = "Hello World";
    } else if (language == 'Espanja') {
        document.getElementById("tulos5").innerHTML = "Hola Mundo ";
    } else{
        document.getElementById("tulos5").innerHTML = "Hej världen";
    }

}
















