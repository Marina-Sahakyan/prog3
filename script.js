var clickCount = 0;

function clickHandler(evt){

clickCount++;

console.log(evt);

var str = "Thanks for clicking " + clickCount;

this.innerText = str;

}

var p = document.getElementById("pElement");

p.addEventListener("click", clickHandler);

