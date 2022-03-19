const chiste_btn = document.querySelector('#chiste_btn');
const chiste_div = document.querySelector('#chiste_div');
const score_btn = document.querySelector('#score_bot');

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

chiste_btn.addEventListener('click', getData);