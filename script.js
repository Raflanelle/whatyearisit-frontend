//affichage de l'année
fetch('whatyearisit-backend-phi-ten.vercel.app/year').then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector('#year').textContent = data.year;
});