let prodCompo = document.getElementById(`cardsCompo`);

for (const itemsCompo of prodCompoPage){
    cardsCompo.innerHTML += `
        <div class="card__prod">
            <div class="card__prodcontainer">
                <a href="#">
                    <img src="${itemsCompo.img}" alt="${itemsCompo.alt}">
                </a>
        </div>
        <div class="card__proddetails">
            <h3>${itemsCompo.name}</h3>
                <p class="card__price">$${itemsCompo.price}</p>
                <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <a href="#" class="card__btn">Comprar</a>
            </div>
        </div>
    `
}

let asideComp = document.getElementById(`sponsorsOutMain`);

for (const picSponsors of asideOutMain){
    asideComp.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
    `
}