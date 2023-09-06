let prodPer = document.getElementById(`cardsPer`);

for (const itemsPer of prodPerPage){
    prodPer.innerHTML += `
        <div class="card__prod">
            <div class="card__prodcontainer">
                <a href="#">
                <img src="${itemsPer.img}" alt="${itemsPer.alt}">
                </a>
            </div>
            <div class="card__proddetails">
            <h3>${itemsPer.name}</h3>
                <p class="${itemsPer.price}">$27.700</p>
                <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <a href="#" class="card__btn">Comprar</a>
            </div>
        </div>
    `
}