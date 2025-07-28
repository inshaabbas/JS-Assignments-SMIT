var weather = prompt("Please select your favourite weather below: \n 1) Winter \n 2) Summer \n 3) Rainy \n 4) Thunderstorm \n 5) Autumn \n 6) Spring");

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
}else if (weather === "Autumn"){
    document.writeln(`
        <div class="autumn-main">
   <div class="autumn-card">
    <div class="autumn-img">
        <img src="./Assets/autumn-card.gif" alt="Winter img">
    </div>
    <div class="autumn-text">
        <h1>🍂 Whispers of Fall 🍂</h1>
        <p>Golden leaves fall, the breeze turns crisp, and the world wraps itself in warmth and color.</p>
    </div>
   </div>
   </div>
        `)
}else if (weather === "Thunderstorm"){
    document.writeln(`
        <div class="thunderstorm-main">
   <div class="thunderstorm-card">
    <div class="thunderstorm-img">
        <img src="./Assets/Thunderstorm.card.webp" alt="Winter img">
    </div>
    <div class="thunderstorm-text">
        <h1>⚡ Thunderstorm Roars ⚡</h1>
        <p>Skies rumble, lightning strikes, and nature shows its wild, electric side.</p>
    </div>
   </div>
   </div>
        `)
}else if (weather === "Spring"){
    document.writeln(`
        <div class="spring-main">
   <div class="spring-card">
    <div class="spring-img">
        <img src="./Assets/Spring-card.gif" alt="Winter img">
    </div>
    <div class="spring-text">
        <h1>🌸 Blooming into Spring 🌸</h1>
        <p>Spring brings life and color to the world, as flowers bloom and the days grow brighter.</p>
    </div>
   </div>
   </div> 
        `)
}else{
    // alert("Invalid input! Please type exactly one of these: Winter, Summer, Rainy, Thunderstorm, Autumn, or Spring.");
    document.writeln()`
        <div class="error-message" id="errorMessage">
            🚫 Invalid input! Please select one of the following: <strong>Winter</strong>, <strong>Summer</strong>, <strong>Rainy</strong>, <strong>Thunderstorm</strong>, <strong>Autumn</strong>, or <strong>Spring</strong>.
        </div>
    `;
}