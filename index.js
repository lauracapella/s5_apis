const chiste_btn = document.querySelector('#chiste_btn');
const chiste_div = document.querySelector('#chiste_div');
const score_btn = document.querySelector('#score_bot');
const weather_div = document.querySelector('.tiempoHoy');

let scoreUser = 0;

let reportAcudits = [
 /*  {
    joke: "...",
    score: 1,
    date: ''
  } */
];

let jokeUser = 'hola test';


const getData = function() {
    /* const d = new Date();
    let text = d.toISOString(); */

    chiste_div.innerText = "cargando..."
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
            chiste_div.innerText = JSON.stringify(data.joke, null, 2);
            /* reportAcudits.push({joke: data.joke, date: text, score: getValoration()});
            alert(reportAcudits[0].joke + reportAcudits[0].date + reportAcudits[0].score + reportAcudits.length); */
            jokeUser = data.joke;
            console.log(reportAcudits);
            return jokeUser;
        }) 
        .catch(error => console.log(error))
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

  reportAcudits.push({joke: jokeUser, date: text, score: scoreUser});
  //alert(jokeUser);
  alert(reportAcudits[0].joke + reportAcudits[0].date + reportAcudits[0].score + reportAcudits.length);
  return scoreUser;
};



async function fetchWeatherJSON() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=a408449b27687356ad659876873bd4dd');
  const weather = await response.json();
  return weather;
}
fetchWeatherJSON().then(weather => {
  weather_div.innerHTML = (weather.weather[0].main); // fetched weather
});
 

//https://api.openweathermap.org/data/2.5/weather?lat=41.3874&lon=2.1686&appid=a408449b27687356ad659876873bd4dd
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a408449b27687356ad659876873bd4dd

chiste_btn.addEventListener('click', getData);