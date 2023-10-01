// ------------ Declaracion de variables ------------

let asideCar = document.getElementById(`sponsorsOutMain`);
const jsonFile = '../basedatos.JSON'
document.addEventListener("DOMContentLoaded", function () {
    noElements();
});

// ------------ Cards, aside y elementos dinamicos ------------

actualizarCarrito();

function actualizarCarrito() {
    console.log("Entrando en actualizarCarrito()");
    const carritoContainer = document.getElementById(`cardsCar`);
    carritoContainer.innerHTML = '';
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
    let totalPrecio = 0;

    carritoData.forEach(product => {
        const cantidad = product.cantidad !== undefined ? product.cantidad : 1;
        const total = product.price * product.cantidad;
        const totalString = total.toLocaleString();
        const cardContent = `
            <div class="car__container">
                <img src="${product.img}" alt="${product.alt}"> 
                <p class="car__title">${product.name}</p>
                <div class="car__container__btn">
                    <button class="car__btn-decrement">-</button>
                    <p class="car__amount">${cantidad}</p>
                    <button class="car__btn-increment">+</button>
                </div>
                <p class="car__price">$${totalString}</p>
            </div>
        `;
        totalPrecio += product.price * cantidad;
        const card = document.createElement("div");
        card.innerHTML = cardContent;
        carritoContainer.appendChild(card);
    });

    const totalBuy = document.getElementById("totalBuy");
    totalBuy.textContent = `Total a abonar: $${totalPrecio.toLocaleString()}`;
    
    agregarEventListeners();
    console.log("Saliendo de actualizarCarrito()");
}


fetch(jsonFile)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
    const asideOutMain = data.asideOutMain;
    const asideCar = document.getElementById('sponsorsOutMain');

    for (const picSponsors of asideOutMain) {
        asideCar.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
        `;
    }
    });


function noElements() {
    console.log("Ejecutando noElements()")
    const carritoData = JSON.parse(localStorage.getItem("miCarrito"));
    const noElementsElement = document.getElementById("noElements");
    const noMoreBuyBtn = document.getElementById("moreBuy");
    const totalBuy = document.getElementById("totalBuy");
    const btnBuy = document.getElementById(`btnBuy`);
    if (carritoData && carritoData.length > 0) {
        noElementsElement.style.display = "none";
        noMoreBuyBtn.style.display = "none";
        totalBuy.style.display = "block";
        btnBuy.style.display = "block";
    } else {
        noElementsElement.style.display = "block";
        noMoreBuyBtn.style.display = "block";
        totalBuy.style.display = "none";
        btnBuy.style.display = "none";
    }
}


const carritoContainer = document.getElementById(`cardsCar`);
carritoContainer.addEventListener("click", (event) => {
    const target = event.target;
    
    if (target.classList.contains("card__btn")) {
        const index = Array.from(carritoContainer.children).indexOf(target.closest(".car__container"));
        
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
        noElements();
    }
});

const carritoData = JSON.parse(localStorage.getItem("miCarrito"));

if (carritoData !== null) {
    const carritoContainer = document.getElementById(`cardsCar`);
    carritoContainer.innerHTML = '';
    carritoData.forEach(product => {
        const priceString = Number(product.price).toLocaleString();
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
                <p class="car__price">$${priceString}</p>
            </div>
        `;
        const card = document.createElement("div");
        card.innerHTML = cardContent;
        carritoContainer.appendChild(card);
    });
}


// ------------ Se les da funcionalidades de  incrementar, disminuir y eliminar elementos del localstorage  ------------


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

// ------------ Boton de pagar y total del precio ------------

const btnPagar = document.getElementById('btnBuy');
const totalBuy = document.getElementById('totalBuy');
const moreBuy = document.getElementById('moreBuy');

btnPagar.onclick = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada con éxito',
        showConfirmButton: true,
    });
    localStorage.clear();
    removeCards();
    btnPagar.style.display = 'none';
    totalBuy.style.display = 'none';
    moreBuy.style.display = 'block';
};
function removeCards() {
    const cardContainer = document.getElementById('cardsCar');
    while (cardContainer.firstChild) {
        cardContainer.firstChild.remove();
        const totalBuy = document.getElementById(`tyforbuy`);
        totalBuy.textContent = `😊Muchas gracias por tu compra, esta siendo procesada🕒 `;
    }
}
