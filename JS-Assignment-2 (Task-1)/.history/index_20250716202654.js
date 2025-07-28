var weather = prompt("Please select your favourite weather below: \n 1) Winter \n 2) Summer \n 3) Rainy \n 4) Thunderstorm \n 5) Autumn");

if (weather === "Winter"){
    document.writeln(`
         <div class="winter-main">
   <div class="winter-card">
    <div class="winter-img">
        <img src="./Assets/snow-card.gif" alt="Winter img">
    </div>
    <div class="winter-text">
        <h1>❄️ Winter Season ❄️</h1>
        <p>Cold winds, cozy vibes, and snowflakes everywhere!</p>
    </div>
   </div>
   </div>
        `)
}else if (weather === "Summer")