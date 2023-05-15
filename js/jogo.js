var count = 0;
var a = false;
var b = false;
var c = false;
var d = false;

function erro() {
if (count < 6) {
count = count + 1
document.getElementById("forca").src ="images/"+count+".png";
  }
}



function win() {
  if (a && b && c && d) {
    setTimeout(() => {
     alert("Você ganhou, Parabéns!");
     location.reload(); }, 200);
  }
}

document.addEventListener('keypress',(event) => {
 var name = event.key;
 var code = event.code;
 
 if (count == 6) {
    alert("VOCÊ PERDEU, DESISTA!");
    location.reload();
  }
  
 if ( name == "j" || (name == "J")){
    document.getElementById("a").innerHTML="J";
    a = true;
    win();
 }
  else if ( name == "o" || (name == "O")){
    document.getElementById("b").innerHTML="O";
    b = true;
    win();
 }
  else if ( name == "a" || (name == "A")){
    document.getElementById("c").innerHTML="A";
    document.getElementById("f").innerHTML="A";
    c = true;
    win();
 }
  else if ( name == "n" || (name == "N")){
    document.getElementById("d").innerHTML="N";
    document.getElementById("e").innerHTML="N";
    d = true;
    win();
 } else {
  erro();
  }
}, false);
