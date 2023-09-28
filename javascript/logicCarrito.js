// ------------ Declaracion de variables ------------

let asideCar = document.getElementById(`sponsorsOutMain`);

// ------------ Cards dinamicas y aside dinamico ------------

for (const picSponsors of asideOutMain){
    asideCar.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
    `
}

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

const carritoData = JSON.parse(localStorage.getItem("miCarrito"));

if (carritoData !== null) {
    const carritoContainer = document.getElementById(`cardsCar`);
    carritoContainer.innerHTML = '';
    carritoData.forEach(product => {
        const cantidad = product.cantidad !== undefined ? product.cantidad : 1;
        const cardContent = `
            <div class="car__container">
                <img src="${product.img}" alt="${product.alt}"> 
                <p class="car__title">${product.name}</p>
                <div class="car__container__btn">
                    <button class="car__btn-decrement">-</button>
                    <p class="car__amount">${cantidad}</p>
                    <button class="car__btn-increment">+</button>
                </div>
                <p class="car__price">${product.price}</p>
            </div>
        `;
        const card = document.createElement("div");
        card.innerHTML = cardContent;
        carritoContainer.appendChild(card);
    });
} else {
    console.log("No hay datos en el carrito");
}

// ------------ Se le agregan eventos a a los boton de + y -  ------------

const btnDecrement = document.querySelectorAll(".car__btn-decrement");
const btnIncrement = document.querySelectorAll(".car__btn-increment");

btnDecrement.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        decrementarCantidad(index);
    });
});

btnIncrement.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        incrementarCantidad(index);
    });
});

// ------------ Se les da funcionalidades de disminuir y eliminar elementos del localstorage  ------------

function incrementarCantidad(index) {
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
    carritoData[index].cantidad += 1;
    localStorage.setItem("miCarrito", JSON.stringify(carritoData));
    actualizarCarrito();
}

function decrementarCantidad(index) {
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
        carritoData[index].cantidad -= 1;
        localStorage.setItem("miCarrito", JSON.stringify(carritoData));
        actualizarCarrito();
    }


function actualizarCarrito() {
    const carritoContainer = document.getElementById(`cardsCar`);
    carritoContainer.innerHTML = '';
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));

    carritoData.forEach(product => {
        const cantidad = product.cantidad !== undefined ? product.cantidad : 1;
        const cardContent = `
            <div class="car__container">
                <img src="${product.img}" alt="${product.alt}"> 
                <p class="car__title">${product.name}</p>
                <div class="car__container__btn">
                    <button class="car__btn-decrement">-</button>
                    <p class="car__amount">${cantidad}</p>
                    <button class="car__btn-increment">+</button>
                </div>
                <p class="car__price">${product.price}</p>
            </div>
        `;
        const card = document.createElement("div");
        card.innerHTML = cardContent;
        carritoContainer.appendChild(card);
    });
    agregarEventListeners();
}

function agregarEventListeners() {
    const btnDecrement = document.querySelectorAll(".car__btn-decrement");
    const btnIncrement = document.querySelectorAll(".car__btn-increment");

    btnDecrement.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            decrementarCantidad(index);
        });
    });

    btnIncrement.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            incrementarCantidad(index);
        });
    });
}
agregarEventListeners();

function incrementarCantidad(index) {
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
    carritoData[index].cantidad += 1;
    localStorage.setItem("miCarrito", JSON.stringify(carritoData));
    actualizarCarrito();
}

function decrementarCantidad(index) {
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
    if (carritoData[index].cantidad > 1) {
        carritoData[index].cantidad -= 1;
    } else {
        carritoData.splice(index, 1);
    }
    localStorage.setItem("miCarrito", JSON.stringify(carritoData));
    actualizarCarrito();
}

// ------------ Creacion del total a abonar ------------


const nuevoDiv = document.createElement("div");

// Configurar propiedades del elemento (opcional)
nuevoDiv.className = "mi-clase";
nuevoDiv.textContent = "¡Hola, soy un nuevo elemento!";

// Agregar el nuevo elemento al DOM
const contenedor = document.getElementById("miContenedor"); // Reemplaza "miContenedor" con el ID de tu contenedor
contenedor.appendChild(nuevoDiv);






