let prodMain = document.getElementById(`cardsMain`);

for (const itemsMain of prodMainPage){
    prodMain.innerHTML += `
        <div class="card__container">
            <div class="card__body">
                <a>
                    <img src="${itemsMain.img}" alt="${itemsMain.alt}">
                </a>
            </div>
            <div class="card__details">
                <h3> ${itemsMain.name} </h3>
                    <p class="card__price">$${itemsMain.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <div class="card__info__container">
                    <a class="card__info" id="showPopup">Ver más info</a>
                </div>
                <div class="card__btn__container">
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

const showPopupButton = document.getElementById("showPopup");

showPopupButton.addEventListener("click", function() {
    popup.style.display = "block";
});