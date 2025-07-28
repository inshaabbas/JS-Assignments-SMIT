var maths = prompt("What do you want to generate? \n1) Table Generator \n2) Forward Counting Generator \n3) Backward Counting Generator");

if (maths === "1") {
  var tableNumber = +prompt("Enter your table number");
  var tableLength = +prompt("Enter your table length");

  document.writeln(`<div class="table">`);

document.writeln(`
  <div class="image-row">
    <img src="./Assets/bg-img-1.png" alt="Kids Smiling" class="kids-img-top">
    <img src="./Assets/bg-2.png" alt="Kids Studying" class="kids-img-bottom">
    <img src="https://cdn.pixabay.com/photo/2016/03/27/22/16/kids-1283786_960_720.png" class="kids-img" alt="Kid 3">
  </div>
`);

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
