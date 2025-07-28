var tableNumber = +prompt("Enter your number");
var tableLength = +prompt("Enter your tabe length"); 

document.writeln(`<div class="table">`)
document.writeln(`<h2 class>Table of ${tableNumber}</h2>`)
for(i=1; i <= tableLength; i++){
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
}
document.writeln(`</div>`)