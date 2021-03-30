function btn1() {
    var kirjaimet = document.getElementById('input1').value;
    var isoKirjaimet = kirjaimet.toUpperCase() ;
    var kirjaimetArray = isoKirjaimet.split('');
    var piste =0;
    for (let index = 0; index < kirjaimetArray.length; index++) {
        switch (kirjaimetArray[index]) {
            case 'A':
            case 'E':
            case 'I':
            case 'N':
            case 'S':
            case 'T':
                piste ++;
                break;
            case 'O':
            case 'Ä':
            case 'K':
            case 'L':
                piste +=2;
                break;
            case 'U':
            case 'M':
                piste +=3;
                break;
            case 'Y':
            case 'H':
            case 'J':
            case 'P':
            case 'R':
            case 'V':
                piste +=4;
                break;
            case 'Ö':
            case 'D':
                piste +=7;
                break;
            case 'B':
            case'F':
            case 'G':
                piste +=8;
                break;
            case 'C':
                piste +=10;
                break;
            default:
                piste+=12;
                break;
        }
        document.getElementById('tulos1').innerHTML='Sanan pisteet ovat' + ' ' +piste;
    }
}

// tehtävä 2 

function btn2() {
    var lottonumerot =[];
    for (let index = 0; index < 7; index++) {
        lottonumerot[index]= Math.floor(Math.random()*40)+1;
    }
    lottonumerot.sort();
    document.getElementById('tulos2').innerHTML= lottonumerot;
}

// tehtävä 3

function btn3() {
    var table = document.getElementById('taulukko');
    var taulu = '<table border="1">';
    for (var riivi = 0, riivipituus = table.rows.length; riivi < riivipituus; riivi++) {
        taulu += '<tr> ';
        for (var sarake = 0, sarakekorkeus = table.rows[riivi].cells.length; sarake < sarakekorkeus; sarake++) {
            taulu += '<td>' + table.rows[riivi].cells[sarake].innerHTML + '</td>';
        }
        taulu += '</tr>';
    }
    taulu += '</table>';
    document.getElementById('tulos3').innerHTML = taulu;
}

// tehtävä 4

function btn4() {
    var numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    var colors = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    var randomnnumero1 = numbers[Math.floor(Math.random()*13)];
    var randomnnumero2 = numbers[Math.floor(Math.random()*13)];
    var randomnnumero3 = numbers[Math.floor(Math.random()*13)];
    var randomnnumero4 = numbers[Math.floor(Math.random()*13)];
    var randomcolor1 = colors[Math.floor(Math.random()*4)];
    var randomcolor2 = colors[Math.floor(Math.random()*4)];
    var randomcolor3 = colors[Math.floor(Math.random()*4)];
    var randomcolor4 = colors[Math.floor(Math.random()*4)];
    var tulos = [randomcolor1, randomnnumero1, randomcolor2, randomnnumero2, randomcolor3, randomnnumero3, randomcolor4, randomnnumero4];
    document.getElementById('tulos4').innerHTML = tulos;
}
