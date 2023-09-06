let prodMain = document.getElementById(`cardsMain`);

for (const itemsMain of prodMainPage){
    prodMain.innerHTML += `
        <div class="card__container">
            <div class="card__body">
                <a href="index.html">
                    <img src="${itemsMain.img}" alt="${itemsMain.alt}">
                </a>
            </div>
            <div class="card__details">
                <h3> ${itemsMain.name} </h3>
                    <p class="card__price">$${itemsMain.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interes</p>
                    <a href="#" class="card__btn">Comprar</a>
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
