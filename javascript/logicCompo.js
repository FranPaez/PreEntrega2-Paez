
// ------------ Declaracion de variables ------------

let prodCompo = document.getElementById(`cardsCompo`);
let asideComp = document.getElementById(`sponsorsOutMain`);
let precioMinimo = 0;
let precioMaximo = Number.POSITIVE_INFINITY;
const jsonFile = '../basedatos.JSON'

// ------------ Cards dinamicas y aside dinamico ------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodCompoPageArray = data.prodCompoPage;

    for (const item of prodCompoPageArray) {
        const priceString = Number(item.price).toLocaleString();
        prodCompo.innerHTML += `
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
const listaDeOpciones = document.querySelectorAll(".priceC__list li");

const handleMostrarTodos = () => {
    const productosFormateados = prodCompoPage.map(item => ({ ...item, price: formatearPrecio(item.price) }));
    mostrarProductos(productosFormateados); 
};

const handlePrecioMenosAMayor = () => {
    const productosFiltrados = filtrarPorPrecioMinimo(prodCompoPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

const handlePrecioMayorAMenor = () => {
    const productosFiltrados = filtrarPorPrecioMaximo(prodCompoPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

listaDeOpciones[0].addEventListener("click", handleMostrarTodos);
listaDeOpciones[1].addEventListener("click", handlePrecioMenosAMayor); 
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
    prodCompo.innerHTML = contenidoHTML;
};

// ------------ Funciones en la seccion perifericos de las listas ------------

const elementProcessor = document.getElementById("categoryC__list").getElementsByTagName("li")[0];
elementProcessor.addEventListener("click", function() {

const categoryFilterProcessor = "procesador";
        const categoriaProcesador = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterProcessor;
    })
    prodCompo.innerHTML = "";
    categoriaProcesador.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementMotherboard = document.getElementById("categoryC__list").getElementsByTagName("li")[1];
elementMotherboard.addEventListener("click", function() {
const categoryFilterMotherboard = "motherboard";
        const categoriaPlacaMadre = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterMotherboard;
    })
    prodCompo.innerHTML = "";
    categoriaPlacaMadre.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementVideocard = document.getElementById("categoryC__list").getElementsByTagName("li")[2];
elementVideocard.addEventListener("click", function() {
const categoryFilterVideocard = "videocard";
        const categoriaPlacaDeVideo = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterVideocard;
    })
    prodCompo.innerHTML = "";
    categoriaPlacaDeVideo.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementRam = document.getElementById("categoryC__list").getElementsByTagName("li")[3];
elementRam.addEventListener("click", function() {
const categoryFilterRam = "ram";
        const categoriaMemoriaRam = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterRam;
    })
    prodCompo.innerHTML = "";
    categoriaMemoriaRam.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementDisck = document.getElementById("categoryC__list").getElementsByTagName("li")[4];
elementDisck.addEventListener("click", function() {
const categoryFilterDisck = "disco";
        const categoriaDisco = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterDisck;
    })
    prodCompo.innerHTML = "";
    categoriaDisco.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementRefrigeration = document.getElementById("categoryC__list").getElementsByTagName("li")[5];
elementRefrigeration.addEventListener("click", function() {
const categoryFilterRefrigeration = "refrigeracion";
        const categoriaRefrigeracion = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterRefrigeration;
    })
    prodCompo.innerHTML = "";
    categoriaRefrigeracion.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementCase = document.getElementById("categoryC__list").getElementsByTagName("li")[6];
elementCase.addEventListener("click", function() {
const categoryFilterCase = "gabinete";
        const categoriaGabinete = prodCompoPage.filter(producto =>{
        return producto.category === categoryFilterCase;
    })
    prodCompo.innerHTML = "";
    categoriaGabinete.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementIntel = document.getElementById("brandC__list").getElementsByTagName("li")[0];
elementIntel.addEventListener("click", function() {

const brandFilterIntel = "intel";
        const marcaIntel = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterIntel;
    });
    prodCompo.innerHTML = "";
    marcaIntel.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementAmd = document.getElementById("brandC__list").getElementsByTagName("li")[1];
elementAmd.addEventListener("click", function() {
const brandFilterAmd = "amd";
        const marcaAmd = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterAmd;
    });
    prodCompo.innerHTML = "";
    marcaAmd.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementMsi = document.getElementById("brandC__list").getElementsByTagName("li")[2];
elementMsi.addEventListener("click", function() {
const brandFilterMsi = "msi";
        const marcaMsi = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterMsi;
    });
    prodCompo.innerHTML = "";
    marcaMsi.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementAsus = document.getElementById("brandC__list").getElementsByTagName("li")[3];
elementAsus.addEventListener("click", function() {
const brandFilterAsus = "asus";
        const marcaAsus = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterAsus;
    });
    prodCompo.innerHTML = "";
    marcaAsus.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementHyperx = document.getElementById("brandC__list").getElementsByTagName("li")[4];
elementHyperx.addEventListener("click", function() {

const brandFilterHx = "hyperx";
        const marcaHyperx = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterHx;
    });
    prodCompo.innerHTML = "";
    marcaHyperx.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementCorsair = document.getElementById("brandC__list").getElementsByTagName("li")[5];
elementCorsair.addEventListener("click", function() {
const brandFilterCorsair = "corsair";
        const marcaCorsair = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterCorsair;
    });
    prodCompo.innerHTML = "";
    marcaCorsair.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementCoolmaster = document.getElementById("brandC__list").getElementsByTagName("li")[6];
elementCoolmaster.addEventListener("click", function() {
const brandFilterCoolmaster = "coolmaster";
        const marcaCoolmaster = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterCoolmaster;
    });
    prodCompo.innerHTML = "";
    marcaCoolmaster.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

const elementDeepcool = document.getElementById("brandC__list").getElementsByTagName("li")[7];
elementDeepcool.addEventListener("click", function() {
const brandFilterDeepcool = "deepcool";
        const marcaDeepcool = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterDeepcool;
    });
    prodCompo.innerHTML = "";
    marcaDeepcool.forEach(producto => {
        const priceString = Number(producto.price).toLocaleString();
        prodCompo.innerHTML += `
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

// ------------ Logica del funcionamiento del carrito, de momento almacena en Local Storage------------

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
    const prodComponPage = data.prodCompoPage;
    const btnBuy = document.querySelectorAll(".card__btn");
    btnBuy.forEach((boton, index) => {
    boton.addEventListener("click", function () {
        const productoSeleccionado = prodCompoPage[index];
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

