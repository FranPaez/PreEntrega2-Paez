// ------------ Declaracion de variables ------------

let prodMain = document.getElementById(`cardsMain`);

// ------------ Cards dinamicas y aside dinamico ------------

for (const itemsMain of prodMainPage){
    prodMain.innerHTML += `
        <div class="card__container">
            <div class="card__body">
                <a>
                    <img src="${itemsMain.img}" alt="${itemsMain.alt}">
                </a>
            </div>
            <div class="card__details">
                <h3> ${itemsMain.name} </h3>
                    <p class="card__price">$${itemsMain.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <div class="card__btn__container">
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        </div>
    `
}

let asideIndex = document.getElementById(`sponsorsMain`);

for (const picSponsors of asideMain){
    asideIndex.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
    `
}

// ------------ Logica del funcionamiento del carrito, de momento almacena en Local Storage------------

const btnBuy = document.querySelectorAll(".card__btn");
btnBuy.forEach((boton, index) => {
    boton.addEventListener("click", function () {
    const productoSeleccionado = prodMainPage[index];
    const carrito = JSON.parse(localStorage.getItem("miCarrito")) || [];
    carrito.push(productoSeleccionado);
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
});
});
