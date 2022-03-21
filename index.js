const chiste_btn = document.querySelector('#chiste_btn');
const chiste_div = document.querySelector('#chiste_div');
const score_btn = document.querySelector('#score_bot');
const weather_div = document.querySelector('.tiempoHoy');
//const weather_icon_div = document.querySelector('.imgicon');


let scoreUser = 0;

let reportAcudits = [
 /*  {
    joke: "...",
    score: 1,
    date: ''
  } */
];

let joke = '';
let dadJoke = '';


const getData = function() {
    /* const d = new Date();
    let text = d.toISOString(); */

    chiste_div.innerText = "cargando dadJokes..."
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
            chiste_div.innerText = JSON.stringify(data.joke, null, 2);
            //dadJoke = JSON.stringify(data.joke, null, 2);

            /* reportAcudits.push({joke: data.joke, date: text, score: getValoration()});
            alert(reportAcudits[0].joke + reportAcudits[0].date + reportAcudits[0].score + reportAcudits.length); */
            joke = data.joke;
            console.log(reportAcudits);
            return joke;
        }) 
        .catch(error => console.log(error))
};

/* async function getNorris() {
  const response2 = await fetch('https://api.chucknorris.io/jokes/random');
  const norrisJokes = await response2.json();
  return norrisJokes;
}
getNorris().then(norrisJokes => {
  chiste_div.innerHTML = (norrisJokes.value); // fetched weather
}); */

const getNorris = function() {
  /* const d = new Date();
  let text = d.toISOString(); */

  chiste_div.innerText = "cargando norriesJokes..."
  fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
          chiste_div.innerText = JSON.stringify(data.value, null, 2);
          //norrisJoke = JSON.stringify(data.value, null, 2);
          joke = (data.value); // fetched weather


          /* reportAcudits.push({joke: data.joke, date: text, score: getValoration()});
          alert(reportAcudits[0].joke + reportAcudits[0].date + reportAcudits[0].score + reportAcudits.length); */
          //jokeUser = data.joke;
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
  //chiste_div.innerText = dadJoke;
  
};

//chiste_div.innerText = showJoke();


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
  //alert(jokeUser);
  //alert(reportAcudits[0].joke + reportAcudits[0].date + reportAcudits[0].score + reportAcudits.length);
  return scoreUser;
};

async function fetchWeatherJSON() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=a408449b27687356ad659876873bd4dd');
  const weather = await response.json();
  return weather;
}
fetchWeatherJSON().then(weather => {
  var iconcode = weather.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  var weatherCelsius = (weather.main.temp - 273.15).toFixed(2); 
  weather_div.innerHTML = (weatherCelsius + ' Cº'); // fetched weather
  document.getElementById("imgicon").src=iconurl;
});

 

//https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=a408449b27687356ad659876873bd4dd
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a408449b27687356ad659876873bd4dd

//chiste_btn.addEventListener('click', getData);
chiste_btn.addEventListener('click', showJoke);