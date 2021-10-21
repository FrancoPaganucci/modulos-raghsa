const piso_prueba = document.getElementById('piso-prueba');
const superficie = document.getElementById('h1-superficie');
const img_plano = document.getElementById('img-plano');
const area_rentable = document.getElementById('area-rentable');
const area_alfombra = document.getElementById('area-alfombra');
const area_total = document.getElementById('area-total');
const piso = document.getElementById('h3-piso');
var tooltips = document.getElementsByClassName('tooltip');

// pestañas
area_rentable.addEventListener('click', () => {
    area_rentable.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/955_rentable_1018.jpg";
    superficie.innerHTML = "1018 m2";
});
area_alfombra.addEventListener('click', () => {
    area_alfombra.style.color = "orangered";
    area_rentable.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/955_alfombra_778.jpg";
    superficie.innerHTML = "778 m2";
});
area_total.addEventListener('click', () => {
    area_total.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_rentable.style.color = "#000000";
    img_plano.src = "./assets/955_total_1213.jpg";
    superficie.innerHTML = "1213 m2";
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