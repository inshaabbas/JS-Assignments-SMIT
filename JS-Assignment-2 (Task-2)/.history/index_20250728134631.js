var maths = prompt("what do yuo want to generate /n 1) Table Generator /")
var tableNumber = +prompt("Enter your number");
var tableLength = +prompt("Enter your table length"); 

document.writeln(`<div class="table">`)
document.writeln(`
  <h1 class="heading">
    <span>K</span><span>I</span><span>D</span><span>S</span>
    <span class="space"> </span>
    <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
  </h1>
`);
document.writeln(`<h2 class="heading-2">Table of ${tableNumber}</h2>`)
for(i=1; i <= tableLength; i++){
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
}
document.writeln(`</div>`)

var startNum = +prompt("Enter starting Number")