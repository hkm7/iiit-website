var i = 0;
var j =0;
var txt = 'Under construction.';
var txt2= 'Please check back later.';
var speed = 50;
var speed = 50;
document.getElementById("typewr").innerHTML='';
document.getElementById("typewr2").innerHTML='';

function typeWriter(){
    if (i < txt.length) {
        document.getElementById("typewr").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function typeWriter2(){
    if (j < txt2.length) {
        document.getElementById("typewr2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}


function startFunction(){
    typeWriter();
    typeWriter2();
}