//affichage de l'année
fetch('http://localhost:3000/year').then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector('#year').textContent = data.year;
});