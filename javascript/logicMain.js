// ------------ Declaracion de variables ------------

let prodMain = document.getElementById(`cardsMain`);
const jsonFile = './basedatos.JSON'

// ------------ Cards dinamicas y aside dinamico ------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodMainPageArray = data.prodMainPage;

    for (const item of prodMainPageArray) {
        const priceString = Number(item.price).toLocaleString();
        prodMain.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${item.img}" alt="${item.alt}">
                    </a>
            </div>
            <div class="card__proddetails">
                <h3>${item.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
            </div>
            </div>
    `;
    }
})

fetch(jsonFile)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
    const asideMain = data.asideMain;
    const asideCar = document.getElementById('sponsorsMain');

    for (const picSponsors of asideMain) {
        asideCar.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
        `;
    }
    });


// ------------ Logica del funcionamiento del carrito, de momento almacena en Local Storage------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodMainPage = data.prodMainPage;
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
})


