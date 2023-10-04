// ------------ Declaracion de variables y JSON ------------

let prodPer = document.getElementById(`cardsPer`);
let precioMinimo = 0;
let precioMaximo = Number.POSITIVE_INFINITY;
const jsonFile = './javascript/basedatos.json'

// ------------ Cards dinamicas ------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodPerPageArray = data.prodPerPage;

    for (const item of prodPerPageArray) {
        const priceString = Number(item.price).toLocaleString();
        prodPer.innerHTML += `
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

// ------------ Funciones aplicadas a las listas ------------

// ------------ Funciones en la seccion productos de las listas ------------

const formatearPrecio = (precio) => Number(precio).toLocaleString();

const filtrarPorPrecioMinimo = (prodPerPage, precioMin, precioMax) => {
    const filterMin = prodPerPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMin.sort((a, b) => a.price - b.price);
    return filterMin.map(item => ({ ...item, price: formatearPrecio(item.price) }));
};

const filtrarPorPrecioMaximo = (prodPerPage, precioMin, precioMax) => {
    const filterMax = prodPerPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMax.sort((a, b) => b.price - a.price);
    return filterMax.map(item => ({ ...item, price: formatearPrecio(item.price) }));
};

const listaDeOpciones = document.querySelectorAll(".priceP__list li");

const handleMostrarTodos = () => {
    const productosFormateados = prodPerPage.map(item => ({ ...item, price: formatearPrecio(item.price) }));
    mostrarProductos(productosFormateados);
};

const handlePrecioMenorAMayor = () => {
    const productosFiltrados = filtrarPorPrecioMinimo(prodPerPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

const handlePrecioMayorAMenor = () => {
    const productosFiltrados = filtrarPorPrecioMaximo(prodPerPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

listaDeOpciones[0].addEventListener("click", handleMostrarTodos);
listaDeOpciones[1].addEventListener("click", handlePrecioMenorAMayor); 
listaDeOpciones[2].addEventListener("click", handlePrecioMayorAMenor);
const mostrarProductos = (productos) => {
    let contenidoHTML = "";
    productos.forEach(producto => {
        contenidoHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
    prodPer.innerHTML = contenidoHTML;
};

// ------------ Funciones en la seccion perifericos de las listas ------------

const elementMouse = document.getElementById("categoryP__list").getElementsByTagName("li")[0];
elementMouse.addEventListener("click", function() {

const categoryFilterMouse = "mouse";
        const categoriaMouse = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterMouse;
    })
    prodPer.innerHTML = "";
    categoriaMouse.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementKeyboard = document.getElementById("categoryP__list").getElementsByTagName("li")[1];

elementKeyboard.addEventListener("click", function() {
const categoryFilterKeyboard = "teclado";
        const categoriaKeyboard = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterKeyboard;
    })
    prodPer.innerHTML = "";
    categoriaKeyboard.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementMousepad = document.getElementById("categoryP__list").getElementsByTagName("li")[2];

elementMousepad.addEventListener("click", function() {

const categoryFilterMousepad = "mousepad";
        const categoriaMousepad = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterMousepad;
    })
    prodPer.innerHTML = "";
    categoriaMousepad.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementHeadphones = document.getElementById("categoryP__list").getElementsByTagName("li")[3];
elementHeadphones.addEventListener("click", function() {

const categoryFilterHeadphones = "auriculares";
        const categoriaHeadphones = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterHeadphones;
    })
    prodPer.innerHTML = "";
    categoriaHeadphones.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementAccessory = document.getElementById("categoryP__list").getElementsByTagName("li")[4];
elementAccessory.addEventListener("click", function() {

const categoryFilterAccessory = "accesorio";
        const categoriaAccessory = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterAccessory;
    })
    prodPer.innerHTML = "";
    categoriaAccessory.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

// ------------ Funciones en la seccion marcas de las listas ------------

const elementHyperx = document.getElementById("brandP__list").getElementsByTagName("li")[0];

elementHyperx.addEventListener("click", function() {

const brandFilterHx = "hyperx";
        const marcaHyperx = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterHx;
    });
    prodPer.innerHTML = "";
    marcaHyperx.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementRazer = document.getElementById("brandP__list").getElementsByTagName("li")[1];

elementRazer.addEventListener("click", function() {
const brandFilterRZ = "razer";
        const marcaRazer = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterRZ;
    });
    prodPer.innerHTML = "";
    marcaRazer.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementSteelseries = document.getElementById("brandP__list").getElementsByTagName("li")[2];

elementSteelseries.addEventListener("click", function() {
const brandFilterSS = "steelseries";
        const marcaSteelseries = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterSS;
    });
    prodPer.innerHTML = "";
    marcaSteelseries.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">$${priceString}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

// ------------ Logica del funcionamiento del carrito ------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodPerPage = data.prodPerPage;
    const btnBuy = document.querySelectorAll(".card__btn");
    btnBuy.forEach((boton, index) => {
    boton.addEventListener("click", function () {
        const productoSeleccionado = prodPerPage[index];
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

