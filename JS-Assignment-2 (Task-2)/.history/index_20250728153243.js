// var maths = prompt("What do you want to generate \n 1) Table Generator \n 2) Forward Counting Generator \n 3) Backward Counting Generator");

// var tableNumber = +prompt("Enter your number");
// var tableLength = +prompt("Enter your table length"); 

// document.writeln(`<div class="table">`)
// document.writeln(`
//   <h1 class="heading">
//     <span>K</span><span>I</span><span>D</span><span>S</span>
//     <span class="space"> </span>
//     <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
//   </h1>
// `);
// document.writeln(`<h2 class="heading-2">Table of ${tableNumber}</h2>`)
// for(i=1; i <= tableLength; i++){
//     document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
// }
// document.writeln(`</div>`)

// var startNum = +prompt("Enter starting Number");
// var endNum = +prompt("Enter Ending Number");

// document.writeln(`<div class="forward-counting">`)
// document.writeln(`
//   <h1 class="heading-forward">
//     <span>K</span><span>I</span><span>D</span><span>S</span>
//     <span class="space"> </span>
//     <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
//   </h1>
// `);
// document.writeln(`<h2 class="heading-forward-2">Forward Counting of ${startNum} - ${endNum}</h2>`)
// for(i= startNum; i <= endNum; i++){
//     document.writeln(`<div class="count">${i} , </div>`)
// }
// document.writeln(`</div>`)

// var startNum = +prompt("Enter starting Number");
// var endNum = +prompt("Enter Ending Number");

// document.writeln(`<div class="backward-counting">`)
// document.writeln(`
//   <h1 class="heading-backward">
//     <span>K</span><span>I</span><span>D</span><span>S</span>
//     <span class="space"> </span>
//     <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
//   </h1>
// `);
// document.writeln(`<h2 class="heading-backward-2">Backward Counting of ${startNum} - ${endNum}</h2>`)
// for(i= startNum; i >= endNum; i--){
//     document.writeln(`<div class="count-back">${i} , </div>`)
// }
// document.writeln(`</div>`)


var maths = prompt("What do you want to generate? \n1) Table Generator \n2) Forward Counting Generator \n3) Backward Counting Generator");

if (maths === "1") {
  var tableNumber = +prompt("Enter your number");
  var tableLength = +prompt("Enter your table length");

  document.writeln(`<div class="table">`);
  document.writeln(`
    <h1 class="heading">
      <span>K</span><span>I</span><span>D</span><span>S</span>
      <span class="space"> </span>
      <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
    </h1>
  `);
  document.writeln(`<h2 class="heading-2">Table of ${tableNumber}</h2>`);
  for (let i = 1; i <= tableLength; i++) {
    document.writeln(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
  }
  document.writeln(`</div>`);

} else if (maths === "2") {
  var startNum = +prompt("Enter starting number");
  var endNum = +prompt("Enter ending number");

  document.writeln(`<div class="forward-counting">`);
  document.writeln(`
    <h1 class="heading-forward">
      <span>K</span><span>I</span><span>D</span><span>S</span>
      <span class="space"> </span>
      <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
    </h1>
  `);
  document.writeln(`<h2 class="heading-forward-2">Forward Counting of ${startNum} - ${endNum}</h2>`);
  for (let i = startNum; i <= endNum; i++) {
    document.writeln(`<div class="count">${i} , </div>`);
  }
  document.writeln(`</div>`);

} else if (maths === "3") {
  var startNum = +prompt("Enter starting number");
  var endNum = +prompt("Enter ending number");

  document.writeln(`<div class="backward-counting">`);
  document.writeln(`
    <h1 class="heading-backward">
      <span>K</span><span>I</span><span>D</span><span>S</span>
      <span>S</span><span>O</span><span>L</span><span>U</span><span>T</span><span>I</span><span>O</span><span>N</span>
    </h1>
  `);
  document.writeln(`<h2 class="heading-backward-2">Backward Counting of ${startNum} - ${endNum}</h2>`);
  for (let i = startNum; i >= endNum; i--) {
    document.writeln(`<div class="count-back">${i} , </div>`);
  }
  document.writeln(`</div>`);

} else {
  alert("Invalid input! Please refresh and choose 1, 2, or 3.");
}
