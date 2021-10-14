const piso_prueba = document.getElementById('piso-prueba');
const superficie = document.getElementById('h1-superficie');
const img_plano = document.getElementById('img-plano');
const area_rentable = document.getElementById('area-rentable');
const area_alfombra = document.getElementById('area-alfombra');
const area_total = document.getElementById('area-total');

// pestañas
area_rentable.addEventListener('click', () => {
    area_rentable.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/MR_rentable_1411.jpg";
});
area_alfombra.addEventListener('click', () => {
    area_alfombra.style.color = "orangered";
    area_rentable.style.color = "#000000";
    area_total.style.color = "#000000";
    img_plano.src = "./assets/MR_alfombra_1234.jpg";
});
area_total.addEventListener('click', () => {
    area_total.style.color = "orangered";
    area_alfombra.style.color = "#000000";
    area_rentable.style.color = "#000000";
    img_plano.src = "./assets/MR_total_1541.jpg";
});


// superficies por piso
piso_prueba.addEventListener('click', () => {
    superficie.innerHTML = "1932 m2";
})