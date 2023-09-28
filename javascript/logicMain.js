// ------------ Declaracion de variables ------------

let prodMain = document.getElementById(`cardsMain`);

// ------------ Cards dinamicas y aside dinamico ------------

for (const itemsMain of prodMainPage){
    prodMain.innerHTML += `
        <div class="card__container">
            <div class="card__body">
                <a>
                    <img src="${itemsMain.img2}" alt="${itemsMain.alt}">
                </a>
            </div>
            <div class="card__details">
                <h3> ${itemsMain.name} </h3>
                    <p class="card__price">$${itemsMain.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <div class="card__btn__container"  class="btn_toast">
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
        const productoExistenteIndex = carrito.findIndex(p => p.id === productoSeleccionado.id);
        if (productoExistenteIndex !== -1) {
            carrito[productoExistenteIndex].cantidad += 1;
        } else {
            carrito.push({ ...productoSeleccionado, cantidad: 1 });
        }
        localStorage.setItem("miCarrito", JSON.stringify(carrito));
        Toastify({
            text: "Agregado al carrito",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
        }).showToast();
    });
});

/*
const localStorageData = localStorage.getItem('miCarrito');
const dataArray = JSON.parse(localStorageData)
const carritoLocal = []
carritoLocal.push(localStorageData)*/

