const piso_prueba = document.getElementById('piso-prueba');
const superficie = document.getElementById('h1-superficie');
const piso = document.getElementById('h3-piso');
const img_plano = document.getElementById('img-plano');
const area_rentable = document.getElementById('area-rentable');
const area_alfombra = document.getElementById('area-alfombra');
const area_total = document.getElementById('area-total');
var tooltips = document.getElementsByClassName('tooltip');

// pestañas
area_rentable.addEventListener('click', () => {
    area_rentable.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/MO_rentable_1234.jpg";
    superficie.innerHTML = "1234 m2";
});
area_alfombra.addEventListener('click', () => {
    area_alfombra.style.color = "orangered";
    area_rentable.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/MO_alfombra_1046.jpg";
    superficie.innerHTML = "1046 m2";
});
area_total.addEventListener('click', () => {
    area_total.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_rentable.style.color = "#000000";
    img_plano.src = "./assets/MO_total_1525.jpg";
    superficie.innerHTML = "1525 m2";
});

// función pisos
for (i = 0; i < tooltips.length; i++) {
    let numero = tooltips[i].id;
    tooltips[i].addEventListener('click', () => {
        cambiarPiso(numero);
    });
};
function cambiarPiso(numero) {
    piso.innerHTML = "Piso " + numero;
}