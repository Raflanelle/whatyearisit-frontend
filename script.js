//affichage de l'année
fetch('https://whatyearisit-backend-phi-ten.vercel.app/year').then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector('#year').textContent = data.year;
});