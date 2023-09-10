let asideCar = document.getElementById(`sponsorsOutMain`);

for (const picSponsors of asideOutMain){
    asideCar.innerHTML += `
        <div>
            <h3>
                <img src="${picSponsors.img}" alt="${picSponsors.alt}">
            </h3>
        </div>
    `
}