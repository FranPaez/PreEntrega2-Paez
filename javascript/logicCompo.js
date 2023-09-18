
// ------------ Declaracion de variables ------------

let prodCompo = document.getElementById(`cardsCompo`);
let asideComp = document.getElementById(`sponsorsOutMain`);

// ------------ Cards dinamicas y aside dinamico ------------

for (const itemsCompo of prodCompoPage){
    cardsCompo.innerHTML += `
        <div class="card__prod">
            <div class="card__prodcontainer">
                <a>
                    <img src="${itemsCompo.img}" alt="${itemsCompo.alt}">
                </a>
        </div>
        <div class="card__proddetails">
            <h3>${itemsCompo.name}</h3>
                <p class="card__price">$${itemsCompo.price}</p>
                <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <a class="card__btn">Comprar</a>
            </div>
        </div>
    `
}

for (const picSponsors of asideOutMain){
    asideComp.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
    `
}

// ------------ Funciones aplicadas a las listas ------------

// ------------ Funciones en la seccion productos de las listas ------------

const filtrarPorPrecioMinimo = (prodCompoPage, precioMin, precioMax) => {
    const filterMin = prodCompoPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMin.sort((a,b) => a.price - b.price);
    return filterMin
}

const filtrarPorPrecioMaximo = (prodCompoPage, precioMin, precioMax) => {
    const filterMax = prodCompoPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMax.sort((a,b) => b.price - a.price);
    return filterMax
}

const listaDeOpciones = document.querySelectorAll(".priceC__list li");

const handleMostrarTodos = () => {
    mostrarProductos(prodCompoPage); 
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
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
    prodPer.innerHTML = contenidoHTML;
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        prodCompo.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        const marcaHyperx = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterHx;
    });
    prodPer.innerHTML = "";
    marcaHyperx.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        const marcaRazer = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterRZ;
    });
    prodPer.innerHTML = "";
    marcaRazer.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
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
        const marcaSteelseries = prodCompoPage.filter(producto =>{
        return producto.brand === brandFilterSS;
    });
    prodPer.innerHTML = "";
    marcaSteelseries.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

