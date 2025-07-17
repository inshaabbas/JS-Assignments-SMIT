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
}else if (weather === "Summer"){
    document.writeln(`
        <div class="summer-main">
   <div class="summer-card">
    <div class="summer-img">
        <img src="./Assets/summer-card.gif" alt="Winter img">
    </div>
    <div class="summer-text">
        <h1>🍹 Sweet Summer Days 🍹</h1>
        <p>Sunny skies, tropical breeze, and endless adventures!</p>
    </div>
   </div>
   </div>
        `)
}else if (weather === "Rainy"){
    document.writeln(`
        <div class="rainy-main">
   <div class="rainy-card">
    <div class="rainy-img">
        <img src="./Assets/rainy-card.gif" alt="Winter img">
    </div>
    <div class="rainy-text">
        <h1>🌧️ Rainy Days Bliss 🌧️</h1>
        <p>Raindrops tapping, cozy vibes, and fresh earthy smells in the air.</p>
    </div>
   </div>
   </div>
        `)
}else if(weather === "Autumn"){
    document.writeln(``)
}