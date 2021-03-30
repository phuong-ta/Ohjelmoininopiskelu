// tehtävä1
function btn1() {
    var num1 = document.getElementById('input1').value;
    if (num1>=0) {
        document.getElementById('result1').innerHTML = 'Luku on positiivinen';
    } else {
        document.getElementById('result1').innerHTML = 'Luku on negatiivinen';
    }
}

// Tehtävä2
function btn2() {
    var num2 = document.getElementById('input2').value;
    if (num2 == 1) {
        document.getElementById('result2').innerHTML = 'Maanantai';
    } else if (num2 ==2) {
        document.getElementById('result2').innerHTML = 'Tiistai';
    } else if (num2 == 3) {
        document.getElementById('result2').innerHTML = 'Keskiviikko';
    }else if (num2 == 4) {
        document.getElementById('result2').innerHTML = 'Torrtai';
    }else if (num2 == 5) {
        document.getElementById('result2').innerHTML = 'Perjantai';
    }else if (num2 == 6) {
        document.getElementById('result2').innerHTML = 'Lauantai';
    }else if (num2 == 7) {
        document.getElementById('result2').innerHTML = 'Suunnuntai';
    }
    else{
        document.getElementById('result2').innerHTML = 'Anna luku 1 - 7';
    }
}

// tehtävä 3
function btn3() {
    var num3 = document.getElementById('input3').value;
    if (num3% 4 == 0 && num3 % 100 !==0) {
        document.getElementById('result3').innerHTML = 'vuosi on karkausvuosi';
    }else if (num3 % 400 ==0) {
        document.getElementById('result3').innerHTML = 'vuosi on karkausvuosi';
    }else{
        document.getElementById('result3').innerHTML = 'vuosi ei ole karkausvuosi';
    }
}

// tehtävä 4
function btn4() {
    var num4a = document.getElementById('input4-1').value;
    var num4b = document.getElementById('input4-2').value;
    var num4c = document.getElementById('input4-3').value;
    var num4d = document.getElementById('input4-4').value;
    var num4e = document.getElementById('input4-5').value;
    var pase1 = parseInt(num4a);
    var pase2 = parseInt(num4b);
    var pase3 = parseInt(num4c);
    var pase4 = parseInt(num4d);
    var pase5 = parseInt(num4e);
    var summa = pase1 + pase2 + pase3 + pase4 + pase5;
    var keskiarvo = summa/5;
    document.getElementById('result4').innerHTML = 'Lukujen summa on: '+ ''+summa+'keskiarvo'+''+keskiarvo;
}


// tehtävä 5

function btn5() {
    var num5 = parseInt(document.getElementById("input5").value);

    var lause = "";

    for(var i = 1; i <=10; i++){
        lause += num5 + "*" + i + "=" + num5 * i +'<br>';
        document.getElementById("result5").innerHTML = lause;
    }
    
}