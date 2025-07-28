var tableNumber = +prompt("Enter your number");
var tableLength = +prompt("Enter your tabe length"); 

document.writeln(`<div class="table">`)
document.writeln(`<h1 class="heading">Table of ${tableNumber}</h2>`)
document.writeln(`<h2 class="heading">Table of ${tableNumber}</h2>`)
for(i=1; i <= tableLength; i++){
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
}
document.writeln(`</div>`)