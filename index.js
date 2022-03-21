
const chiste_btn = document.querySelector('#chiste_btn');
const chiste_div = document.querySelector('#chiste_div');
const score_btn = document.querySelector('#score_bot');
const weather_div = document.querySelector('.tiempoHoy');

//import personalApiKey from '/apikey.js';

let scoreUser = 0;
let reportAcudits = [];
let joke = '';
let dadJoke = '';

const getData = function() {
    chiste_div.innerText = "cargando dadJokes..."
    changeImage();
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
            chiste_div.innerText = data.joke;
            joke = data.joke;
            console.log(reportAcudits);
            return joke;
        }) 
        .catch(error => console.log(error))
};

const getNorris = function() {
  changeImage();
  chiste_div.innerText = "cargando norriesJokes..."
  fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
          chiste_div.innerText = data.value;
          joke = (data.value);
          console.log(reportAcudits);
          return joke;
      }) 
      .catch(error => console.log(error))
};

let showJoke = function(){
  let randomJoke = Math.floor(Math.random() * 2);
  if(randomJoke===1){
    getData();
  }else{
    getNorris();
  }  
};

let getValoration = function(value) {
  const d = new Date();
  let text = d.toISOString();
  
  if(value === 1){
    scoreUser = 1;
  }else if(value === 2){
    scoreUser = 2;
  }else if(value === 3){
    scoreUser = 3;
  };

  reportAcudits.push({joke: joke, date: text, score: scoreUser});
  return scoreUser;
};

async function fetchWeatherJSON() {
  const personalApiKey = 'a408449b27687356ad659876873bd4dd';
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=' + personalApiKey);
  //const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=a408449b27687356ad659876873bd4dd');
  const weather = await response.json();
  return weather;
}

fetchWeatherJSON().then(weather => {
  var iconcode = weather.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var weatherCelsius = (weather.main.temp - 273.15).toFixed(2); 
  weather_div.innerHTML = (weatherCelsius + ' Cº'); 
  document.getElementById("imgicon").src=iconurl;
});

let changeImage = function(){
  let numRandom = Math.floor(Math.random() * 3) + 1;
  let bckgImage = "url(img/blob2.svg), url(img/blob" + numRandom + ".svg), url(img/blob3.svg)"
  document.getElementById("chistes_wrap_div").style.backgroundImage = bckgImage;
}

chiste_btn.addEventListener('click', showJoke);