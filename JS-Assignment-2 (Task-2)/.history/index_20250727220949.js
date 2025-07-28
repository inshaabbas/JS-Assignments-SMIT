var tableNumber = +prompt("Enter your number");
var tableLength = +prompt("Enter your tabe length"); 

document.writeln(`<div class="table">`)
doc
for(i=1; i <= tableLength; i++){
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
}
document.writeln(`</div>`)