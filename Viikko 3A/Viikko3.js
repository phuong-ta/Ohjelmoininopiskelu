// tehtävä 2
var t2 ;
function tehtävä2() {
    t2 = document.getElementById('te2').value;
    var test = t2.split("");
    var text = "";
    var i;
    for (i = 0; i < test.length; i++) {
        text += test[i] + "ö";
      }
    document.getElementById("result2").innerHTML = text;
}

// Tehtävä 3
var t3;
var b;
function tehtävä3() {
    t3 = document.getElementById('te3').value;
    var check = new RegExp('ö');
    var result;
        result= check.test(t3);
        if (result) {
            document.getElementById("result3").innerHTML = "on";
        } else {
            document.getElementById("result3").innerHTML = "ei ole";
        }
    }

// tehtävä 4
function tehtävä4() {
    var t4 = parseInt(document.getElementById('te4').value);
    var test = 1;
    console.log(t4);
    var i ;
    for (i =1; i <=t4; i++) {   
        test*=i;
    }
    document.getElementById("result4").innerHTML = test ;
}

// tehtävä 5
function tehtävä5()
{
  var t5 = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0){
      t5+='Hip Heijaa ';
    }else if(y%5 == 0){
      t5+='Heijaa ';
    }else if(y%3 == 0){
      t5+='Hip ';
    }else {
      t5+=y+' ';
    }
    document.getElementById('result5').innerHTML = t5;
  }
}

// tehtävä 6
function tehtävä6() {
    var t6 ='';
    for (let index = 1; index <= 10; index++) {
        t6+=index+'';
        
    }
    document.getElementById('result6').innerHTML= t6;
}

// tehtävä 7 

// tehtävä 8 
function tehtävä8(){
    
    var korotettava = document.getElementById('te8a').value;
    var potenssi = document.getElementById('te8b').value;
    var tulos = korotettava;
    for (let index = 0; index < potenssi; index++) {
        tulos*=korotettava;
    }
  document.getElementById('result8').innerHTML =  tulos ;
}

// tehtävä 9
function tehtävä9(){
    var num91 = parseInt(document.getElementById('te9a').value);
    var num92 = parseInt(document.getElementById('te9b').value);
    var num93 = parseInt(document.getElementById('te9c').value);
    var num94 = parseInt(document.getElementById('te9d').value);
    var num95 = parseInt(document.getElementById('te9e').value);
    var max = Math.max(num91, num92, num93,num94,num95);
    var min = Math.min(num91, num92, num93,num94,num95);
    document.getElementById('result9').innerHTML =  'suurin arvo on' +' ' + max+' ' + 'pienin arvo on' +' '+min ;
}

// tehtävä 10

// tehtävä 11
var numbers = []; 
function getSum(total, num) {
  return total + Math.round(num);
}
function tehtävä11() {
    var minnumber = parseInt(document.getElementById('te11a').value);
    var maxnumber = parseInt(document.getElementById('te11b').value);
  for (let index = minnumber; index <= maxnumber; index++) {
     numbers.push(index);
    var pari = numbers.filter(number =>number%2 ==0);
    var pariton = numbers.filter(number =>number%2 !==0);
    var parisum = pari.reduce(getSum, 0);
    var paritonsum = pariton.reduce(getSum, 0);
    }
  document.getElementById("result11").innerHTML = 
  'Parilliset numerot:' + ' '+ pari+' ' +'ja niiden summa:' +' ' + parisum + '<br>'+
  'Parittomat luvut:' + ' '+ pariton+' ' +'ja niiden summa:' +' ' + paritonsum ;
}
