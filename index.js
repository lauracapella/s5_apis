const chiste_btn = document.querySelector('#chiste_btn');
const chiste_div = document.querySelector('#chiste_div');
const getData = function() {
    chiste_div.innerText = "cargando..."
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
            chiste_div.innerText = JSON.stringify(data.joke, null, 2)
        }) 
        .catch(error => console.log(error))
};
chiste_btn.addEventListener('click', getData);
